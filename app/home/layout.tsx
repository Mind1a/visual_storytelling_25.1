import Header from "@/features/components/Header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header/>
        <main className="flex flex-col justify-center items-center bg-white min-h-screen">{children}</main>
      </body>
    </html>
  );
}