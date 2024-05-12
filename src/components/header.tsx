import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-center w-full border-b-[1px] border-zinc-800">
      <Link href="/" className="p-5 hover:bg-zinc-800">
        Tokens
      </Link>
      <Link href="/t2" className="p-5 hover:bg-zinc-800">
        Set T2
      </Link>
    </header>
  )
}
