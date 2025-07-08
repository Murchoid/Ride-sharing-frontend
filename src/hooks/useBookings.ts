import { createBooking, getBooking, getBookings, getOwnBookings, updateBookingPaymentMethod, updateBookingPaymentStatus } from "@/api/bookings";
import type { createBookingDto } from "@/types/Dtos/bookings/createBookingDto";
import type { UpdateBookingPaymentMethodDto, UpdateBookingPaymentStatusDto } from "@/types/Dtos/bookings/updateBookingDto";
import { useMutation } from "@tanstack/react-query";

export function useCreateBooking(bookingDto: createBookingDto){
    return useMutation({
        mutationFn: async () => createBooking(bookingDto),
        onSuccess: (data) => {
            console.log("Booking created successfully", data);
        },
        onError: (error) => {
            console.error("Error creating booking", error);
        }
    })

}

export function useFetchOwnBookings() {
    return useMutation({
        mutationFn: async () => getOwnBookings(),
        onSuccess: (data) => {
            console.log("Own bookings fetched successfully", data);
        },
        onError: (error) => {
            console.error("Error fetching own bookings", error);
        }
    });
}

export function useFetchBookings() {
    return useMutation({
        mutationFn: async () => getBookings(),
        onSuccess: (data) => {
            console.log("Bookings fetched successfully", data);
        },
        onError: (error) => {
            console.error("Error fetching bookings", error);
        }
    });
}

export function useFetchBooking(id: string) {
    return useMutation({
        mutationFn: async () => getBooking(id),
        onSuccess: (data) => {
            console.log("Booking fetched successfully", data);
        },
        onError: (error) => {
            console.error("Error fetching booking", error);
        }
    });
}

export function useUpdateBookingPaymentStatus(id: string, bookingData: UpdateBookingPaymentStatusDto) {
    return useMutation({
        mutationFn: async () => updateBookingPaymentStatus(id, bookingData),
        onSuccess: (data) => {
            console.log("Booking status updated successfully", data);
        },
        onError: (error) => {
            console.error("Error updating booking status", error);
        }
    });
}

export function useUpdateBookingPaymentMethod(id: string, bookingData: UpdateBookingPaymentMethodDto) {
    return useMutation({
        mutationFn: async () => updateBookingPaymentMethod(id, bookingData),
        onSuccess: (data) => {
            console.log("Booking payment method updated successfully", data);
        },
        onError: (error) => {
            console.error("Error updating booking payment method", error);
        }
    });
}