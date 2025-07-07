import LogIn from '@/app/auth/Login'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/driver/register')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LogIn/>
}
