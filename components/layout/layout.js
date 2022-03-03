import Navigation from "../navbar/Navigation"
// import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <nav className="relative z-10">
        <Navigation />
      </nav>
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}
