import {
  Body,
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

@Controller('/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @HttpCode(201)
  createProduct(@Body() body: any): string {
    return this.appService.createProduct(body);
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
