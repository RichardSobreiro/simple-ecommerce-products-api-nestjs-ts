import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  createProduct(body: any): string {
    return `Create Product: ${body}`;
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
