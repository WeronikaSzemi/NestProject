import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(cookieParser());

    // app.useGlobalPipes(
    //     new ValidationPipe({
    //         disableErrorMessages: true,
    //         whitelist: true,
    //         forbidNonWhitelisted: true,
    //         transform: true,
    //         transformOptions: {
    //             enableImplicitConversion: true,
    //         }
    //     }),
    // );

    await app.listen(3000);
}

bootstrap();
