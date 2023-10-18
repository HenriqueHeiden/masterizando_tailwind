import { InputControl, InputPrefix, InputRoot } from '../../components/Input'
import {
  Link,
  Youtube,
  Instagram,
  Facebook,
  Music2,
  Clipboard,
} from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'
import { useEffect, useState } from 'react'
import Modal from './Modal'

const getInput = (
  label: string,
  icon: string,
  id: string,
  type: string,
  placeholder: string,
  change?: any,
  value?: any,
  disable?: boolean,
) => {
  return (
    <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
      <label className="placeholder-bg-sky-600 text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </label>
      <InputRoot>
        <InputPrefix>
          {icon === 'Youtube' && <Youtube className="h-5 w-5 text-zinc-500" />}
          {icon === 'Instagram' && (
            <Instagram className="h-5 w-5 text-zinc-500" />
          )}
          {icon === 'Facebook' && (
            <Facebook className="h-5 w-5 text-zinc-500" />
          )}
          {icon === 'Web' && <Link className="h-5 w-5 text-zinc-500" />}

          {icon === 'TikTok' && <Music2 className="h-5 w-5 text-zinc-500" />}
          {icon === 'Clipboard' && (
            <Clipboard className="h-5 w-5 text-zinc-500" />
          )}
        </InputPrefix>
        <InputControl
          onChange={(e) => change(e.target.value)}
          value={value}
          id={id}
          type={type}
          placeholder={placeholder}
          disabled={disable}
        />
      </InputRoot>
    </div>
  )
}

export default function CadastrarPost() {
  type videoData = {
    id: string
    title: string
    thumbnail_url: string
  }
  const [value, setValue] = useState(false)

  const [dadosVideo, setDadosVideo] = useState<videoData>()
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [youtube, setYoutube] = useState('')
  const [instagram, setInstagram] = useState('')
  const [facebook, setFacebook] = useState('')
  const [tiktok, setTiktok] = useState('')
  const [link, setLink] = useState('')
  const [link2, setLink2] = useState('')
  const [link3, setLink3] = useState('')
  const [link4, setLink4] = useState('')
  const [img, setimg] = useState('')
  const [usarDadosYoutube, setUsarDadosYoutube] = useState(false)

  useEffect(() => {
    if (dadosVideo) {
      debugger
      setShowModal(true)
    }
  }, [dadosVideo])

  useEffect(() => {
    if (youtube.length > 14) {
      fetch(`https://www.youtube.com/oembed?format=json&url=${youtube}`)
        .then((response) => response.json())
        .then((json) => {
          const data = {
            id: String(new Date().getTime()),
            title: json.title,
            thumbnail_url: json.thumbnail_url,
          }
          setDadosVideo(json)
        })
    }
  }, [youtube])

  const createPost = () => {
// title,
// desc,
// youtube,
// instagram,
// facebook,
// tiktok,
// link,
// link2,
// link3,
// link4,
// img,
  }

  const handleCreatePost = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    console.log('title => ', title)
    console.log('desc => ', desc)
    console.log('youtube => ', youtube)
    console.log('instagram => ', instagram)
    console.log('facebook => ', facebook)
    console.log('tiktok => ', tiktok)
    console.log('link => ', link)
    console.log('link2 => ', link2)
    console.log('link3 => ', link3)
    console.log('link4 => ', link4)
    console.log('img => ', img)
    await createPost()
    setDadosVideo({
      id: '',
      title: '',
      thumbnail_url: '',
    })
    setTitle('')
    setDesc('')
    setYoutube('')
    setInstagram('')
    setFacebook('')
    setTiktok('')
    setLink('')
    setLink2('')
    setLink3('')
    setLink4('')
    setimg('')
  }

  return (
    <>
      <div className="mt-6 flex flex-col">
        <div className="flex flex-col  justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-700 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Cadastrar Post
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Cadastre a imagem e dados do post
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
          onSubmit={handleCreatePost}
        >
          {getInput(
            'Titulo',
            'Clipboard',
            'titulo',
            'text',
            'Titulo',
            setTitle,
            title,
          )}

          {getInput(
            'Descrição',
            'Clipboard',
            'desc',
            'text',
            'Descrição da postagem',
            setDesc,
            desc,
          )}
          {getInput(
            'URL do youtube',
            'Youtube',
            'youtube',
            'text',
            'link youtue',
            setYoutube,
            youtube,
            usarDadosYoutube,
          )}
          {getInput(
            'URL do tiktok',
            'TikTok',
            'tiktok',
            'text',
            'link tiktok',
            setTiktok,
            tiktok,
          )}

          {getInput(
            'URL do instagram',
            'Instagram',
            'instagram',
            'text',
            'link instagram',
            setInstagram,
            instagram,
          )}

          {getInput(
            'URL do facebook',
            'Facebook',
            'facebook',
            'text',
            'link facebook',
            setFacebook,
            facebook,
          )}

          {getInput(
            'URL do link',
            'Web',
            'link',
            'text',
            'link',
            setLink,
            link,
          )}

          {getInput(
            'URL do link',
            'Web',
            'link2',
            'text',
            'link ',
            setLink2,
            link2,
          )}

          {getInput(
            'URL do link',
            'Web',
            'link3',
            'text',
            'link',
            setLink3,
            link3,
          )}

          {getInput(
            'URL do link',
            'Web',
            'link4',
            'text',
            'link',
            setLink4,
            link4,
          )}

          {showModal && dadosVideo?.thumbnail_url && (
            <Modal
              closeModal={setShowModal}
              title={dadosVideo?.title}
              linkImg={dadosVideo?.thumbnail_url}
              setTitle={setTitle}
              setimg={setimg}
              setUsarDadosYoutube={setUsarDadosYoutube}
            />
          )}
          {usarDadosYoutube && dadosVideo?.thumbnail_url ? (
            <img
              src={dadosVideo?.thumbnail_url}
              alt=""
              className="h-44 w-44 rounded object-cover"
            />
          ) : (
            <div className="lg:grid-cols flex flex-col gap-3 pt-5 lg:grid">
              <label
                htmlFor="photo"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Imagem
                <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                  Isso será exibido em seu post
                </span>
              </label>
              <FileInput.Root className="lg:item-start flex flex-col gap-5 lg:flex-row">
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
            </div>
          )}

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
