import { CommentCreateNestedManyWithoutVideosInput } from "./CommentCreateNestedManyWithoutVideosInput";
import { LikeCreateNestedManyWithoutVideosInput } from "./LikeCreateNestedManyWithoutVideosInput";

export type VideoCreateInput = {
  comments?: CommentCreateNestedManyWithoutVideosInput;
  commentsCount?: number | null;
  createdBy?: string | null;
  description?: string | null;
  likes?: LikeCreateNestedManyWithoutVideosInput;
  likesCount?: number | null;
  thumbnail?: string | null;
  title?: string | null;
  url?: string | null;
};
