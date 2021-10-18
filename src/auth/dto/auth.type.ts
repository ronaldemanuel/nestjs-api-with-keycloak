import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../../user/user.entity';

@ObjectType()
export class AuthType {
  @Field(() => User)
  user: User;

  @Field()
  token: string;
}
