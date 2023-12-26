import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  createProduct(): string {
    return 'Create Product!';
  }

  getProductById(productId: string): any {
    return productId;
  }

  getProducts(): string {
    return 'Get Products List';
  }

  update(req: any) {
    return req.body;
  }

  deleteProduct(productId: string): string {
    return productId;
  }
}
