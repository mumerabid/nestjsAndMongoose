import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from 'src/schemas/cat.schema';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class CatService {
  constructor(
    @InjectModel(Cat.name) private catModel: Model<CatDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async createCat(data: any): Promise<any> {
    try {
      const user = await this.userModel.findOne({
        username: data.username,
        password: data.password,
      });
      if (user) {
        const newCat = await this.catModel.create(data);
        return newCat;
      } else {
        throw new HttpException(
          'username or password is different',
          HttpStatus.UNAUTHORIZED,
        );
      }
    } catch (err) {
      throw new HttpException(
        'error while creating the cat' + err.message,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
