import { Module } from '@nestjs/common';
import { CatsController } from './controllers/cats.controller';
import { CatsApplicationModule } from '../../application/cats/cats-application.module';

@Module({
  imports: [CatsApplicationModule],
  controllers: [CatsController]
})
export class CatsModule {}
