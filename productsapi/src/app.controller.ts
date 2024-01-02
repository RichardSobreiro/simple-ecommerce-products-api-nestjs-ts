/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ZEEBE_CONNECTION_PROVIDER, ZeebeWorker, ZeebeJob } from 'nestjs-zeebe';
import { Ctx, Payload } from '@nestjs/microservices';
import {
  ZBClient,
  ZBWorker,
  ICustomHeaders,
  IInputVariables,
  IOutputVariables,
  CompleteJobRequest,
} from 'zeebe-node';

@Controller('/v1')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(ZEEBE_CONNECTION_PROVIDER) private readonly zbClient: ZBClient,
  ) {}

  // Subscribe to events of type 'validade-products'
  @ZeebeWorker('ValidadeProducts')
  paymentService(
    @Payload() job: ZeebeJob,
    @Ctx()
    context: {
      complete: CompleteJobRequest<IOutputVariables>;
      worker: ZBWorker<IInputVariables, ICustomHeaders, IOutputVariables>;
    },
  ) {
    console.log('Validade Products Service - Task variables', job.variables);
    const updatedVariables = Object.assign({}, job.variables, {
      ProductsIsValid: true,
    });

    // Task worker business logic goes here

    job.complete(updatedVariables);
  }

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
