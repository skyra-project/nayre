import { LanguageKeys } from '#lib/i18n/LanguageKeys';
import { acryssRequest } from '#lib/utilities/acryss';
import { Command, RegisterCommand, RegisterSubCommand } from '@skyra/http-framework';
import { applyLocalizedBuilder, resolveUserKey } from '@skyra/http-framework-i18n';
import { Client, Server } from '@skyra/internal';
import { MessageFlags, PermissionFlagsBits } from 'discord-api-types/v10';

@RegisterCommand((builder) =>
	applyLocalizedBuilder(builder, LanguageKeys.Commands.Universe.RootName, LanguageKeys.Commands.Universe.RootDescription)
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
		.setDMPermission(false)
)
export class UserCommand extends Command {
	@RegisterSubCommand((builder) => applyLocalizedBuilder(builder, LanguageKeys.Commands.Universe.Initialize))
	public async initialize(interaction: Command.ChatInputInteraction) {
		const response = await acryssRequest(interaction.user.id, Client.writeCreateUniverse({ id: BigInt(interaction.guildId!) }));
		const key = Server.isOk(response) ? LanguageKeys.Commands.Universe.InitializeSuccess : LanguageKeys.Commands.Universe.InitializeError;
		const content = resolveUserKey(interaction, key);
		return interaction.reply({ content, flags: MessageFlags.Ephemeral });
	}
}
