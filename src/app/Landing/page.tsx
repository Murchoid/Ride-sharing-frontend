import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  CarIcon,
  ClockIcon,
  ShieldCheckIcon,
  BarChart3Icon,
} from "lucide-react";
import { FadeInSection } from "../../components/FadeInSection";


export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary via-white to-background text-foreground px-6 py-12 flex flex-col items-center justify-center">
      <section className="text-center max-w-2xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Effortless Rides, Anywhere You Go
        </h1>
        <p className="text-muted-foreground text-lg">
          Book affordable rides with trusted drivers. Built for speed, safety, and simplicity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/auth/user/signin">Get Started</Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link to="/auth/user/signin">Login</Link>
          </Button>
        </div>
      </section>

      <section className="mt-16 max-w-4xl w-full">
        <img
          src='/cars/City driver-pana.svg'
          alt="Ride Sharing Illustration"
          className="w-full max-h-[400px] object-contain mx-auto"
        />
      </section>
      <section className="mt-24 max-w-5xl w-full text-center space-y-12">
  <h2 className="text-3xl md:text-4xl font-semibold text-primary">
    Why Choose Our Ride Sharing App?
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="flex flex-col items-center text-center space-y-3">
      <CarIcon className="w-10 h-10 text-accent" />
      <h3 className="text-xl font-medium">Reliable Drivers</h3>
      <p className="text-muted-foreground text-sm">
        All drivers are verified and rated for professionalism and safety.
      </p>
    </div>

    <div className="flex flex-col items-center text-center space-y-3">
      <ClockIcon className="w-10 h-10 text-accent" />
      <h3 className="text-xl font-medium">Fast Pickup</h3>
      <p className="text-muted-foreground text-sm">
        Get picked up quickly with real-time location tracking and auto-assignment.
      </p>
    </div>

    <div className="flex flex-col items-center text-center space-y-3">
      <ShieldCheckIcon className="w-10 h-10 text-accent" />
      <h3 className="text-xl font-medium">Secure Payments</h3>
      <p className="text-muted-foreground text-sm">
        Pay safely with MPESA — no cash, no hassle.
      </p>
    </div>

    <div className="flex flex-col items-center text-center space-y-3">
      <BarChart3Icon className="w-10 h-10 text-accent" />
      <h3 className="text-xl font-medium">Real Analytics</h3>
      <p className="text-muted-foreground text-sm">
        Track your rides, spending, and performance from your dashboard.
      </p>
    </div>
  </div>
</section>
<section className="mt-24 max-w-5xl w-full space-y-12 text-center">
  <h2 className="text-3xl md:text-4xl font-semibold text-primary">
    How It Works
  </h2>
  <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
    Whether you're booking a ride or picking one up — we've made it seamless for everyone.
  </p>
</section>
<section className="mt-24 max-w-6xl mx-auto space-y-16 text-center px-4">
  <h2 className="text-3xl md:text-4xl font-semibold text-primary">
    How It Works for Customers
  </h2>

  <FadeInSection delay={0.1}>
    <div className="grid md:grid-cols-3 gap-10 text-left">
    {/* Step 1 */}
    <div className="space-y-4">
      <img
        src="/cars/Order ride-bro.svg"
        alt="Request Ride Illustration"
        className="w-full h-48 object-contain"
      />
      <h3 className="text-xl font-semibold text-foreground">1. Request a Ride</h3>
      <p className="text-muted-foreground">
        Enter pickup and drop-off points, get an instant fare and ETA.
      </p>
    </div>

    {/* Step 2 */}
    <div className="space-y-4">
      <img
        src="/cars/City driver-pana.svg"
        alt="Matched with Driver Illustration"
        className="w-full h-48 object-contain"
      />
      <h3 className="text-xl font-semibold text-foreground">2. Get Matched Instantly</h3>
      <p className="text-muted-foreground">
        We'll assign the nearest driver. You can track them in real-time.
      </p>
    </div>

    {/* Step 3 */}
    <div className="space-y-4">
      <img
        src="/cars/Navigation-pana.svg"
        alt="Complete Ride Illustration"
        className="w-full h-48 object-contain"
      />
      <h3 className="text-xl font-semibold text-foreground">3. Arrive & Pay</h3>
      <p className="text-muted-foreground">
        Ride safely to your destination and pay via MPESA. View ride history any time.
      </p>
    </div>
  </div>
  </FadeInSection>
</section>

<section className="mt-32 max-w-6xl mx-auto space-y-16 text-center px-4">
  <h2 className="text-3xl md:text-4xl font-semibold text-primary">
    How It Works for Drivers
  </h2>

  <FadeInSection delay={0.2}>
      <div className="grid md:grid-cols-3 gap-10 text-left">
    {/* Step 1 */}
    <div className="space-y-4">
      <img
        src="/cars/City driver-rafiki.svg"
        alt="Go Online Illustration"
        className="w-full h-48 object-contain"
      />
      <h3 className="text-xl font-semibold text-foreground">1. Go Online</h3>
      <p className="text-muted-foreground">
        Set your availability in the driver dashboard and wait for incoming ride requests.
      </p>
    </div>

    {/* Step 2 */}
    <div className="space-y-4">
      <img
        src="/cars/Car driving-pana.svg"
        alt="Accept Ride Illustration"
        className="w-full h-48 object-contain"
      />
      <h3 className="text-xl font-semibold text-foreground">2. Accept and Drive</h3>
      <p className="text-muted-foreground">
        Accept rides and use built-in maps to navigate to pickup and drop-off.
      </p>
    </div>

    {/* Step 3 */}
    <div className="space-y-4">
      <img
        src="/cars/Payment Information-bro.svg"
        alt="Get Paid Illustration"
        className="w-full h-48 object-contain"
      />
      <h3 className="text-xl font-semibold text-foreground">3. Get Paid</h3>
      <p className="text-muted-foreground">
        Earn instantly with MPESA payouts. Track your earnings anytime from your dashboard.
      </p>
    </div>
  </div>
  </FadeInSection>
</section>

<section className="mt-32 bg-primary text-white text-center py-20 px-6 rounded-t-3xl">
  <FadeInSection>
    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
      Ready to Ride with Us?
    </h2>
    <p className="text-white/90 max-w-xl mx-auto text-lg mb-8">
      Sign up in seconds and start booking or accepting rides instantly.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Link to="/auth/user/signin">
        <Button size="lg" className="bg-white text-primary hover:bg-muted">
          Get Started
        </Button>
      </Link>
      <Link to="/auth/user/signin">
        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
          Login
        </Button>
      </Link>
    </div>
  </FadeInSection>
</section>


        <a href="https://storyset.com/technology">Technology illustrations by Storyset</a>

    </main>
  );
}
