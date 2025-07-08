import { url } from "@/lib/url";
import type { Booking } from "@/types/bookings.types";
import type { createBookingDto } from "@/types/Dtos/bookings/createBookingDto";
import type { UpdateBookingPaymentMethodDto, UpdateBookingPaymentStatusDto } from "@/types/Dtos/bookings/updateBookingDto";
import { getTokens } from "@/utils/jwt";

const {accessToken} = getTokens();
const endPointUrl = url

export async function getBookings(): Promise<Booking[]>{
    const results = await fetch(`${endPointUrl}/bookings`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    });
    if (!results.ok) {
        throw new Error("Failed to fetch bookings");
    }
    const resData = await results.json();
  return resData.data; 
}

export async function getBooking(id: string): Promise<Booking>{
    const results = await fetch(`${endPointUrl}/bookings/${id}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    });
    if (!results.ok) {
        throw new Error("Failed to fetch bookings");
    }
    const resData = await results.json();
  return resData.data; 
}

export async function getOwnBookings(): Promise<Booking[]>{
    const results = await fetch(`${endPointUrl}/bookings/me`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    });
    if (!results.ok) {
        throw new Error("Failed to fetch bookings");
    }
    const resData = await results.json();
  return resData.data; 
}

export async function createBooking(bookingData: createBookingDto): Promise<Booking>{
    const results = await fetch(`${endPointUrl}/bookings/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify(bookingData)
    });
    if (!results.ok) {
        throw new Error("Failed to create booking");
    }
    const resData = await results.json();
  return resData.data; 
}

export async function updateBookingStatus(id: string, bookingData: UpdateBookingPaymentStatusDto): Promise<Booking>{
    const results = await fetch(`${endPointUrl}/bookings/${id}/status`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify(bookingData)
    });
     if( !results.ok) {
        throw new Error("Failed to update booking status");
    }
    const resData = await results.json();
  return resData.data; 
}

export async function updateBookingPaymentMethod(id: string, bookingData: UpdateBookingPaymentMethodDto): Promise<Booking>{
    const results = await fetch(`${endPointUrl}/bookings/${id}/payment-method`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify({ bookingData })
    });
    if (!results.ok) {
        throw new Error("Failed to update booking payment method");
    }
    const resData = await results.json();
  return resData.data; 
}
export async function updateBookingPaymentStatus(id: string, bookingData: UpdateBookingPaymentStatusDto): Promise<Booking>{
    const results = await fetch(`${endPointUrl}/bookings/${id}/payment-status`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        },
        body: JSON.stringify({ bookingData })
    });
    if (!results.ok) {
        throw new Error("Failed to update booking payment status");
    }
    const resData = await results.json();
  return resData.data; 
}