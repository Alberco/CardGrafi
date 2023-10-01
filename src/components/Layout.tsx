
import Navbar from "./Navbar"
import { ReactNode } from "react"

interface Props {
  children : ReactNode
}

function LayoutC({ children }: Props) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="bg-[#17171C] px-4 lg:h-screen h-full">
        { children }
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default LayoutC