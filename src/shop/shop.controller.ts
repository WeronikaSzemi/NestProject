import {
	Controller,
	DefaultValuePipe,
	Get,
	HttpStatus,
	ImATeapotException,
	Inject,
	Param,
	ParseIntPipe, UseGuards
} from "@nestjs/common";
import { ShopService } from "./shop.service";
import { ShopItemInterface } from "../interfaces/shop";
import { CheckAgePipe } from "../pipes/check-age.pipe";
import { PasswordProtectGuard } from "../guards/password-protect.guard";

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
	@UseGuards(PasswordProtectGuard)
	getShopListForAdmin(): Promise<ShopItemInterface[]> {
		return this.shopService.getItems();
	}

}
