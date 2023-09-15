import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NavBar from "./components/NavBar"

function App() {

  return (
    <>
      <NavBar />
      <Header />
      <div className="content-container">
        <Content />
      </div>
      <Footer />
    </>
  )
}

export default App
