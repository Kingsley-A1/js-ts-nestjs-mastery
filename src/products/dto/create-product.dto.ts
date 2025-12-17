import { IsString, MinLength, IsNumber, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  @Min(1)
  price: number;
}
