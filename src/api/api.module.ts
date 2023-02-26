import { Module } from '@nestjs/common';
import { CatsApplicationModule } from 'src/application/cats/cats-application.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: []
})
export class ApiModule {}
