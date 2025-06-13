import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Dumbbell, MapPin, MessageSquare, Users } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">FitForce</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#home" className="font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#features" className="font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="#classes" className="font-medium transition-colors hover:text-primary">
              Classes
            </Link>
            <Link href="#trainers" className="font-medium transition-colors hover:text-primary">
              Trainers
            </Link>
            <Link href="#pricing" className="font-medium transition-colors hover:text-primary">
              Pricing
            </Link>
            <Link href="#testimonials" className="font-medium transition-colors hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" className="hidden md:flex">
              Log In
            </Button>
            <Button>Join Now</Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Gym background"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="flex flex-col items-center text-center text-white md:items-start md:text-left lg:w-2/3 relative z-10">
              <Badge className="mb-4">New Member Special: 50% Off</Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Transform Your Body, <br className="hidden md:inline" />
                Transform Your Life
              </h1>
              <p className="mb-8 max-w-md text-lg text-gray-200 dark:text-gray-200">
                Join FitForce Gym today and start your fitness journey with state-of-the-art equipment, expert trainers,
                and a supportive community.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button size="lg" className="text-lg">
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-black text-lg"
                >
                  View Membership Plans
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Why Choose FitForce?</h2>
              <p className="mt-4 text-muted-foreground">We offer everything you need to achieve your fitness goals</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Dumbbell className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Modern Equipment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    State-of-the-art fitness equipment for all your workout needs, regularly maintained and updated.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Expert Trainers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Certified personal trainers to guide you through your fitness journey with customized workout plans.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>24/7 Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Work out on your schedule with round-the-clock access to our facilities, 365 days a year.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <CardTitle>Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Join a supportive community of like-minded individuals who will motivate and inspire you.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
                      <path d="M2 20h20" />
                      <path d="M14 12v.01" />
                    </svg>
                  </div>
                  <CardTitle>Clean Facilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Spotlessly clean facilities with regular sanitization to ensure a safe workout environment.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 2v8" />
                      <path d="m4.93 10.93 1.41 1.41" />
                      <path d="M2 18h2" />
                      <path d="M20 18h2" />
                      <path d="m19.07 10.93-1.41 1.41" />
                      <path d="M22 22H2" />
                      <path d="M16 6 8 14" />
                      <path d="M16 14 8 6" />
                    </svg>
                  </div>
                  <CardTitle>Diverse Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A wide variety of group fitness classes for all levels, from yoga to high-intensity interval
                    training.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Classes Section */}
        <section id="classes" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Classes</h2>
              <p className="mt-4 text-muted-foreground">Find the perfect class to match your fitness goals</p>
            </div>
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="all">All Classes</TabsTrigger>
                  <TabsTrigger value="cardio">Cardio</TabsTrigger>
                  <TabsTrigger value="strength">Strength</TabsTrigger>
                  <TabsTrigger value="yoga">Yoga & Wellness</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "HIIT Circuit",
                      image: "/placeholder.svg?height=300&width=400",
                      category: "Cardio",
                      duration: "45 min",
                      level: "Intermediate",
                      description:
                        "High-intensity interval training to maximize calorie burn and improve cardiovascular fitness.",
                    },
                    {
                      title: "Power Lifting",
                      image: "/placeholder.svg?height=300&width=400",
                      category: "Strength",
                      duration: "60 min",
                      level: "Advanced",
                      description: "Focus on compound movements to build strength and muscle mass.",
                    },
                    {
                      title: "Vinyasa Flow",
                      image: "/placeholder.svg?height=300&width=400",
                      category: "Yoga",
                      duration: "60 min",
                      level: "All Levels",
                      description: "Dynamic yoga practice linking breath with movement for strength and flexibility.",
                    },
                    {
                      title: "Spin Class",
                      image: "/placeholder.svg?height=300&width=400",
                      category: "Cardio",
                      duration: "45 min",
                      level: "All Levels",
                      description:
                        "High-energy indoor cycling class with music to improve endurance and burn calories.",
                    },
                    {
                      title: "Core Strength",
                      image: "/placeholder.svg?height=300&width=400",
                      category: "Strength",
                      duration: "30 min",
                      level: "All Levels",
                      description: "Targeted exercises to strengthen your core muscles and improve stability.",
                    },
                    {
                      title: "Meditation",
                      image: "/placeholder.svg?height=300&width=400",
                      category: "Yoga",
                      duration: "30 min",
                      level: "All Levels",
                      description: "Guided meditation sessions to reduce stress and improve mental clarity.",
                    },
                  ].map((classItem, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={classItem.image || "/placeholder.svg"}
                          alt={classItem.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge>{classItem.category}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{classItem.title}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>{classItem.duration}</span>
                            </div>
                            <div>
                              <span>{classItem.level}</span>
                            </div>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{classItem.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Schedule
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="cardio" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "HIIT Circuit",
                      image: "/placeholder.svg?height=300&width=400",
                      category: "Cardio",
                      duration: "45 min",
                      level: "Intermediate",
                      description:
                        "High-intensity interval training to maximize calorie burn and improve cardiovascular fitness.",
                    },
                    {
                      title: "Spin Class",
                      image: "/placeholder.svg?height=300&width=400",
                      category: "Cardio",
                      duration: "45 min",
                      level: "All Levels",
                      description:
                        "High-energy indoor cycling class with music to improve endurance and burn calories.",
                    },
                    {
                      title: "Cardio Kickboxing",
                      image: "/placeholder.svg?height=300&width=400",
                      category: "Cardio",
                      duration: "60 min",
                      level: "All Levels",
                      description: "Combine martial arts techniques with fast-paced cardio for a full body workout.",
                    },
                  ].map((classItem, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={classItem.image || "/placeholder.svg"}
                          alt={classItem.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge>{classItem.category}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{classItem.title}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>{classItem.duration}</span>
                            </div>
                            <div>
                              <span>{classItem.level}</span>
                            </div>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{classItem.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Schedule
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="strength" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Power Lifting",
                      image: "/placeholder.svg?height=300&width=400",
                      category: "Strength",
                      duration: "60 min",
                      level: "Advanced",
                      description: "Focus on compound movements to build strength and muscle mass.",
                    },
                    {
                      title: "Core Strength",
                      image: "/placeholder.svg?height=300&width=400",
                      category: "Strength",
                      duration: "30 min",
                      level: "All Levels",
                      description: "Targeted exercises to strengthen your core muscles and improve stability.",
                    },
                    {
                      title: "Body Pump",
                      image: "/placeholder.svg?height=300&width=400",
                      category: "Strength",
                      duration: "45 min",
                      level: "Intermediate",
                      description:
                        "Barbell workout that strengthens your entire body and challenges all major muscle groups.",
                    },
                  ].map((classItem, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={classItem.image || "/placeholder.svg"}
                          alt={classItem.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge>{classItem.category}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{classItem.title}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>{classItem.duration}</span>
                            </div>
                            <div>
                              <span>{classItem.level}</span>
                            </div>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{classItem.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Schedule
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="yoga" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Vinyasa Flow",
                      image: "/placeholder.svg?height=300&width=400",
                      category: "Yoga",
                      duration: "60 min",
                      level: "All Levels",
                      description: "Dynamic yoga practice linking breath with movement for strength and flexibility.",
                    },
                    {
                      title: "Meditation",
                      image: "/placeholder.svg?height=300&width=400",
                      category: "Yoga",
                      duration: "30 min",
                      level: "All Levels",
                      description: "Guided meditation sessions to reduce stress and improve mental clarity.",
                    },
                    {
                      title: "Gentle Yoga",
                      image: "/placeholder.svg?height=300&width=400",
                      category: "Yoga",
                      duration: "45 min",
                      level: "Beginner",
                      description: "Slow-paced class focusing on basic poses and relaxation techniques.",
                    },
                  ].map((classItem, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={classItem.image || "/placeholder.svg"}
                          alt={classItem.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge>{classItem.category}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{classItem.title}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>{classItem.duration}</span>
                            </div>
                            <div>
                              <span>{classItem.level}</span>
                            </div>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{classItem.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">
                          View Schedule
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            <div className="mt-12 text-center">
              <Button size="lg">View Full Schedule</Button>
            </div>
          </div>
        </section>

        {/* Trainers Section */}
        <section id="trainers" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Meet Our Trainers</h2>
              <p className="mt-4 text-muted-foreground">Expert guidance from certified fitness professionals</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Alex Johnson",
                  role: "Head Trainer",
                  image: "/placeholder.svg?height=400&width=400",
                  specialties: ["Strength Training", "Nutrition", "Weight Loss"],
                },
                {
                  name: "Sarah Williams",
                  role: "Yoga Instructor",
                  image: "/placeholder.svg?height=400&width=400",
                  specialties: ["Vinyasa Yoga", "Meditation", "Flexibility"],
                },
                {
                  name: "Mike Thompson",
                  role: "HIIT Specialist",
                  image: "/placeholder.svg?height=400&width=400",
                  specialties: ["Cardio", "Circuit Training", "Athletic Performance"],
                },
                {
                  name: "Emma Davis",
                  role: "Nutrition Coach",
                  image: "/placeholder.svg?height=400&width=400",
                  specialties: ["Meal Planning", "Weight Management", "Sports Nutrition"],
                },
              ].map((trainer, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-64">
                    <Image src={trainer.image || "/placeholder.svg"} alt={trainer.name} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{trainer.name}</CardTitle>
                    <CardDescription>{trainer.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Specialties:</p>
                      <div className="flex flex-wrap gap-2">
                        {trainer.specialties.map((specialty, i) => (
                          <Badge key={i} variant="secondary">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Book a Session
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Membership Plans</h2>
              <p className="mt-4 text-muted-foreground">Choose the perfect plan for your fitness journey</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    $29<span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {[
                      "Access to gym equipment",
                      "Locker room access",
                      "2 group classes per month",
                      "Fitness assessment",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col border-primary">
                <CardHeader className="bg-primary text-primary-foreground">
                  <div className="text-sm font-medium uppercase">Most Popular</div>
                  <CardTitle className="mt-2">Premium</CardTitle>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    $59<span className="ml-1 text-xl font-normal opacity-80">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {[
                      "Unlimited access to gym equipment",
                      "Unlimited group classes",
                      "1 personal training session per month",
                      "Nutrition consultation",
                      "Access to sauna and spa",
                      "Guest passes (2 per month)",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Elite</CardTitle>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    $99<span className="ml-1 text-xl font-normal text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {[
                      "All Premium features",
                      "4 personal training sessions per month",
                      "Customized workout plan",
                      "Customized nutrition plan",
                      "Priority class booking",
                      "Unlimited guest passes",
                      "Exclusive events access",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <p className="mb-4 text-muted-foreground">Not ready to commit? Try our day pass for $15</p>
              <Button variant="outline">Purchase Day Pass</Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Success Stories</h2>
              <p className="mt-4 text-muted-foreground">Hear what our members have to say</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Jennifer K.",
                  image: "/placeholder.svg?height=100&width=100",
                  text: "I've been a member for 6 months and lost 30 pounds! The trainers are amazing and the community keeps me motivated.",
                  rating: 5,
                },
                {
                  name: "Robert M.",
                  image: "/placeholder.svg?height=100&width=100",
                  text: "After trying several gyms, FitForce is by far the best. The equipment is top-notch and the 24/7 access fits perfectly with my busy schedule.",
                  rating: 5,
                },
                {
                  name: "Lisa T.",
                  image: "/placeholder.svg?height=100&width=100",
                  text: "The yoga classes have completely transformed my flexibility and reduced my stress levels. I look forward to them every week!",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <div className="flex text-amber-500">
                          {Array(testimonial.rating)
                            .fill(0)
                            .map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-4 w-4"
                              >
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex h-full items-center">
                      <p className="text-muted-foreground">
                        <span className="text-4xl font-serif text-primary">"</span>
                        {testimonial.text}
                        <span className="text-4xl font-serif text-primary">"</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline">Read More Reviews</Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="mt-4 text-muted-foreground">Have questions? We're here to help</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          First Name
                        </label>
                        <input
                          id="first-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Last Name
                        </label>
                        <input
                          id="last-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Membership Inquiry"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message here..."
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Visit Us</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-muted-foreground">123 Fitness Street, Cityville, State 12345</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Hours</h3>
                        <p className="text-muted-foreground">Monday - Friday: 5:00 AM - 11:00 PM</p>
                        <p className="text-muted-foreground">Saturday - Sunday: 7:00 AM - 9:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MessageSquare className="mt-0.5 h-5 w-5 text-primary" />
                      <div>
                        <h3 className="font-medium">Contact</h3>
                        <p className="text-muted-foreground">Phone: (555) 123-4567</p>
                        <p className="text-muted-foreground">Email: info@fitforcegym.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Map</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video w-full overflow-hidden rounded-md bg-muted">
                      <Image
                        src="/placeholder.svg?height=300&width=600"
                        alt="Map location"
                        width={600}
                        height={300}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Get Directions
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              Ready to Transform Your Body?
            </h2>
            <p className="mx-auto max-w-2xl text-lg mb-8">
              Join FitForce today and start your fitness journey with a free 7-day trial. No commitment required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="text-lg">
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Schedule a Tour
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">FitForce</span>
              </div>
              <p className="text-muted-foreground mb-4">Your journey to a healthier, stronger you starts here.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-muted-foreground hover:text-primary">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#classes" className="text-muted-foreground hover:text-primary">
                    Classes
                  </Link>
                </li>
                <li>
                  <Link href="#trainers" className="text-muted-foreground hover:text-primary">
                    Trainers
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-primary">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Fitness Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Nutrition Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Workout Videos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Newsletter</h3>
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter for fitness tips, special offers, and more.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} FitForce Gym. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
