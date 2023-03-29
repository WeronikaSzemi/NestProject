import { Body, Controller, Delete, Get, Inject, Param, Post, UseGuards, UseInterceptors } from "@nestjs/common";
import { GetBasketStatsResponse, ShopResponse } from "../interfaces/basket";
import { BasketService } from "./basket.service";
import { ItemInBasket } from "./item-in-basket.entity";
import { AddItemDto } from "./dto/add-item.dto";
import { PasswordProtectGuard } from "../guards/password-protect.guard";
import { UsePassword } from "../decorators/use-password.decorator";
import { MyTimeoutInterceptor } from "../interceptors/my-timeout.interceptor";
import { MyCacheInterceptor } from "../interceptors/my-cache.interceptor";
import { SetCacheDuration } from "../decorators/set-cache-duration.decorator";

@Controller('/basket')
export class BasketController {

    constructor(
        @Inject(BasketService) private basketService: BasketService,
    ) {
    }

    @Post('/')
    addProductToBasket(
        @Body() product: AddItemDto,
    ): Promise<ShopResponse> {
        return this.basketService.add(product);
    }

    @Delete('/all/:userId')
    clearBasket(
        @Param('userId') userId: string,
    ) {
        this.basketService.clearBasket(userId);
    }

    @Get('/admin')
    showBasketforAdmin(): Promise<ItemInBasket[]> {
        return this.basketService.getAllForAdmin();
    }

    @Get('/total-price/:userId')
    getTotalBasketPrice(
        @Param('userId') userId: string,
    ): Promise<number | ShopResponse> {
        return this.basketService.getTotalPrice(userId);
    }

    @Get('/stats')
    @UseInterceptors(MyTimeoutInterceptor, MyCacheInterceptor)
    @SetCacheDuration(5)
    getStats(): Promise<GetBasketStatsResponse> {
        return this.basketService.getStats();
    }

    @Get('/:userId')
    showBasket(
        @Param('userId') userId: string,
    ): Promise<ItemInBasket[]> {
        return this.basketService.getAllForUser(userId);
    }

    @Delete('/:productId/:userId')
    removeProduct(
        @Param('productId') productId: string,
        @Param('userId') userId: string,
    ): Promise<ShopResponse> {
        return this.basketService.remove(productId, userId);
    }



}