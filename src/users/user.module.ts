// decorators
import { Module } from '@nestjs/common';

// modules
import { MongooseModule } from '@nestjs/mongoose';

// services
import { UserService } from './user.service';

// controllers
import { UserController } from './user.controller';

// schemas
import { UserSchema } from './schemas/user.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'User',
                schema: UserSchema,
            },
        ]),
    ],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule {}
