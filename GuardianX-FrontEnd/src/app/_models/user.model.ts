import {RoleModel} from "./role.model";

export interface UserModel {
  id: number,
  email: string,
  role: RoleModel
}
