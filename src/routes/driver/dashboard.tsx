import { createFileRoute } from '@tanstack/react-router'
import DriverDashboard from '@/app/dashboard/driverDashboard'

export const Route = createFileRoute('/driver/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <DriverDashboard/>
}
