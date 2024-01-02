import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZeebeModule, ZeebeServer } from 'nestjs-zeebe';

@Module({
  imports: [ZeebeModule.forRoot({ gatewayAddress: 'localhost:26500' })],
  controllers: [AppController],
  providers: [AppService, ZeebeServer],
})
export class AppModule {}
