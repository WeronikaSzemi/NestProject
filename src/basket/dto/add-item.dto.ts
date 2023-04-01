import { IsNumber, IsString } from "class-validator";

export class AddItemDto {
    // @IsString()
    productId: string;

    // @IsNumber()
    count: number;
}