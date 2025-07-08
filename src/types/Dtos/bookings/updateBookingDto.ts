import type { ePAYMENTSMETHOD, ePAYMENTSTUTUS } from "@/types/status.types";

export interface UpdateBookingStatusDto {
  status: string;
}

export interface UpdateBookingPaymentMethodDto {
  paymentMethod: ePAYMENTSMETHOD;
}

export interface UpdateBookingPaymentStatusDto {
  paymentStatus: ePAYMENTSTUTUS;
}

export interface UpdateBookingPickUpAndDropOffLocationDto {
   pickupLat?: number;
   pickupLng?: number;
   dropoffLat?: number;
   dropoffLng?: number;
}