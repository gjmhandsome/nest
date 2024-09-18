import { SetMetadata, applyDecorators, Get, createParamDecorator, ExecutionContext, Controller } from '@nestjs/common';

export const GetPath = (path: string) => applyDecorators(Get(`${path}/:name`), SetMetadata('aaa', 123));


export const MyParams = createParamDecorator((key: string, ctx: ExecutionContext) => {
    const params = ctx.switchToHttp().getRequest().params;
    return params ? params[key] : ''
});

export const MyController = () => Controller('galen')

export const MyController2 = () => applyDecorators(Controller('galen'), SetMetadata('bbb', 123))