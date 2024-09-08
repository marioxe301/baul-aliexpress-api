import { Inject, Injectable } from '@nestjs/common';
import { DeleteUserInput } from './models/dto/delete-user.input';
import { NewUserInput } from './models/dto/new-user.input';
import { UpdateUserInput } from './models/dto/update-user.input';
import { UserArgs } from './models/dto/user.args';
import { User } from './models/user.model';
import { IPrismaService } from 'src/_prisma/prisma.interface';
import { PRISMA_SERVICE_TOKEN } from 'src/_prisma/module/prisma.module';

@Injectable()
export class UserService {
  constructor(
    @Inject(PRISMA_SERVICE_TOKEN)
    private readonly prismaService: IPrismaService,
  ) {}

  async create(data: NewUserInput): Promise<User> {
    return this.prismaService.user.create({ data });
  }

  async update(params: UpdateUserInput): Promise<User> {
    return this.prismaService.user.update({
      data: params,
      where: { email: params.email },
    });
  }

  async delete(params: DeleteUserInput): Promise<User> {
    return this.prismaService.user.update({
      where: { email: params.email },
      data: { deleted: true },
    });
  }

  async findOne(params: UserArgs): Promise<User> {
    return this.prismaService.user.findUnique({
      where: { email: params.email },
    });
  }

  async findAll(params: UserArgs): Promise<User[]> {
    return this.prismaService.user.findMany({
      where: {
        deleted: params.deleted,
        disabled: params.disabled,
        id: params.id,
      },
    });
  }
}
