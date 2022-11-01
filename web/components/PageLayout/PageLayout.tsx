import { Header } from "components/Header"
import { Footer } from "components/Footer"

type Props = {
  children: React.ReactNode
}

export const PageLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
