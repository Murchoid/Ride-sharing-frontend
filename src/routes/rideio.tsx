import { createFileRoute } from '@tanstack/react-router'
import { Outlet, redirect } from '@tanstack/react-router';
import { useAuthStore } from '@/store/authStore'; 


export const Route = createFileRoute('/rideio')({
  beforeLoad: () => {
    const { isVerified } = useAuthStore.getState(); 
    if (!isVerified) {
      throw redirect({ to: '/auth/user/signin' }); 
    }
  },
  component: function AppLayout() {
    return (
        <Outlet />
    );
  },
});
