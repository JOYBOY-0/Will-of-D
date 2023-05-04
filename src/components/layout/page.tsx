import { RealViewportProvider } from "next-real-viewport"

type Props = {
  children?: React.ReactNode

  // TODO after implementing header, footer
  // headerProps?: HeaderProps
  // footerProps?: FooterProps
}

export const PageLayout = ({ children }: Props) => {
  return (
    <RealViewportProvider>
      {/* TODO Header */}
      {/* <Header /> */}
      <main>{children}</main>
      {/* TODO Footer */}
      {/* <Footer /> */}
    </RealViewportProvider>
  )
}
