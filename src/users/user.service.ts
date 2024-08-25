// decorators
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// models
import { User } from './schemas/user.schema';

// dtos
import { CreateUserDTO } from './dtos/create-user.dto';
import { PartialUserUpdateDTO } from './dtos/partial-update-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

    async create(createUser: CreateUserDTO) {
        const birthdate = new Date(createUser.birthdate);

        const user = {
            ...createUser,
            birthdate,
        };

        return new this.userModel(user).save();
    }

    async deleteById(id: string) {
        return this.userModel.deleteOne({ _id: id });
    }

    async partialUpdate(id: string, partialUpdateUser: PartialUserUpdateDTO) {
        const updatedAt = Date.now();

        const user = {
            ...partialUpdateUser,
            updatedAt,
        };

        return this.userModel.updateOne(
            {
                _id: id,
            },
            user,
        );
    }

    async findAll() {
        return this.userModel.find(undefined, {
            password: false,
        });
    }

    async getById(id: string) {
        return this.userModel.findById(id, {
            password: false,
        });
    }
}
