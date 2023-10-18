'use client'

import { UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6
     py-4 text-center text-zinc-500 shadow-sm hover:border-sky-200 hover:bg-sky-25 hover:text-sky-500 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-sky-300"
    >
      <div className="dark: rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-sky-50 group-hover:bg-sky-100 dark:border-zinc-700 dark:border-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700">
        <UploadCloud className="dark:group:hover:text-sky-300 h-5 w-5 text-zinc-600 group-hover:text-sky-600 dark:text-zinc-500 dark:group-hover:text-sky-300" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold  text-sky-700 dark:text-sky-300">
            Click to upload
          </span>{' '}
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG, or GIF (max. 800x400)</span>
      </div>
    </label>
  )
}
