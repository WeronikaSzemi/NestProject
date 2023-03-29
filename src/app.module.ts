import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopModule } from './shop/shop.module';
import { BasketModule } from "./basket/basket.module";
import { UserModule } from "./user/user.module";
import { CacheModule } from './cache/cache.module';
import { DiscountCodesModule } from './discount-codes/discount-codes.module';
import { CronModule } from './cron/cron.module';
import { MailModule } from './mail/mail.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        ShopModule,
        BasketModule,
        UserModule,
        CacheModule,
        DiscountCodesModule,
        CronModule,
        MailModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
