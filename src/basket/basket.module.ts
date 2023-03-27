import {forwardRef, Module} from "@nestjs/common";
import {BasketController} from "./basket.controller";
import {BasketService} from "./basket.service";
import {ShopModule} from "../shop/shop.module";
import { UserModule } from "../user/user.module";

@Module({
    imports: [
        forwardRef(() => ShopModule),
        forwardRef(() => UserModule),
    ],
    controllers: [BasketController],
    providers: [BasketService],
    exports: [BasketService],
})
export class BasketModule {

}