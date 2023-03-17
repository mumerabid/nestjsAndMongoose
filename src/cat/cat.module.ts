import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { CatService } from './cat.service';
import { Cat, CatSchema } from '../schemas/cat.schema';
import { User, UserSchema } from 'src/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Cat.name, schema: CatSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
