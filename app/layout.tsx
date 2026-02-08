import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from '@/components/footer'
export const metadata = {
  title: "FitForce Gym - Transform Your Body, Transform Your Life",
  description:
    "Join FitForce Gym today and start your fitness journey with state-of-the-art equipment, expert trainers, and a supportive community.",
  generator: 'v0.dev'
}
import { Toaster } from "@/components/ui/sonner"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Header />
          <Toaster position="top-center" richColors /> {/* <--- Add this! */}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
