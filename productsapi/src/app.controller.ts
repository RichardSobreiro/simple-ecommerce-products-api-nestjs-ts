import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @HttpCode(201)
  createProduct(): string {
    return this.appService.createProduct();
  }

  @Get('/:productId')
  @HttpCode(200)
  getProductById(@Param() params: { productId: number }): any {
    return params;
  }

  @Get()
  @HttpCode(200)
  getProducts(): string {
    return 'Get Products List';
  }

  @Patch('/:productId')
  update(@Req() req: Request) {
    return req.body;
  }

  @Delete()
  @HttpCode(201)
  deleteProduct(): string {
    return 'Delete Product';
  }
}
