import { LanguageKeys } from '#lib/i18n/LanguageKeys';
import { acryssRequest } from '#lib/utilities/acryss';
import { Command, RegisterCommand, RegisterSubCommand } from '@skyra/http-framework';
import { applyLocalizedBuilder, resolveUserKey } from '@skyra/http-framework-i18n';
import { Client, Server } from '@skyra/internal';
import { MessageFlags } from 'discord-api-types/v10';

const Root = LanguageKeys.Commands.Planet;

@RegisterCommand((builder) =>
	applyLocalizedBuilder(builder, Root.RootName, Root.RootDescription)
		// TODO: Re-enable when the multiverse is ready.
		.setDMPermission(false)
)
export class UserCommand extends Command {
	public override async autocompleteRun(interaction: Command.AutocompleteInteraction) {
		const response = await acryssRequest(interaction.user.id, Client.writePlanetGetAll({ universeId: BigInt(interaction.guildId!) }));
		if (Server.isError(response)) return interaction.replyEmpty();

		const payload = Server.readOkPlanetGetAll(response);
		return interaction.reply({ choices: payload.planets.map((planet) => ({ name: planet.name, value: planet.name })) });
	}

	@RegisterSubCommand((builder) => applyLocalizedBuilder(builder, Root.Initialize))
	public async initialize(interaction: Command.ChatInputInteraction) {
		const response = await acryssRequest(interaction.user.id, Client.writePlayerCreate({ universeId: BigInt(interaction.guildId!) }));
		if (Server.isOk(response)) {
			const content = resolveUserKey(interaction, Root.InitializeSuccess, { coordinates: '1:0' });
			return interaction.reply({ content, flags: MessageFlags.Ephemeral });
		}

		const { code } = Server.readError(response);
		const key = code === Server.ErrorCode.PlayerAlreadyCreated ? Root.InitializeErrorAlreadyInitialized : Root.InitializeErrorUnknownUniverse;
		const content = resolveUserKey(interaction, key);
		return interaction.reply({ content, flags: MessageFlags.Ephemeral });
	}
}
