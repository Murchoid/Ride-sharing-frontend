import { Link } from '@tanstack/react-router'
import { Button } from "@/components/ui/button";
import { getUserInfoFromToken } from '@/utils/jwt';
import { useAuthStore } from '@/store/authStore';

export default function Header() {
  const {accessToken} = useAuthStore();
  console.log(accessToken);
  let dashBoardUrl;

  if(accessToken){
    const userInfo = getUserInfoFromToken(accessToken);
    const role = userInfo?.role;

    if(role == 'ADMIN') dashBoardUrl = 'rideio/admin/dashboard';
    if(role == 'CUSTOMER') dashBoardUrl = 'rideio/user/dashboard';
    if(role== 'DRIVER') dashBoardUrl = 'rideio/driver/dashboard';
  }else{
    dashBoardUrl = 'auth/user/signin';
  } 
  return (
    <header className="w-full px-6 py-4 bg-white text-foreground shadow-sm">
  <nav className="max-w-6xl mx-auto flex items-center justify-between">
    {/* Logo */}
    <Link to="/" className="text-2xl font-bold text-primary">
      RideIO
    </Link>


    <div className="hidden md:flex items-center gap-6 font-medium">
      <Link
        to="/#features"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        Features
      </Link>
      <Link
        to="/auth/user/signin"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        Login
      </Link>
       <Link to={dashBoardUrl}>
        <Button
          size="sm"
          className="bg-primary text-white hover:bg-primary/90 shadow "
        >
          Dashboard
        </Button>
      </Link>
      <Link to="/auth/user/signin">
        <Button
          size="sm"
          className="bg-primary text-white hover:bg-primary/90 shadow "
        >
          Get Started
        </Button>
      </Link>
    </div>
  </nav>
</header>

  )
}
