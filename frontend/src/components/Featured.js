import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
import Pseudo from "./Pseudo";

const images = process.env.PUBLIC_URL + "/images/";

const responsive = {
  largeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

function Featured({ deviceType }) {
  const url = "https://picsum.photos/v2/list";

  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

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
          Featured Products
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
              <div style={{ position: "relative" }} key={index}>
                <div className='card mx-2 my-3'>
                  <img
                    id='carousel-img'
                    className='img-fluid'
                    src={img.download_url}
                    alt={img.url}
                  />
                  <div className='card-body'>
                    <h4 className='card-title'>{img.author}</h4>
                    <p className='card-text'>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
        <Pseudo />
      </div>
    );
  }
}

export default Featured;
