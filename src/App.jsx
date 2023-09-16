import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"
import TextCarousel from "./components/TextCarousel"

function App() {

  const carouselItems = [
    {
      text:'30-DAY SATISFACTION GUARANTEE',
      imageURL: "/src/assets/quality.png",
    },
    {
      text: 'Free delivery on orders over $40.00',
      imageURL: "/src/assets/truck-light.png",
    },
    {
      text: '50.000+ HAPPY CUSTOMERS',
      imageURL: "/src/assets/heart.png"
    },
    {
      text: '100% Money Back Guarantee',
      imageURL: "/src/assets/money-back.png"
    }
  ];

  return (
    <>
      <TextCarousel
        items={carouselItems}
      />
      <div className="content-container">
        <Header />
        <Content />
      </div>
      <Footer />
    </>
  )
}

export default App
