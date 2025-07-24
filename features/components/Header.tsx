import Image from "next/image"
import Link from "next/link"
export default function Header() {
  return (
    <header className="flex justify-between items-center bg-[#BAD8FC] px-20 py-3.5">
        <Link href="/"><Image src='/logo.png' alt={""} width={100} height={53}/></Link>
        <nav>
            <ul className="flex items-center gap-24">
                <li><Link href='/home/ideas'>ნახატები და წინადადებები</Link></li>
                <li><Link href="/home/gallery">გალერეა</Link></li>
                <li><Link href="/home/guide">მასწავლებლის გზამკვლევი</Link></li>
                <li><Link href="/home/about">პროექტის შესახებ</Link></li>
            </ul>
        </nav>
        
    </header>
  )
}
