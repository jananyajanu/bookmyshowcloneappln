import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
  return (
    <>
      <div>
        <img
          className="w-full h-full rounded-lg"
          src={props.src}
          alt="entertainment"
        />
      </div>
    </>
  );
};

const EntertainmentCardSlider = () => {
  const EntertainmentImage = [
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00364249-gysqjkrwnv-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00380018-vlvxmddfxg-portrait.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2EUS5rvdfrgJHn73Y7DP4CVhXcp3E8Z2xJOaVvXrxc5WCTJbGGBj9KDoIM8TjJvMvRAw&usqp=CAU",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-250,h-390/et00345114-pqtczlurjc-portrait.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY8vqrgfP-2Xohw8fRSeKGdhfUukIxGdxbPx-tofT_JJ2PRrPODL92iZaMDXUq1B6m664&usqp=CAU",
    "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/namma-hudugaru-et00333229-1656934347.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00401439-xdtxcmtyux-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-250,h-390/et00326486-agcdjhhjdx-portrait.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU9u9WvvkuFu8sJeSpBsXIkXUKfq-wrokbG3okuPNfSroZLZ_3jKjosxktFrQA82qUVoU&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8HwiJhlu3oXzN77FHgO5wbKz_0qTvZeVTYw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfroecz5vrBgHxJnS8yMjBtVoagZjH4vu2aQ&s",
  ];
  const settings = {
    infinite: true,
    autoplay: 5,
    slidesToShow: 5,
    slidesToScroll: 4,
    intialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          intialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {EntertainmentImage.map((image) => (
          <EntertainmentCard src={image} />
        ))}
      </Slider>
    </>
  );
};
export default EntertainmentCardSlider;
