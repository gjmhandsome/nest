import { ConfigurableModuleBuilder,DynamicModule  } from '@nestjs/common'

export interface userName {
    name: string;
    test: string;
    isGlobal: boolean;
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE} = new ConfigurableModuleBuilder<userName>().setClassMethodName('registry').setExtras({
    isGlobal: true,
}, (definition: DynamicModule, extras: { isGlobal: boolean; }) => {
    return {
        ...definition,
        global: extras.isGlobal
    }
}).build();

