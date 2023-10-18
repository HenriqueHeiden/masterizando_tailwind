import { useState } from 'react'

const getItem = (param: string) => {
  return (
    <li className="flex items-center gap-2">
      <svg
        className="h-5 w-5 fill-current text-green-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <span className="text-sm font-medium text-zinc-700 group-hover:text-sky-500 dark:text-zinc-100 dark:group-hover:text-sky-300">
        {param}
      </span>
    </li>
  )
}

const getPlanos = (
  title: string,
  valor: string,
  param1: string,
  param2: string,
  param3: string,
  param4: string,
  selectionado?: string,
  setPlano?: void,
) => {
  return (
    <div
      className={`mt-19 bg-gray400 flex flex-grow flex-col overflow-hidden rounded-lg ${
        selectionado === title &&
        'border-2 border-b-4 border-t-4 border-sky-500/60'
      } text-white`}
    >
      <div className="bg-gray500 flex flex-col items-center p-10">
        <span className="font-semibold">{title}</span>
        <div className="flex items-center">
          <span className="text-3xl">R$</span>
          <span
            className={`text-5xl font-bold
            ${selectionado === '' && 'text-sky-500'}
            ${selectionado && selectionado === title && 'text-sky-600'}
            ${selectionado && selectionado !== title && 'text-sky-600/50'}
          `}
          >
            {valor}
          </span>

          <span className="text-2xl font-medium text-zinc-700 group-hover:text-sky-500 dark:text-zinc-100 dark:group-hover:text-sky-300">
            /mes
          </span>
        </div>
      </div>
      <div className="p-10">
        <ul>
          {getItem(param1)}
          {getItem(param2)}
          {getItem(param3)}
          {getItem(param4)}
        </ul>
      </div>
      <div className="justfy-center flex px-10 pb-10">
        <button
          onClick={() => {
            setPlano(title)
          }}
          className="flex h-12 w-full items-center justify-center rounded-lg bg-gray-200 px-6 text-sm font-medium
          uppercase text-zinc-700 group-hover:text-sky-500 dark:text-zinc-900 dark:group-hover:text-sky-300"
        >
          {selectionado === title ? 'Seu Plano' : 'Selecionar'}
        </button>
      </div>
    </div>
  )
}

export function Planos() {
  const [planoAtivo, setPlanoAtivo] = useState('')

  const setPlano = (param: string) => {
    setPlanoAtivo(param)
  }
  return (
    <div className="justify-centerp-10 flex flex-col items-center text-gray-700 ">
      <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100">
        Planos
      </h2>

      <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-1">
        {getPlanos(
          'Iniciante',
          '80',
          'Para até 15 mil de seguidores',
          '1 post por dia',
          '450 mil notificações por mes',
          '1 sorteios por mes',
          planoAtivo,
          setPlano,
        )}

        {getPlanos(
          'Avançado',
          '768,00',
          'Para até 250 mil de seguidores',
          '1 post por dia',
          '7.500 milhões notificações por mes',
          '2 sorteios por mes',
          planoAtivo,
          setPlano,
        )}

        {getPlanos(
          'Pro',
          '1.500,00',
          'Para até 1 milhão de seguidores',
          '1 post por dia',
          '30 milhões notificações por mes',
          '4 sorteios por mes',
          planoAtivo,
          setPlano,
        )}
      </div>
    </div>
  )
}
