import { FT, T } from '@skyra/http-framework-i18n';

// Root
export const RootName = T('commands/planet:name');
export const RootDescription = T('commands/planet:description');

export const OptionsPlanet = 'commands/planet:optionsPlanet';
export const OptionsName = 'commands/planet:optionsName';

export const Initialize = 'commands/planet:initialize';
export const InitializeSuccess = FT<{ coordinates: string }>('commands/planet:initializeSuccess');
export const InitializeErrorUnknownUniverse = T('commands/planet:initializeErrorUnknownUniverse');
export const InitializeErrorAlreadyInitialized = T('commands/planet:initializeErrorAlreadyInitialized');

export const Get = 'commands/planet:get';

export const Edit = 'commands/planet:edit';

export const List = 'commands/planet:list';
