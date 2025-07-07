import LogIn from '@/app/auth/Login'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/admin/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LogIn/>
}
