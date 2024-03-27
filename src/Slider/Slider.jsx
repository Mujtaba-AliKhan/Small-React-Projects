import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Slider.css";

const Slider = () => {
  const catsData = [
    {
      className: "bengal cat",
      name: "Bengal Cat",
      urlLink: "src/ReactTasks/Cats carousel/CatsImages/BengalCat.jpg",
      id: 1,
    },
    {
      className: "ragDoll cat",
      name: "Ragdoll Cat",
      urlLink: "src/ReactTasks/Cats carousel/CatsImages/Ragdoll.jpg",
      id: 2,
    },
    {
      className: "maineCoon cat",
      name: "Maine Coon Cat",
      urlLink: "src/ReactTasks/Cats carousel/CatsImages/Mainecoon.jpg",
      id: 3,
    },
    {
      className: "siamese cat",
      name: "Siamese Cat",
      urlLink: "src/ReactTasks/Cats carousel/CatsImages/Siamese.png",
      id: 4,
    },
    {
      className: "russianBlue cat",
      name: "Russian Blue Cat",
      urlLink: "src/ReactTasks/Cats carousel/CatsImages/RussianBlue.jpg",
      id: 5,
    },
    {
      className: "Abyssinian cat",
      name: "Abyssinian Cat",
      urlLink: "src/ReactTasks/Cats carousel/CatsImages/Abyssinian.jpg",
      id: 6,
    },
    {
      className: "BritishShorthair cat",
      name: "British Shorthair Cat",
      urlLink: "src/ReactTasks/Cats carousel/CatsImages/BritishShorthair.jpg",
      id: 7,
    },
    {
      className: "Himalayan cat",
      name: "Himalayan Cat",
      urlLink: "src/ReactTasks/Cats carousel/CatsImages/Himalayan.jpg",
      id: 8,
    },
    {
      className: "Munchkin cat",
      name: "Munchkin Cat",
      urlLink: "src/ReactTasks/Cats carousel/CatsImages/Munchkin.jpg",
      id: 9,
    },
    {
      className: "NorwegianForest cat",
      name: "Norwegian Forest Cat",
      urlLink: "src/ReactTasks/Cats carousel/CatsImages/NorwegianForest.png",
      id: 10,
    },
    {
      className: "Oriental cat",
      name: "Oriental Cat",
      urlLink: "src/ReactTasks/Cats carousel/CatsImages/Oriental.jpg",
      id: 11,
    },
    {
      className: "Persian cat",
      name: "Persian Cat",
      urlLink: "src/ReactTasks/Cats carousel/CatsImages/Persian.jpg",
      id: 12,
    },
    {
      className: "Regular cat",
      name: "Regular Cat",
      urlLink: "src/ReactTasks/Cats carousel/CatsImages/RegularCat.jpg",
      id: 13,
    },
    {
      className: "ScottishFold cat",
      name: "Scottish Fold Cat",
      urlLink: "src/ReactTasks/Cats carousel/CatsImages/ScottishFold.jpg",
      id: 14,
    },
    {
      className: "Sphynx cat",
      name: "Sphynx Cat",
      urlLink: "src/ReactTasks/Cats carousel/CatsImages/Sphynx.jpg",
      id: 15,
    },
  ];
  const firstSlide = catsData.slice(0, 5);
  const secondSlide = catsData.slice(5, 10);
  const thirdSlide = catsData.slice(10, 15);

  return (
    <div className="sliderContainer">
      <h1>Wikipurrdia: An Insightful Look into the World of Cats !</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        rewind={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="catcontainer">
            {firstSlide.map((cat) => (
              <div
                key={cat.id}
                className={cat.className}
                style={{
                  backgroundImage: `url("${cat.urlLink}")`,
                }}
              >
                <h1>{cat.name}</h1>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="catcontainer">
            {secondSlide.map((cat) => (
              <div
                key={cat.id}
                className={cat.className} //cat
                style={{
                  backgroundImage: `url("${cat.urlLink}")`,
                }}
              >
                <h1>{cat.name}</h1>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="catcontainer">
            {thirdSlide.map((cat) => (
              <div
                key={cat.id}
                className={cat.className} //cat
                style={{
                  backgroundImage: `url("${cat.urlLink}")`,
                }}
              >
                <h1>{cat.name}</h1>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
