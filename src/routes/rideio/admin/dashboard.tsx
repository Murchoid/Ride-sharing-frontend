import AdminDashboard from '@/app/dashboard/adminDashboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/rideio/admin/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AdminDashboard/>
}
