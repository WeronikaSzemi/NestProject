import { Controller, Get, Inject } from "@nestjs/common";
import { ShopService } from "./shop.service";
import { ShopItemInterface } from "../interfaces/shop";

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

}
