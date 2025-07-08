import UserHeader from "@/components/shared/userHeaders";
import { CurrentRideSection, RecentRidesSection } from "../rides/userRides";
import {UserStatsSection} from "../stats/userStats";
import BookingSection from "../booking/userBookings";

export default function CustomerDashboard(){
  return (
    <div className="relative w-full bg-gray-50">
      {/* Header */}
        <UserHeader/>
      {/* Main content */}
      <main className="w-full">
        <UserStatsSection/>
        <CurrentRideSection/>
        <BookingSection/>
        <RecentRidesSection/>
      </main>
    </div>
  );
}
