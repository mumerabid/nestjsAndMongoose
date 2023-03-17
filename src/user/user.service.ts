import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from 'src/schemas/cat.schema';
import { UserDocument, User } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async creatUser(userData: any): Promise<any> {
    try {
      const newUSer = await this.userModel.create(userData);
      return newUSer;
    } catch (err) {
      return err.message;
    }
  }
}
