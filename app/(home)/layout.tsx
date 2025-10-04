import Header from "@/features/common/components/Header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <div className="bg-[#BAD8FC] px-8">
          <Header />
        </div>
        <main className="flex min-h-[calc(100vh-81px)] flex-col overflow-hidden bg-white">
          {children}
        </main>
      </body>
    </html>
  )
}
