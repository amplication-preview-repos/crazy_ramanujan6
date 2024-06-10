import { SortOrder } from "../../util/SortOrder";

export type VideoOrderByInput = {
  commentsCount?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  likesCount?: SortOrder;
  thumbnail?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
