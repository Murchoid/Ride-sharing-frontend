import type { eROLE } from "./roles.types";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  role:eROLE;
  isActive: boolean;
  accessToken?: string;
  refreshToken?: string;
};
