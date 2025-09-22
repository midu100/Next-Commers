import Image from "next/image";
import Banner from "./components/Banner";
import Brands from "./components/Brands";
import NewArrival from "./components/NewArrival";
import TopSelling from "./components/TopSelling";
import Dress from "./components/Dress";
import Review from "./components/Review";
import Subscribe from "./components/Subscribe";

export default function Home() {
  return (
    <>
      <Banner />
      <Brands />
      <NewArrival />
      <TopSelling />
      <Dress />
      <Review />
    </>
  );
}
