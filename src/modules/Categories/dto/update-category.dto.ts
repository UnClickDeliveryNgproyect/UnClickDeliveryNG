// para actualizar una categoria, se puede actualizar el nombre y la descripcion
import { IsString, IsOptional } from 'class-validator';

export class UpdateCategoryDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;
<<<<<<< HEAD
}
=======
}
>>>>>>> 4a9a0ddc6fb72bb14e54faf3208610aeefe3c1e1
