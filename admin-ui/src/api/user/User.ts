import { File } from "../file/File";
import { JsonValue } from "type-fest";
import { Task } from "../task/Task";

export type User = {
  Avatar?: File | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  tasks?: Array<Task>;
  updatedAt: Date;
  username: string;
};
