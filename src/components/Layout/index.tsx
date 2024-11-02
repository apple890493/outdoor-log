import React from 'react'

import Navbar from '@/components/Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col lg:flex-row-reverse">
      <main className="m-b-15 flex-1 bg-default p-4 lg:m-b-0">{children}</main>
      <Navbar />
    </div>
  )
}

export default Layout
