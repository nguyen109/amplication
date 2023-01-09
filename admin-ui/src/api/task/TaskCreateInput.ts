import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  description?: string | null;
  done?: boolean | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
