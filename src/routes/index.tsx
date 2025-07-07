import { createFileRoute } from '@tanstack/react-router'
import LandingPage from '@/app/Landing/page'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (<LandingPage/>)
}
