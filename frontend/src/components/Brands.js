import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
import Pseudo from "./Pseudo";
import axios from "axios";

const responsive = {
  largeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

function Brands({ deviceType }) {
  const url = "https://picsum.photos/v2/list";

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(url).then(
      (res) => {
        setData(res.data);
      },
      (error) => {
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div className='text-center h3'>Error: {error.message}</div>;
  } else {
    return (
      <div className='container mb-3'>
        <div className='mx-3 my-0' id='headings'>
          Popular Brands
        </div>
        <Carousel
          responsive={responsive}
          ssr={true}
          containerClass='carousel-container'
          removeArrowOnDeviceType={["mobile"]}
          deviceType={deviceType}
          itemClass='carousel-item-padding-40-px'
          infinite
          keyBoardControl
          minimumTouchDrag={80}
        >
          {data.map((img, index) => {
            return (
              <div
                style={{ position: "relative" }}
                key={index}
                className=' mx-2 my-4'
              >
                <img
                  id='carousel-img'
                  className='img-fluid img-thumbnail'
                  src={img.download_url}
                  alt={img.url}
                />
              </div>
            );
          })}
        </Carousel>
        <Pseudo />
      </div>
    );
  }
}

export default Brands;
