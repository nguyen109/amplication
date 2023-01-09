import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  path?: SortOrder;
  size?: SortOrder;
  updatedAt?: SortOrder;
};
