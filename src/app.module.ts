import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://umer:umer@cluster0.y6xv2.mongodb.net/test2',
    ),
    CatModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
