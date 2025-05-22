import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Asave - Aplikasi Pengelolaan Keuangan",
  description: "Aplikasi penganggaran bergaya brutalis yang membantu Anda melacak pengeluaran, menghemat uang, dan mencapai tujuan keuangan Anda.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" }
    ],
    apple: [
      { url: "/apple-icon.png" }
    ],
    shortcut: [
      { url: "/shortcut-icon.png" }
    ]
  },
  manifest: "/manifest.json"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
