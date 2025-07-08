import type { Driver } from "./drivers.types";
import type { ePAYMENTSMETHOD, ePAYMENTSTUTUS, eSTATUS } from "./status.types";
import type { User } from "./users.types";

export type Booking = {
    id: string;
    customer: User;
    driver: Driver;
    pickupAddress: string;
    dropoffAddress: string;
    pickupLat: number;
    pickupLng: number;
    dropoffLat: number;
    dropoffLng: number;
    distanceKm: number;
    durationMins: number;
    price: number;
    status: eSTATUS;
    paymentStatus: ePAYMENTSTUTUS;
    paymentMethod: ePAYMENTSMETHOD;
    createdAt: Date;
    updatedAt: Date;
}