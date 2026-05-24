import { ApiProperty } from '@nestjs/swagger';
<<<<<<< HEAD
import { IsMilitaryTime, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateBusinessDto {
  @ApiProperty()
  @IsPositive()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
=======
import {
  IsMilitaryTime,
  IsNotEmpty,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateBusinessDto {
  @ApiProperty()
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  logo_url: string;

<<<<<<< HEAD
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
=======
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
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
}
