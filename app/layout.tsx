import type React from "react"
import type { Metadata } from "next"
import { Onest, Nunito_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vocalis - Empowering Girls to Speak Out",
  description:
    "Helping girls in Kenyan high schools find their voice, connect with mentors, and access sponsorships for a brighter future.",
  icons: {
    icon: [
      {
        url: "/vocalis-icon.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
}

import { AuthProvider } from "@/lib/auth-context"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} ${nunitoSans.variable} font-body antialiased`}>
        <AuthProvider>
          {children}
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  )
}
