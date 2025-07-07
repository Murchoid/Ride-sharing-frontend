import { Link } from '@tanstack/react-router'
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-white text-foreground shadow-sm">
  <nav className="max-w-6xl mx-auto flex items-center justify-between">
    {/* Logo */}
    <Link to="/" className="text-2xl font-bold text-primary">
      RideIO
    </Link>


    <div className="hidden md:flex items-center gap-6 font-medium">
      <Link
        to="/#features"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        Features
      </Link>
      <Link
        to="/auth/user/signin"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        Login
      </Link>
      <Link to="/auth/user/signin">
        <Button
          size="sm"
          className="bg-primary text-white hover:bg-primary/90 shadow "
        >
          Get Started
        </Button>
      </Link>
    </div>
  </nav>
</header>

  )
}
