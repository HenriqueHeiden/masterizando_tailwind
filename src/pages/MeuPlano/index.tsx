/* eslint-disable prettier/prettier */
import { SettingsTabs } from '@/components/SettingsTabs'
import { InputControl, InputPrefix, InputRoot } from '../../components/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'
import { Planos } from './Planos'

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
        <InputPrefix></InputPrefix>
        <InputControl id={id} type={type} placeholder={placeholder} />
      </InputRoot>
    </div>
  )
}

export default function MeuPerfil() {
  return (
    <>
      <div className="mt-6 flex flex-col">
        <div
          id="planos"
          className="flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <Planos />
          <form id="settings" className="mt-6 flex w-full flex-col gap-5" >
            <div className="mt-10 flex flex-col gap-3 lg:grid lg:grid-cols-form ">
              <label
                className="text-lg font-medium text-zinc-700 dark:text-zinc-300"
              >Preencha os campos a baixo</label>

              <div className="mt-16 flex flex-col gap-6 lg:grid lg:grid-cols-2">
                
                <InputRoot>
                  <InputControl type="text" id="firstname" placeholder="Nome" />
                </InputRoot>
                <div className="flex flex-col gap-3 lg:block">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
                  >
                    
                  </label>
                  <InputRoot>
                    <InputControl
                      type="text"
                      id="lastName"
                      placeholder="Sobre nome"
                    />
                  </InputRoot>
                </div>
              </div>
            </div>
            {getInput('', 'email', 'email', 'text', 'Digite o email ')}
            {getInput('', 'Cpf', 'cpf', 'text', 'Digite o cpf ')}

            <div className="mt-5 flex flex-col gap-3 lg:grid lg:grid-cols-form">
              <label
                htmlFor="cep"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              ></label>

              <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
                <InputRoot>
                  <InputControl type="text" id="cep" placeholder="Cep " />
                </InputRoot>
                <div className="flex flex-col gap-3 lg:block">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
                  >
                    
                  </label>
                  <InputRoot>
                    <InputControl
                      type="text"
                      id="endereco"
                      placeholder="Endereço"
                    />
                  </InputRoot>
                </div>
              </div>
            </div>

            
            <div className="mt-5 flex flex-col gap-3 lg:grid lg:grid-cols-form">
              <label
                htmlFor="Estado"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              ></label>

              <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
                <InputRoot>
                  <InputControl type="text" id="Estado" placeholder="Estado" />
                </InputRoot>
              </div>
            </div>

            <div className="mt-16 flex flex-col gap-3 lg:grid lg:grid-cols-form">
              <label
                htmlFor="ncartao"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              ></label>

              <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
                <InputRoot>
                  <InputControl type="text" id="ncartao" placeholder="Cartão de credito " />
                </InputRoot>
                <div className="flex flex-col gap-3 lg:block">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
                  >                    
                  </label>
                  <InputRoot>
                    <InputControl
                      type="month"
                      id="endereco"
                    />
                  </InputRoot>
                </div>

                <div className="flex flex-col gap-3 lg:block">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
                  >
                    
                  </label>
                  <InputRoot>
                    <InputControl
                      type="number"
                      id="endereco"
                      placeholder='CVV'
                    />
                  </InputRoot>
                </div>
              </div>
            </div> 

            <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
      <label className=""></label>
      <div className="
                flex
                
                items-center 
                justify-center">
                <div className='flex 
                h-12 
                w-96
                items-center 
                justify-center
                rounded-lg 
                bg-white
                text-sm 
                font-medium
                uppercase 
                text-zinc-700 
                group-hover:text-sky-500 
                dark:text-zinc-900 
                dark:group-hover:text-sky-300'>
                  Realizar pagamento

                  </div>
              </div>
    </div>
            
              
              
          </form>
        </div>
      </div>
    </>
  )
}
