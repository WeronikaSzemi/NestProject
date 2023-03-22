import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopModule } from './shop/shop.module';

@Module({
    imports: [
        // TypeOrmModule.forRoot(),
    ShopModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
