import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";
import * as cookieParser from 'cookie-parser';
import { GlobalExceptionFilter } from "./filters/global-exception.filter";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // app.useGlobalPipes(
    //     new ValidationPipe({
    //         disableErrorMessages: true,
    //
    //         whitelist: true,
    //         forbidNonWhitelisted: true,
    //
    //         transform: true,
    //         transformOptions: {
    //             enableImplicitConversion: true,
    //         },
    //     }),
    // );

    app.use(cookieParser());

    app.useGlobalFilters(new GlobalExceptionFilter);

    app.useGlobalPipes(
        new ValidationPipe({
            disableErrorMessages: true,
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
        }),
    );

    await app.listen(3000);
}

bootstrap();
