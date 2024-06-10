import { CommentUpdateManyWithoutVideosInput } from "./CommentUpdateManyWithoutVideosInput";
import { LikeUpdateManyWithoutVideosInput } from "./LikeUpdateManyWithoutVideosInput";

export type VideoUpdateInput = {
  comments?: CommentUpdateManyWithoutVideosInput;
  commentsCount?: number | null;
  createdBy?: string | null;
  description?: string | null;
  likes?: LikeUpdateManyWithoutVideosInput;
  likesCount?: number | null;
  thumbnail?: string | null;
  title?: string | null;
  url?: string | null;
};
