import {
	Controller,
	DefaultValuePipe,
	Get,
	HttpStatus,
	ImATeapotException,
	Inject,
	Param,
	ParseIntPipe, UseGuards, UseInterceptors
} from "@nestjs/common";
import { ShopService } from "./shop.service";
import { ShopItemInterface } from "../interfaces/shop";
import { CheckAgePipe } from "../pipes/check-age.pipe";
import { PasswordProtectGuard } from "../guards/password-protect.guard";
import { UsePassword } from "../decorators/use-password.decorator";
import { MyTimeoutInterceptor } from "../interceptors/my-timeout.interceptor";
import { MyCacheInterceptor } from "../interceptors/my-cache.interceptor";

@Controller('/shop')
export class ShopController {

	constructor(
		@Inject(ShopService) private shopService: ShopService,
	) {
	}

	@Get('/')
	@UseInterceptors(MyTimeoutInterceptor, MyCacheInterceptor)
	getShopList(): Promise<ShopItemInterface[]> {
		return this.shopService.getItems();
	}

	@Get('/test')
	test() {
		throw new ImATeapotException('Oh, no!');
	}

	@Get('/admin')
	// @UseGuards(PasswordProtectGuard)
	// @UsePassword('admin1')
	@UseInterceptors(MyTimeoutInterceptor, MyCacheInterceptor)
	getShopListForAdmin(): Promise<ShopItemInterface[]> {
		return new Promise(resolve => {});
	}
}
