import { FileUpdateManyWithoutTasksInput } from "./FileUpdateManyWithoutTasksInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  Attachment?: FileUpdateManyWithoutTasksInput;
  description?: string | null;
  done?: boolean | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
