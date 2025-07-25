import Header from "@/features/common/components/Header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-center bg-white">
          {children}
        </main>
      </body>
    </html>
  )
}
