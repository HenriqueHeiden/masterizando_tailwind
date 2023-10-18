import { SettingsTabs } from '@/components/SettingsTabs'
import { InputControl, InputPrefix, InputRoot } from '../../components/Input'
import {
  Bold,
  Clipboard,
  Italic,
  Link,
  List,
  ListOrdered,
  Mail,
} from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'
import { useState } from 'react'

const getInput = (
  label: string,
  icon: string,
  id: string,
  type: string,
  placeholder: string,
) => {
  return (
    <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
      <label className="placeholder-bg-sky-600 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </label>
      <InputRoot>
        <InputPrefix>
          {icon === 'Youtube' && (
            <Clipboard className="h-5 w-5 text-zinc-500" />
          )}
        </InputPrefix>
        <InputControl id={id} type={type} placeholder={placeholder} />
      </InputRoot>
    </div>
  )
}

export default function CadastrarConcursos() {
  const [dataInicial, setDataInicial] = useState('')
  const [dataFinal, setDataFinal] = useState('')
  const [Titulo, setTitulo] = useState('')
  const [img, setImg] = useState('')
  const [desc, setDesc] = useState('')
  const [objetivo, setObjetivo] = useState('')
  const handleCreateConcurso = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    console.log('dataInicial => ', dataInicial)
    console.log('dataFinal => ', dataFinal)
    console.log('Titulo => ', Titulo)
    console.log('img => ', img)
    console.log('desc => ', desc)
    console.log('objetivo => ', objetivo)

    setDataInicial('')
    setDataFinal('')
    setTitulo('')
    setImg('')
    setDesc('')
    setObjetivo('')
  }

  return (
    <>
      <div className="mt-6 flex flex-col">
        <div className="flex flex-col  justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-700 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Cadastrar Concursos
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal detail here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </div>
        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
          onSubmit={handleCreateConcurso}
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form ">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Data inicial / Data final
            </label>

            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <InputRoot>
                <InputControl
                  type="date"
                  id="firstname"
                  defaultValue="Data Inicial "
                />
              </InputRoot>
              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
                >
                  Data Final
                </label>
                <InputRoot>
                  <InputControl
                    type="date"
                    id="lastName"
                    defaultValue="Data Final"
                  />
                </InputRoot>
              </div>
            </div>
          </div>

          {getInput(
            'Titulo',
            'Titulo',
            'titulo',
            'text',
            'Digite o titulo do concurso ',
          )}

          <div className="lg:grid-cols flex flex-col gap-3 pt-5 lg:grid">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Imagem
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Imagem do item do concurso
              </span>
            </label>
            <FileInput.Root className="lg:item-start flex flex-col gap-5 lg:flex-row">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="lg:grid-cols flex flex-col gap-3 pt-5 lg:grid">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Descrição
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Descrição do concurso
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2"></div>
              <Textarea id="bio" />
            </div>
          </div>

          <div className="lg:grid-cols flex flex-col gap-3 pt-5 lg:grid">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Objetivo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Objetivo do concurso
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2"></div>
              <Textarea id="bio" />
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button
              variant="outline"
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
function setTitulo(arg0: string) {
  throw new Error('Function not implemented.')
}
