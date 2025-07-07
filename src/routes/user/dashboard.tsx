import customerDashboard from '@/app/dashboard/customerDashboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <customerDashboard/>;
}
