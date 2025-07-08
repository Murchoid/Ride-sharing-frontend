import type { Booking } from "./bookings.types";
import type { User } from "./users.types";
import type { Vehicle } from "./vehicles.types";

export type Driver = {
  id: string;
  user: User;
  isAvailable: boolean;
  baseLat: number;
  baseLng: number;
  vehicle: Vehicle;
  isActive: boolean;
  bookings: Booking[];
  createdAt: Date;
  updatedAt: Date;
};
