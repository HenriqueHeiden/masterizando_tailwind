'use client'

import * as tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabitemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ value, title, isSelected = false }: TabitemProps) {
  return (
    <tabs.Trigger
      value={value}
      className="group relative px-1 pb-4 text-sm font-medium text-zinc-500 outline-none hover:text-sky-700 data-[state=active]:text-sky-700 dark:text-zinc-400 dark:hover:text-sky-300 dark:data-[state=active]:text-sky-300"
    >
      <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-sky-400 group-focus-visible:ring-offset-4">
        {title}
      </span>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-sky-700 dark:bg-sky-300"
        />
      )}
    </tabs.Trigger>
  )
}
