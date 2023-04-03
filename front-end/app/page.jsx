const inter = Inter({ subsets: ['latin'] })

import { Inter } from 'next/font/google'
import Container from './components/Containers/Container'
import {Headeris} from './components/Headeris'
import ImageCarrusel from './components/carrusel/ImageCarrusel'

export default function Home() {

  return (
    <div className='txt-center '>
        <Headeris />
        <Container classis="container">
          <ImageCarrusel>
          </ImageCarrusel>
        </Container> 

    </div>
  )
}
