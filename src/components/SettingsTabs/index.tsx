'use client'

import * as tabs from '@radix-ui/react-tabs'
import * as ScrollAre from '@radix-ui/react-scroll-area'
import { TabItem } from './TabItem'
import { useState } from 'react'
import Profile from '@/pages/Profile'
import MinhasPostagens from '@/pages/MinhasPostagens'
import CadastrarPost from '@/pages/CadastrarPost'
import MeusConcursos from '@/pages/MeusConcursos'
import CadastrarConcursos from '@/pages/CadastrarConcursos'
import MeuPerfil from '@/pages/MeuPerfil'
import MeuPlano from '@/pages/MeuPlano'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')
  return (
    <tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollAre.Root className="w-full" type="scroll">
        <ScrollAre.Viewport className="w-full overflow-x-scroll">
          <tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            <TabItem
              value="tab1"
              title="Minhas postagens"
              isSelected={currentTab === 'tab1'}
            />
            <TabItem
              value="tab2"
              title="Cadastrar Post"
              isSelected={currentTab === 'tab2'}
            />
            <TabItem
              value="tab3"
              title="Meus concursos"
              isSelected={currentTab === 'tab3'}
            />
            <TabItem
              value="tab4"
              title="Cadastrar concursos"
              isSelected={currentTab === 'tab4'}
            />

            <TabItem
              value="tab5"
              title="Meu Perfil"
              isSelected={currentTab === 'tab5'}
            />

            <TabItem
              value="tab6"
              title="Meu plano"
              isSelected={currentTab === 'tab6'}
            />
          </tabs.List>
          <tabs.Content value="tab1">
            <MinhasPostagens />
          </tabs.Content>

          <tabs.Content value="tab2">
            <CadastrarPost />
          </tabs.Content>

          <tabs.Content value="tab3">
            <MeusConcursos />
          </tabs.Content>

          <tabs.Content value="tab4">
            <CadastrarConcursos />
          </tabs.Content>

          <tabs.Content value="tab5">
            <MeuPerfil />
          </tabs.Content>

          <tabs.Content value="tab6">
            <MeuPlano />
          </tabs.Content>
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
