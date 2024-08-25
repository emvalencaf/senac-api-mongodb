// decorators
import { Module } from '@nestjs/common';

// modules
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './users/user.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
        }),
    MongooseModule.forRoot(process.env.DB_URL),
    UserModule,
  ],
})
export class AppModule {}
