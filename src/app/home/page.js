import React from "react";
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';


function Home() {
  return (
    <section className="container bg-custom-light-grey">
      <div>
        <Navbar />
        <Hero />
      </div>
    </section>
  );
}

export default Home;
