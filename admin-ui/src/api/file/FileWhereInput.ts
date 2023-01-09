import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type FileWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  path?: StringNullableFilter;
  size?: FloatNullableFilter;
  tasks?: TaskListRelationFilter;
  users?: UserListRelationFilter;
};
