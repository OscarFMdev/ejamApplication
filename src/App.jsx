import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NavBar from "./components/NavBar"

function App() {

  return (
    <>
      <NavBar />
      <div className="content-container">
        <Header />
        <Content />
      </div>
      <Footer />
    </>
  )
}

export default App
