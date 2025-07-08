import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { getUserInfoFromToken } from "@/utils/jwt";



export const UserStatsSection = () => {
    const {accessToken} = useAuthStore();
    const info = getUserInfoFromToken(accessToken);
    const isActive = info?.isActive;

  return (
    <header className="w-full py-6 px-8 flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-2xl text-gray-900 [font-family:'Inter-Bold',Helvetica] leading-8">
          Welcome back, Sarah!
        </h1>
        <p className="font-normal text-base text-gray-600 [font-family:'Inter-Regular',Helvetica] leading-6">
          Ready for your next ride?
        </p>
      </div>

      <div className="flex flex-col items-end">
        <span className="text-sm text-gray-500 [font-family:'Inter-Regular',Helvetica] leading-5 mb-1">
          Current Status
        </span>

        {isActive ? <Badge
          variant="outline"
          className="bg-green-100 text-green-800 border-0 px-3 py-0.5 h-5 flex items-center gap-1"
        >
          <CheckCircle className="h-1.5 w-1.5" />
          <span className="text-xs [font-family:'Inter-Medium',Helvetica] font-medium">
            Available
          </span>
        </Badge>
        :
        <Badge
  variant="outline"
  className="bg-red-100 text-red-800 border-0 px-3 py-0.5 h-5 flex items-center gap-1"
>
  <Circle className="h-1.5 w-1.5" />
  <span className="text-xs [font-family:'Inter-Medium',Helvetica] font-medium">
    Unavailable
  </span>
</Badge>
        }
        
      </div>
    </header>
  );
}

