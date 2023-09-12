'use client'

import * as tabs from '@radix-ui/react-tabs'
import * as ScrollAre from '@radix-ui/react-scroll-area'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')
  return (
    <tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollAre.Root className="w-full" type="scroll">
        <ScrollAre.Viewport className="w-full overflow-x-scroll">
          <tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            <TabItem
              value="tab1"
              title="My Details"
              isSelected={currentTab === 'tab1'}
            />
            <TabItem
              value="tab2"
              title="Profile"
              isSelected={currentTab === 'tab2'}
            />
            <TabItem
              value="tab3"
              title="Password"
              isSelected={currentTab === 'tab3'}
            />
            <TabItem
              value="tab4"
              title="Team"
              isSelected={currentTab === 'tab4'}
            />
            <TabItem
              value="tab5"
              title="Plan"
              isSelected={currentTab === 'tab5'}
            />
            <TabItem
              value="tab6"
              title="Billing"
              isSelected={currentTab === 'tab6'}
            />
            <TabItem
              value="tab7"
              title="Email"
              isSelected={currentTab === 'tab7'}
            />
            <TabItem
              value="tab8"
              title="Notifications"
              isSelected={currentTab === 'tab8'}
            />
            <TabItem
              value="tab9"
              title="Integrations"
              isSelected={currentTab === 'tab9'}
            />
            <TabItem
              value="tab10"
              title="Api"
              isSelected={currentTab === 'tab10'}
            />
          </tabs.List>
        </ScrollAre.Viewport>

        <ScrollAre.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollAre.Thumb className="felx-1 relative rounded-lg bg-zinc-300" />
        </ScrollAre.Scrollbar>
      </ScrollAre.Root>
    </tabs.Root>
  )
}
