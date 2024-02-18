import Link from 'next/link'

function Logo() {
  return (
    <Link
      href="/"
      className="bg-gradient-to-r from-indigo-400 to-violet-800 bg-clip-text text-3xl font-bold text-transparent hover:cursor-pointer"
    >
      FormDrag
    </Link>
  )
}

export default Logo
