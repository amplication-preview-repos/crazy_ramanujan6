import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type LikeUpdateInput = {
  user?: UserWhereUniqueInput | null;
  video?: VideoWhereUniqueInput | null;
};
