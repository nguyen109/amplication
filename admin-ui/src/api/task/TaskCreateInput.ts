import { FileCreateNestedManyWithoutTasksInput } from "./FileCreateNestedManyWithoutTasksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  Attachment?: FileCreateNestedManyWithoutTasksInput;
  description?: string | null;
  done?: boolean | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
