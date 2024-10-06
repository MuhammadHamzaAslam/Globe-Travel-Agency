import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <section>
      <div
        className="bg-[url('https://s3-alpha-sig.figma.com/img/689a/2467/122f863358e82f3cc1dbab4d71a827f9?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SaS6tzXiU00lGVNpNst9KPN1HrP8ghcpSQE0-3hjIDnkXtepVP7dwNLW515Hegy3EhQuRPVeaX6aNDX-cEUu9jZgFk78VEzw7VWTa7uMoa6dBqa3-7ps8tWwN77IF5nuLVGvRxotPPlueurKfLszB6BsL1ngzSUdQAdKGco750vfImWIKU5OVCdw9lRY~gNpqR9x~q6NsjWifjlWpqeW9PIMi5Ii~V6KA1KM2~sUOMT1kKN8SNBAHq2CzQtLX0kLECW6qHje1wR9ovI0AHW9ZtULL6Ib0NNwT6pS761LNdOzIccdznqcBkosFMZGKDFvbtsAc1T78nO~3t4F701XhQ__')]
        bg-cover bg-center bg-no-repeat mx-8 rounded-[30px] mt-5 "
      >
        <Navbar />
        <Hero />
      </div>
    </section>
  );
};

export default Home;
