import { LanguageKeys } from '#lib/i18n/LanguageKeys';
import { Command, RegisterCommand } from '@skyra/http-framework';
import { applyLocalizedBuilder } from '@skyra/http-framework-i18n';

@RegisterCommand((builder) => applyLocalizedBuilder(builder, LanguageKeys.Commands.Planet.RootName, LanguageKeys.Commands.Planet.RootDescription))
export class UserCommand extends Command {}
