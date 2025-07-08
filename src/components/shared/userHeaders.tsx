import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { BellIcon, Leaf } from "lucide-react";

export default function UserHeader(){
    return(
         <header className="w-full h-[77px] bg-white border-b border-gray-100 shadow-[0px_2px_8px_#0000000f] sticky top-0 z-10">
        <div className="max-w-[1280px] h-[76px] mx-auto px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0c9b65] rounded-lg flex items-center justify-center">
              <Leaf className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="[font-family:'Inter-Bold',Helvetica] font-bold text-gray-900 text-xl">
              RideIO
            </div>
          </div>

          {/* User section */}
          <div className="flex items-center gap-4">
            <button className="w-8 h-11 flex items-center justify-center">
              <BellIcon className="w-4 h-[18px]" />
            </button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/img.png" alt="User profile" />
            </Avatar>
          </div>
        </div>
      </header>
    )
}