import type { ReactNode } from 'react'
import { Cloud } from 'lucide-react'

export function PageHeader({ title, description, actions }: { title: ReactNode; description?: string; actions?: ReactNode }) {
  return (
    <div className="relative mt-2.5 overflow-hidden rounded-[24px] border border-blue-100 bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 px-4 py-4 text-white shadow-lg shadow-blue-950/10 sm:mt-3.5 sm:px-5 sm:py-5 lg:px-7 lg:py-6">
      <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-blue-100 backdrop-blur">
            <Cloud className="h-3.5 w-3.5" />
            9Drive Cloud
          </div>
          <h1 className="truncate text-2xl font-black tracking-tight sm:text-3xl lg:text-[32px]">{title}</h1>
          {description ? <p className="mt-1.5 max-w-2xl text-sm leading-5 text-blue-100/85">{description}</p> : null}
        </div>
        {actions ? (
          <div className="relative flex flex-wrap gap-2 lg:max-w-[55%] lg:justify-end">
            {actions}
          </div>
        ) : null}
      </div>
    </div>
  )
}
