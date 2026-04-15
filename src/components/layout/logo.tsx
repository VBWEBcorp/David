import Link from 'next/link'

import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        'group inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-foreground transition-opacity hover:opacity-90',
        className
      )}
    >
      <img
        src="/logo-gozelec.svg"
        alt="Göz Elec"
        className="size-10 transition-transform duration-300 group-hover:scale-[1.03]"
      />
      <span className="sr-only">Göz Elec</span>
    </Link>
  )
}
