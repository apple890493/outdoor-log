import { FaDoorClosed, FaDoorOpen, FaHome, FaSearchLocation } from 'react-icons/fa'

const isLogin = true
const DoorIcon = isLogin ? FaDoorOpen : FaDoorClosed

const Navbar = () => {
  return (
    <aside className="fixed bottom-0 h-15 w-full flex flex-row cursor-pointer items-center justify-around border-rd-md bg-primary-light p-4 color-secondary-dark lg:static lg:h-full lg:w-30 lg:flex-col lg:justify-start lg:gap-3xl lg:pt-24">
      <FaHome size={28} className="hover:color-secondary" />
      <FaSearchLocation size={28} className="hover:color-secondary" />
      <DoorIcon size={28} className="hover:color-secondary" />
    </aside>
  )
}

export default Navbar
