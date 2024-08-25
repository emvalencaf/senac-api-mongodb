// decorators
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';

// services
import { UserService } from './user.service';

// dtos
import { CreateUserDTO } from './dtos/create-user.dto';
import { PartialUserUpdateDTO } from './dtos/partial-update-user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/:id')
    async getById(@Param('id') id: string) {
        return this.userService.getById(id);
    }

    @Get()
    async findAll() {
        return this.userService.findAll();
    }

    @Patch('/:id')
    async partialUpdate(
        @Param('id') id: string,
        @Body() partialUpdateUesr: PartialUserUpdateDTO,
    ) {
        return this.userService.partialUpdate(id, partialUpdateUesr);
    }

    @Delete('/:id')
    async deleteById(@Param('id') id: string) {
        return this.userService.deleteById(id);
    }

    @Post()
    async create(@Body() createUser: CreateUserDTO) {
        return this.userService.create(createUser);
    }
}
