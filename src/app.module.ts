import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './domain/cats/cat.entity';
import { SharedModule } from './application/shared/shared.module';

@Module({
  imports: [
    ApiModule,
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: ':memory:',
      dropSchema: true,
      entities: [Cat],
      synchronize: true,
    }),
    SharedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
