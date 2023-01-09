import { User } from "../user/User";

export type Task = {
  createdAt: Date;
  description: string | null;
  done: boolean | null;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
