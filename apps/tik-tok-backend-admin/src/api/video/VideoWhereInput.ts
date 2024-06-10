import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";

export type VideoWhereInput = {
  comments?: CommentListRelationFilter;
  commentsCount?: IntNullableFilter;
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  likesCount?: IntNullableFilter;
  thumbnail?: StringNullableFilter;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
};
