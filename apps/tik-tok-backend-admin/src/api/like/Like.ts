import { User } from "../user/User";
import { Video } from "../video/Video";

export type Like = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
  video?: Video | null;
};
