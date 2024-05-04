import { Injectable } from '@nestjs/common';
import { User } from './user/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  /**
   * Create a new user.
   * @param userData The data for creating the user.
   * @returns The created user.
   */
  async create(userData: Partial<User>): Promise<User> {
    const user = new this.userModel(userData);
    return user.save();
  }

  /**
   * Find a single user based on a condition.
   * @param condition The condition to search.
   * @returns The found user.
   */
  async findOne(condition: { email: string } | { _id: string }): Promise<User> {
    return this.userModel.findOne(condition);
  }

  /**
   * Find all users with a given email.
   * @param email The email to search for.
   * @returns An array of users with the specified email.
   */
  async find(email: string): Promise<User[]> {
    return this.userModel.find({ email }).exec();
  }
}
