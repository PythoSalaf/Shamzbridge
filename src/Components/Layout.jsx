import { About, Footer, Hero, Navbar, Service } from "../Components";
const Layout = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="">
        <Navbar />
      </div>
      <div className="flex-grow">
        <Hero />
        <About />
        <Service />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
