import { useRouter } from "next/router"
import { Header } from "components/Header"
import { Footer } from "components/Footer"

type Props = {
  children: React.ReactNode
}

export const PageLayout = ({ children }: Props) => {
  const router = useRouter()

  //@ts-expect-error
  const isFrontpage = children?.[0]?.props?.page?._type === "frontPage"

  return (
    <>
      <Header isFrontpage={isFrontpage} />
      <main
        data-animate-in
        key={router.asPath}
        style={{ paddingBottom: "60px" }}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}
