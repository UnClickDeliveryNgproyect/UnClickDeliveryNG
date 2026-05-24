import { ApiProperty } from '@nestjs/swagger';
import {
  IsMilitaryTime,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateBusinessDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  logo_url: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  is_active?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsMilitaryTime()
  opening_time?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsMilitaryTime()
  closing_time?: string;
}
