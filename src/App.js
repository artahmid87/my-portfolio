import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/MainHome/Home";
import Portfolio from "./Component/Portfolio/Portfolio";
import DemoProject from "./Component/Project/DemoProject";
import Service from "./Component/Service/Service";

function App() {
  return (
    <>
      <Home></Home>

      <About></About>

      <section className="bg-slate-900 overflow-hidden">
        <Service></Service>
      </section>

      <section className="bg-white overflow-hidden">
        <Portfolio></Portfolio>
      </section>

      <section id="demoProject" className="overflow-hidden">
        <DemoProject></DemoProject>
      </section>

      <section className="overflow-hidden bg-slate-700">
        <Footer></Footer>
      </section>
    </>
  );
}

export default App;
