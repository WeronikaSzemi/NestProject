import { IsNumber, IsString } from "class-validator";

export class AddItemDto {
    @IsString()
    productId: string;

    @IsString()
    userId: string;

    @IsNumber()
    count: number;
}