import { ComponentProps } from 'react'

export type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className="dark:placeholder-text-zinc-400 min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm  outline-none focus:border-sky-300 focus:ring-4 focus:ring-sky-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:focus:border-sky-500 dark:focus:ring-sky-500/20"
      {...props}
    />
  )
}
