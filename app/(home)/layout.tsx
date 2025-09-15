import Header from "@/features/common/components/Header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        <main className="flex min-h-screen flex-col overflow-hidden bg-white">
          {children}
        </main>
      </body>
    </html>
  )
}
