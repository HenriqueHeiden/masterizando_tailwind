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
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span>{title}</span>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </tabs.Trigger>
  )
}
