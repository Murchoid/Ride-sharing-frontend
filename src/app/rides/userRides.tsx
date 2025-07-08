import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useFetchOwnBookings } from "@/hooks/useBookings";
import { ArrowUpIcon, CarIcon, WalletIcon } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";
import type { customerAnalytics } from "@/types/analytics.types";

export const CurrentRideSection = () => {
    const userAnalytics = useAnalytics();
    const data: customerAnalytics = userAnalytics.data as customerAnalytics;

  const statsData = [
    {
      title: "Total Rides",
      value: data?.totalRides,
      change: "+12% from last month",
      icon: <CarIcon className="h-5 w-5 text-white" />,
      iconBgColor: "bg-[#0c9b65]",
    },
    {
      title: "Total Spend",
      value: data?.totalExpenditure,
      change: "+8% from last month",
      icon: <WalletIcon className="h-5 w-5 text-white" />,
      iconBgColor: "bg-[#f6a729]",
    },
  ];

  return (
    <div className="w-full py-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {statsData.map((stat, index) => (
          <Card
            key={index}
            className="border border-solid border-gray-100 shadow-[0px_2px_8px_#0000000f]"
          >
            <CardContent className="p-6 flex justify-between items-center">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <div className="flex items-center">
                  <ArrowUpIcon className="h-3.5 w-2.5 text-green-600" />
                  <span className="ml-1 text-sm text-green-600">
                    {stat.change}
                  </span>
                </div>
              </div>
              <div
                className={`${stat.iconBgColor} w-12 h-12 rounded-lg flex items-center justify-center`}
              >
                {stat.icon}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

 export const RecentRidesSection = () => {
  // Ride data for mapping
    const userBookings = useFetchOwnBookings();
    const data = userBookings.data;

  return (
    <div className="w-full my-6">
      <Card className="border border-solid border-gray-100 shadow-[0px_2px_8px_#0000000f]">
        <CardHeader className="flex flex-row items-center justify-between py-6 px-6">
          <h3 className="font-semibold text-lg text-gray-900 [font-family:'Inter-SemiBold',Helvetica]">
            Recent Rides
          </h3>
          <Button
            variant="ghost"
            className="h-auto p-0 [font-family:'Inter-Medium',Helvetica] font-medium text-black text-sm"
          >
            View All
          </Button>
        </CardHeader>
        <CardContent className="px-6 pb-6 pt-0">
          <div className="flex flex-col gap-4">
            {
            data ?
            data.map((d, index) => (
              <div
                key={`ride-${index}`}
                className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="[font-family:'Inter-Medium',Helvetica] font-medium text-gray-900 text-base leading-6">
                      {d.pickupAddress}→{d.dropoffAddress}
                    </div>
                    <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-gray-500 text-sm leading-5">
                      {d.createdAt.toLocaleDateString()} • {d.createdAt.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-gray-900 text-base leading-6">
                    {d.price}
                  </div>
                  <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-gray-500 text-sm leading-5">
                    {d.status}
                  </div>
                </div>
              </div>
            ))
              :
              <div
                className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
              >
                <i>No items</i>
              </div>
            
        }
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
