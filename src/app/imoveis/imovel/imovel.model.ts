import { Images } from './images.model'

export interface Imovel {
  id: string
  name: string
  description: string
  type: string
  value: number
  place: string[]
  images: Images[]
  contact: string
}
