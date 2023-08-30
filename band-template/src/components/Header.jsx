import React, { useState, useEffect } from "react";

import "./_header.scss";

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__main">
        <li>
          <a
            href="#"
            title=""
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#"
            title=""
          >
            BAND
          </a>
        </li>
        <li>
          <a
            href="#"
            title=""
          >
            TOUR
          </a>
        </li>
        <li>
          <a
            href="#"
            title=""
          >
            CONTACT
          </a>
        </li>
        <li>
          <a
            href="#"
            title=""
          >
            MORE
          </a>
          <ul className="menu__sub">
            <li>
              <a
                href="#"
                title=""
              >
                Merchandise
              </a>
            </li>
            <li>
              <a
                href="#"
                title=""
              >
                Extras
              </a>
            </li>
            <li>
              <a
                href="#"
                title=""
              >
                Media
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <label>
        <input
          type="search"
          placeholder="What do you looking for?"
        />
      </label>
    </nav>
  );
};

const Carousel = () => {
  const images = [
    "https://www.w3schools.com/w3images/la.jpg",
    "https://www.w3schools.com/w3images/ny.jpg",
    "https://www.w3schools.com/w3images/chicago.jpg",
  ];

  const headerTitle = ["Los Angeles", "New York", "Chicago"];
  const headerCaption = [
    "We had the best time playing at Venice Beach!",
    "The atmosphere in New York",
    "Thank you, Chicago - A night we won't forget.",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentCaptionIndex, setCurrentCaptionIndex] = useState(0);

  useEffect(() => {
    // Function to change the image
    const changeContent = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentCaptionIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set an interval to change the image every 3 seconds (3000 milliseconds)
    const intervalId = setInterval(changeContent, 3000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="carousel">
      <img
        src={images[currentImageIndex]}
        alt="Image"
      />
      <p>{headerTitle[currentTitleIndex]}</p>
      <p>{headerCaption[currentCaptionIndex]}</p>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Menu />
      <Carousel />
    </header>
  );
};

export default Header;
