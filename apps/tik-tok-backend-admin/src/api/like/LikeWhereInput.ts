import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type LikeWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  video?: VideoWhereUniqueInput;
};
