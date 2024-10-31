import React from 'react'

import Navbar from '@/components/Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <Navbar />
      <main className="flex-1 p-4 bg-default">{children}</main>
    </div>
  )
}

export default Layout
