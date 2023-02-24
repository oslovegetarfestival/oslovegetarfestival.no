import { Header } from "components/Header"
import { Footer } from "components/Footer"

type Props = {
  children: React.ReactNode
}

export const PageLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main style={{ paddingBottom: "60px" }}>{children}</main>
      <Footer />
    </>
  )
}
