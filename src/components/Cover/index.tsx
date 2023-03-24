import { useThree } from '@react-three/fiber'
import About from '../About'
import Introduction from "../Introduction"
import Wireframe from '../Wireframe'
import Avatar from './Avatar'
import AvatarBg from './AvatarBg'

export const Cover = () => {
  const { scene } = useThree()
  window.scene = scene
  return (
    <>

      <Introduction />
      <About />
    </>
  )
}
