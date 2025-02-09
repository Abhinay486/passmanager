import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    UserButton
  } from '@clerk/nextjs'
  import './globals.css'
  import Navbar from '@/components/Navbar'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProvider } from '@/components/theme-provider'

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
    
  }) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body>
            <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    )
  }
