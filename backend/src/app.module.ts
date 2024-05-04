// Load environment variables from .env file
require('dotenv').config();

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
import { UserSchema } from './user/user.schema';

@Module({
  imports: [
    // Connect to MongoDB using Mongoose
    MongooseModule.forRoot(config.mongoURI),
    // Import user schema for Mongoose
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    // Configure JWT module for authentication
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' }, // Set token expiration time
    }),
  ],
  controllers: [AppController], // Register application controllers
  providers: [AppService], // Register application services
})
export class AppModule {}
