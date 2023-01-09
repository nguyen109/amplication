import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  description?: string | null;
  done?: boolean | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
