import Image from 'next/image'
import { Nav, Products } from './_components'
import { SideCart } from './_components/Cart'

export default function Home() {
  return (
   <div>
    <Nav/>
    <Products/>
    <SideCart/>
   </div>
  )
}
