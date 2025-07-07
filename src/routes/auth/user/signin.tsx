import LogIn from '@/app/auth/Login'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/user/signin')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LogIn/>
}
