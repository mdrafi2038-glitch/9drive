import type { ReactNode } from 'react'

export function PageHeader({ title, description, actions }: { title: ReactNode; description?: string; actions?: ReactNode }) {
  return (
    <div className="relative mt-2.5 overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-r from-white via-white to-blue-50/70 px-4 py-4 shadow-sm sm:mt-3.5 sm:px-5 sm:py-4 lg:px-6 lg:py-5">
      <div className="pointer-events-none absolute -right-10 -top-16 h-36 w-36 rounded-full bg-blue-100/60 blur-2xl" />
      <div className="relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="mb-1.5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-blue-700">
            9Drive
          </div>
          <h1 className="text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl lg:text-[30px]">{title}</h1>
          {description ? <p className="mt-1 text-sm leading-5 text-slate-500">{description}</p> : null}
        </div>
        {actions ? (
          <div className="relative flex flex-wrap gap-2 sm:shrink-0 sm:flex-nowrap sm:justify-end">
            {actions}
          </div>
        ) : null}
      </div>
    </div>
  )
}
