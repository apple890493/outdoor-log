import { FaDoorClosed, FaDoorOpen, FaHome, FaSearchLocation } from 'react-icons/fa'

const isLogin = true
const DoorIcon = isLogin ? FaDoorOpen : FaDoorClosed

const Navbar = () => {
  return (
    <aside className="bg-primary-light color-secondary-dark cursor-pointer h-15 border-rd-md flex flex-row justify-around items-center lg:pt-24 lg:flex-col lg:justify-start lg:gap-3xl lg:h-full lg:w-30 p-4 order-last lg:order-none">
      <FaHome size={28} className="hover:color-secondary" />
      <FaSearchLocation size={28} className="hover:color-secondary" />
      <DoorIcon size={28} className="hover:color-secondary" />
    </aside>
  )
}

export default Navbar
