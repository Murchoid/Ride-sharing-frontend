import AuthLog from "@/components/auths/logIn";
import AuthReg from "@/components/auths/register";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car } from "lucide-react";
import { Facebook } from "lucide-react";
import  { useState } from "react";

export default function LogIn(){
    const [logOrReg, setLogOrReg] = useState<String>("LogIn");


    const toggleLog = ()=> {
        setLogOrReg("LogIn")
    }
    const toggleReg = ()=> {
        setLogOrReg("Register")
    }
    
  const socialLogins = [
    {
      name: "Google",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.64 9.20455C17.64 8.56636 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20455Z"
            fill="#4285F4"
          />
          <path
            d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z"
            fill="#34A853"
          />
          <path
            d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957273C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71Z"
            fill="#FBBC05"
          />
          <path
            d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z"
            fill="#EA4335"
          />
        </svg>
      ),
    },
    {
      name: "Facebook",
      icon: <Facebook size={18} />,
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#0c9b65] to-[#0a8556]">
      <Card className="w-[448px] bg-[#fffffff2] border border-[#ffffff33] shadow-[0px_25px_50px_#00000040] rounded-2xl">
        <CardContent className="p-8 flex flex-col items-center">
          {/* Logo and App Name */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-3">
              <Car className="w-6 h-6 text-white" />
            </div>
            <h1 className="font-bold text-2xl text-gray-900 [font-family:'Inter-Bold',Helvetica] mb-1">
              RideIO
            </h1>
            <p className="text-sm text-gray-600 [font-family:'Inter-Regular',Helvetica]">
              Your journey starts here
            </p>
          </div>

          {/* Login/Register Tabs */}
          <div className="w-full mb-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="w-full h-11 bg-gray-100 rounded-xl p-1">
                <TabsTrigger
                  value="login"
                  onClick={toggleLog}
                  className="w-1/2 h-9 rounded-lg data-[state=active]:bg-[#0c9b65] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-600 [font-family:'Inter-Medium',Helvetica]"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  value="register"
                  onClick={toggleReg}
                  className="w-1/2 h-9 rounded-lg data-[state=active]:bg-[#0c9b65] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-600 [font-family:'Inter-Medium',Helvetica]"
                >
                  Register
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Login Form */}
          <div className="w-full space-y-6">
            {/* Render dynamically log in or reg */}
            {(logOrReg == 'LogIn') ? <FadeInSection > <AuthLog/> </FadeInSection>: <FadeInSection> <AuthReg/> </FadeInSection>}
            {/* Social Login Divider */}
            <div className="relative my-6">
              <Separator className="absolute w-full top-1/2" />
              <div className="relative flex justify-center">
                <span className="bg-white px-2 text-sm text-gray-500 [font-family:'Inter-Regular',Helvetica]">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              {socialLogins.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-[54px] border-gray-300 [font-family:'Inter-Medium',Helvetica] text-gray-700 hover:bg-gray-50"
                >
                  <span className="mr-2">{social.icon}</span>
                  {social.name}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
