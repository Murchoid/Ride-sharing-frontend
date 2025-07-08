import CustomerDashboard from '@/app/dashboard/customerDashboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/rideio/user/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CustomerDashboard/>;
}
