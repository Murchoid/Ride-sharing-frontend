import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Phone, PlusIcon, Share2, Star, X } from "lucide-react";

export function BookingSection (){
  return (
    <div className="w-full relative">
        
      <Card className="bg-white rounded-2xl border border-gray-100 shadow-[0px_2px_8px_#0000000f]">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-gray-900 text-lg leading-7">
              Current Ride
            </h2>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 h-7 px-3 rounded-full">
              <Clock className="w-3.5 h-3.5 mr-2" />
              <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-sm">
                In Progress
              </span>
            </Badge>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/img.png" alt="John Kamau" />
                  <AvatarFallback>JK</AvatarFallback>
                </Avatar>

                <div>
                  <div className="[font-family:'Inter-Medium',Helvetica] font-medium text-gray-900 text-base leading-6">
                    John Kamau
                  </div>
                  <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-gray-500 text-sm leading-5">
                    Toyota Corolla • KCB 123A
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-3.5 fill-current text-yellow-400" />
                  <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-gray-700 text-sm">
                    4.8
                  </span>
                </div>

                <Button className="bg-[#0c9b65] hover:bg-[#0c9b65]/90 w-8 h-10 p-0 rounded-lg">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div className="w-3 h-3 bg-[#0c9b65] rounded-full"></div>
                  <div className="w-0.5 h-8 bg-gray-300 my-1"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>

                <div className="flex-1">
                  <div className="mb-6">
                    <div className="[font-family:'Inter-Medium',Helvetica] font-medium text-gray-900 text-sm leading-5 mb-1">
                      Pickup
                    </div>
                    <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-sm leading-5">
                      Westlands, Nairobi
                    </div>
                  </div>

                  <div>
                    <div className="[font-family:'Inter-Medium',Helvetica] font-medium text-gray-900 text-sm leading-5 mb-1">
                      Destination
                    </div>
                    <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-gray-600 text-sm leading-5">
                      KICC, Nairobi
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-gray-500 text-sm leading-5 mb-1">
                    ETA
                  </div>
                  <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-gray-900 text-lg leading-7">
                    12 min
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white h-10 rounded-lg">
                <X className="w-3 h-4 mr-2" />
                <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-base">
                  Cancel Ride
                </span>
              </Button>

              <Button
                variant="secondary"
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 h-10 rounded-lg"
              >
                <Share2 className="w-4 h-4 mr-2" />
                <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-base">
                  Share Trip
                </span>
              </Button>
            </div>
             <div className="w-full max-w-[1216px]">
      <Button className="w-full h-[60px] bg-[#0c9b65] hover:bg-[#0c9b65]/90 rounded-2xl shadow-[0px_4px_16px_#00000014] flex items-center justify-center gap-2">
        <PlusIcon className="h-[18px] w-[15.75px]" />
        <span className="font-semibold text-lg">Book a New Ride</span>
      </Button>
    </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingSection;
