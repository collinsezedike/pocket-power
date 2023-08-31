import './App.css'
import Footer from './component/footer'
import Header from './component/header'
import Home from './component/home'
import Navigation from './component/navigation'
import Socials from './component/socials'

function App() {

  return (
    <>
      <main>
        <Header />
        <Navigation />
        <Home />
        <Socials />
      </main>
      <Footer />
    </>
  )
}

export default App
