import type { ePAYMENTSMETHOD, ePAYMENTSTUTUS, eSTATUS } from "../../status.types";

export interface createBookingDto{
    customerId: string;
  pickupAddress: string;
  dropoffAddress: string;
  pickupLat: number;
  pickupLng: number;
  dropoffLat: number;
  dropoffLng: number;
  distanceKm?: number;
  durationMins?: number;
  price?: number;
  stutus: string | eSTATUS.PENDING;
  paymentStatus: string | ePAYMENTSTUTUS.PENDING;
  paymentMethod: string | ePAYMENTSMETHOD.CASH;

}