import { TaskUpdateManyWithoutFilesInput } from "./TaskUpdateManyWithoutFilesInput";
import { UserUpdateManyWithoutFilesInput } from "./UserUpdateManyWithoutFilesInput";

export type FileUpdateInput = {
  name?: string | null;
  path?: string | null;
  size?: number | null;
  tasks?: TaskUpdateManyWithoutFilesInput;
  users?: UserUpdateManyWithoutFilesInput;
};
