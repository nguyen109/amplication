import { Task } from "../task/Task";
import { User } from "../user/User";

export type File = {
  createdAt: Date;
  id: string;
  name: string | null;
  path: string | null;
  size: number | null;
  tasks?: Array<Task>;
  updatedAt: Date;
  users?: Array<User>;
};
