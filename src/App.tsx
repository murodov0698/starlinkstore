import { Advisor } from './components/Advisor'
import { Header } from './components/Header'
import { Hero, TrustBar, Why } from './components/Hero'
import { Products } from './components/Products'
import { Contact, Coverage, Dock, FAQ, Footer, Process, Services } from './components/Sections'
import { Starfield } from './components/Starfield'
import { LanguageProvider } from './language'

export default function App() {
  return (
    <LanguageProvider>
      <Starfield />
      <div className="aurora" />
      <div className="aurora right" />
      <div className="app">
        <Header />
        <Hero />
        <TrustBar />
        <Why />
        <Products />
        <Advisor />
        <Services />
        <Process />
        <Coverage />
        <FAQ />
        <Contact />
        <Footer />
        <Dock />
      </div>
    </LanguageProvider>
  )
}
