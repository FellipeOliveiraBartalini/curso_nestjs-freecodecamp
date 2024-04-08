import {
    Controller,
    Get,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserController {
    @UseGuards(AuthGuard('jwt'))
    @Get('/me')
    getMe() {
        return 'This is me!';
    }

    validate(payload: any) {
        return payload;
    }
}
