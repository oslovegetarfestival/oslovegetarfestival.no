import { Header } from "components/Header"
import { Footer } from "components/Footer"

type Props = {
  children: React.ReactNode
}

export const PageLayout = ({ children }: Props) => {
  //@ts-expect-error
  const isFrontpage = children?.[0]?.props?.page?._type === "frontPage"

  return (
    <>
      <Header isFrontpage={isFrontpage} />
      <main style={{ paddingBottom: "60px" }}>{children}</main>
      <Footer />
    </>
  )
}
