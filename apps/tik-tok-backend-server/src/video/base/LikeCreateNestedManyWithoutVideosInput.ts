/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LikeWhereUniqueInput } from "../../like/base/LikeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LikeCreateNestedManyWithoutVideosInput {
  @Field(() => [LikeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LikeWhereUniqueInput],
  })
  connect?: Array<LikeWhereUniqueInput>;
}

export { LikeCreateNestedManyWithoutVideosInput as LikeCreateNestedManyWithoutVideosInput };
