import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from 'src/domain/cats/cat.entity';
import { CatService } from './services/cat.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  providers: [CatService],
  exports: [CatService]
})
export class CatsApplicationModule {}
