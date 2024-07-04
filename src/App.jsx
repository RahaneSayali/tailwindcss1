import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="bg-amber-50 min-h-screen px-6 py-3 gap-16 flex flex-col md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-10">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
