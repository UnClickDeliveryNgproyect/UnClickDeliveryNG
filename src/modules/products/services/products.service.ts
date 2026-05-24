import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  createProduct() {
    return { message: 'Producto creado exitosamente' };
  }
  getAllProducts() {
    return { message: 'Obteniendo todos los productos' };
  }
  findAll() {
    return { message: 'Todos los productos' };
  }

  async create(data: any) {
    // crear un producto
    return { message: 'Producto creado', data };
  }

  async update(id: number, data: any) {
    // actualizar un producto
    return { message: `Producto con id ${id} actualizado`, data };
  }

  async delete(id: number) {
    // eliminar un producto
    return { message: `Producto con id ${id} eliminado` };
  }

  async findById(id: number) {
    //buscar producto por id
    return { message: `Producto con id ${id} encontrado`, data: { id } };
  }
}
