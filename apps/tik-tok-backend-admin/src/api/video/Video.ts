import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";

export type Video = {
  comments?: Array<Comment>;
  commentsCount: number | null;
  createdAt: Date;
  createdBy: string | null;
  description: string | null;
  id: string;
  likes?: Array<Like>;
  likesCount: number | null;
  thumbnail: string | null;
  title: string | null;
  updatedAt: Date;
  url: string | null;
};
