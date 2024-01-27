import React from "react";
import ImageGallery from "react-image-gallery";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./styles/text1.css";
import images from "./images";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles/t.css";

export default function App3() {
  function renderLeftNav(onClick, disabled) {
    return (
      <>
      <div className="lp">
<br></br><br></br><br></br>
      <button
        type="button"
        className="image-gallery-left-nav"
        aria-label="Prev Slide"
        disabled={disabled}
        onClick={onClick}
      >
        <FaArrowLeft size={30} color="#000" />
      </button>
      </div>
      </>
    );
  }

  function renderRightNav(onClick, disabled) {
    return (
      <div className="lp">
      <button
        type="button"
        className="image-gallery-right-nav"
        aria-label="Next Slide"
        disabled={disabled}
        onClick={onClick}
      >
        <FaArrowRight size={30} color="#000" />
      </button>
      </div>
    );
  }

  return (
    <div className="lp">
    <div className="App">
      
      <ImageGallery
        items={images}
        renderLeftNav={renderLeftNav}
        renderRightNav={renderRightNav}
      />
    </div>
    </div>
  );
}
