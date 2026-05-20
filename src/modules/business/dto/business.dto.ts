import { ApiProperty } from '@nestjs/swagger';
import { IsMilitaryTime, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateBusinessDto {
  @ApiProperty()
  @IsPositive()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  logo_url: string;

  @ApiProperty()
  @IsNotEmpty()
  is_active: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @IsMilitaryTime()
  opening_time: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsMilitaryTime()
  closing_time: string;
}
