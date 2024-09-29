import { LanguageKeys } from '#lib/i18n/LanguageKeys';
import { acryssRequest } from '#lib/utilities/acryss';
import { Command, RegisterCommand, RegisterSubcommand } from '@skyra/http-framework';
import { applyLocalizedBuilder, resolveUserKey } from '@skyra/http-framework-i18n';
import { Client, MaximumSystems, Server } from '@skyra/internal';
import { MessageFlags, PermissionFlagsBits, Routes, type RESTGetAPIGuildResult } from 'discord-api-types/v10';

const Root = LanguageKeys.Commands.Universe;

@RegisterCommand((builder) =>
	applyLocalizedBuilder(builder, Root.RootName, Root.RootDescription)
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
		.setDMPermission(false)
)
export class UserCommand extends Command {
	@RegisterSubcommand((builder) =>
		applyLocalizedBuilder(builder, Root.Initialize)
			.addIntegerOption((builder) => applyLocalizedBuilder(builder, Root.OptionsSystems).setMinValue(5).setMaxValue(MaximumSystems))
			.addStringOption((builder) => applyLocalizedBuilder(builder, Root.OptionsName).setMinLength(2).setMaxLength(64))
	)
	public async initialize(interaction: Command.ChatInputInteraction, options: Options) {
		const { name, systems } = await this.getDefaultOptions(interaction, options);
		const response = await acryssRequest(interaction.user.id, Client.writeUniverseCreate({ id: BigInt(interaction.guildId!), systems, name }));

		const content = Server.isOk(response)
			? resolveUserKey(interaction, Root.InitializeSuccess)
			: resolveUserKey(interaction, Root.InitializeError);
		return interaction.reply({ content, flags: MessageFlags.Ephemeral });
	}

	private async getDefaultOptions(interaction: Command.ChatInputInteraction, options: Options): Promise<Required<Options>> {
		if (options.systems && options.name) return options as Required<Options>;

		const route = Routes.guild(interaction.guildId!);
		const guild = (await this.container.rest.get(route, { query: UserCommand.GuildGetQuery })) as RESTGetAPIGuildResult;
		return {
			name: options.name ?? guild.name,
			systems: options.systems ?? Math.ceil(guild.approximate_member_count! / 4)
		};
	}

	private static readonly GuildGetQuery = new URLSearchParams({ with_counts: 'true' });
}

interface Options {
	systems?: number;
	name?: string;
}
