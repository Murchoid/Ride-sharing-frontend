import AdminDashboard from '@/app/dashboard/adminDashboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AdminDashboard/>
}
