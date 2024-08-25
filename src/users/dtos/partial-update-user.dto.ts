import {
    IsDateString,
    IsOptional,
    IsString,
    IsStrongPassword,
} from 'class-validator';

export class PartialUserUpdateDTO {
    @IsString()
    @IsOptional()
    name: string;
    @IsStrongPassword()
    @IsOptional()
    password: string;
    @IsDateString()
    @IsOptional()
    birthdate: string;
}
