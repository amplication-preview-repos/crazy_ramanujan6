import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type LikeCreateInput = {
  user?: UserWhereUniqueInput | null;
  video?: VideoWhereUniqueInput | null;
};
