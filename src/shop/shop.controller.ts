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

@Controller('/shop')
export class ShopController {

	constructor(
		@Inject(ShopService) private shopService: ShopService,
	) {
	}

	@Get('/')
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
	@UseInterceptors(MyTimeoutInterceptor)
	getShopListForAdmin(): Promise<ShopItemInterface[]> {
		return new Promise(resolve => {});
	}
}
