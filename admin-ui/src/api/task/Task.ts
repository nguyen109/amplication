import { File } from "../file/File";
import { User } from "../user/User";

export type Task = {
  Attachment?: Array<File>;
  createdAt: Date;
  description: string | null;
  done: boolean | null;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
