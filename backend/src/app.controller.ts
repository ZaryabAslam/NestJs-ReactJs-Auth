import {
  BadRequestException,
  Body,
  Controller,
  Post,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private jwtService: JwtService,
  ) {}

  /**
   * Endpoint for user registration.
   * Registers a new user with the provided name, email, and password.
   * Hashes the password before storing it in the database.
   * @param body - CreateUserDto containing name, email, and password
   * @returns The name of the registered user
   */
  @Post('signup')
  async register(@Body() body: CreateUserDto) {
    const { name, email, password } = body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Validate email format
    if (!this.validateEmail(email)) {
      throw new BadRequestException('Invalid email format');
    }

    // Validate password format
    if (!this.validatePassword(password)) {
      throw new BadRequestException('Invalid password format');
    }

    // Create the user
    const user = await this.appService.create({
      name,
      email,
      password: hashedPassword,
    });

    delete user.password;

    // Return the name of the registered user
    return user.name;
  }

  /**
   * Endpoint for user login.
   * Authenticates the user with the provided email and password.
   * Sets a JWT token as an HTTP-only cookie upon successful login.
   * @param body - CreateUserDto containing email and password
   * @param response - Express Response object
   * @returns The name of the authenticated user
   */
  @Post('signin')
  async login(
    @Body() body: CreateUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { email, password } = body;

    // Find the user by email
    const user = await this.appService.findOne({ email });

    // If user not found or password is incorrect, throw error
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Invalid credentials');
    }

    // Sign a JWT token
    const token = await this.jwtService.signAsync({ id: user._id });

    // Set the JWT token as an HTTP-only cookie
    response.cookie('jwt', token, { httpOnly: true });

    // Return the name of the authenticated user
    return {
      user: user.name,
    };
  }

  /**
   * Endpoint for user logout.
   * Clears the JWT token cookie upon logout.
   * @param response - Express Response object
   * @returns A success message
   */
  @Post('signout')
  async logout(@Res({ passthrough: true }) response: Response) {
    // Clear the JWT token cookie
    response.clearCookie('jwt');

    return {
      message: 'success',
    };
  }

  /**
   * Validate email format.
   * @param email - Email address to validate
   * @returns true if the email format is valid, false otherwise
   */
  private validateEmail(email: string): boolean {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    return emailRegex.test(email);
  }

  /**
   * Validate password format.
   * Password should have a minimum length of 8 characters,
   * at least 1 letter, 1 number, and 1 special character.
   * @param password - Password to validate
   * @returns true if the password format is valid, false otherwise
   */
  private validatePassword(password: string): boolean {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/;
    return passwordRegex.test(password);
  }
}
