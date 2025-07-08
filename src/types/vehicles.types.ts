import type { Driver } from "./drivers.types";

export type Vehicle = {
  id: string;
  model: string;
  plate: string;
  driver: Driver;
  isRetired: boolean;
  createdAt: Date;
  updatedAt: Date;
};
