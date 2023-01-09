import { TaskCreateNestedManyWithoutFilesInput } from "./TaskCreateNestedManyWithoutFilesInput";
import { UserCreateNestedManyWithoutFilesInput } from "./UserCreateNestedManyWithoutFilesInput";

export type FileCreateInput = {
  name?: string | null;
  path?: string | null;
  size?: number | null;
  tasks?: TaskCreateNestedManyWithoutFilesInput;
  users?: UserCreateNestedManyWithoutFilesInput;
};
