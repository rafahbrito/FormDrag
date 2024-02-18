import { UserButton } from '@clerk/nextjs'

import Logo from '@/components/Logo'
import ThemeSwitcher from '@/components/ThemeSwitcher'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-h-screen min-h-screen min-w-full flex-col bg-background">
      <nav className="h-15 flex items-center justify-between border-b border-border px-4 py-2">
        <Logo />
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
      <main className="flex w-full flex-grow">{children}</main>
    </div>
  )
}

export default Layout
