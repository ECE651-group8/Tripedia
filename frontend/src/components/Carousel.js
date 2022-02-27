import React from "react";
import {
  MDBCarouselElement,
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBCarouselInner,
} from "mdb-react-ui-kit";
import data from "../data";

const ImageSlider = () => {
  return (
    // <MDBCarousel showControls showIndicators>
    //   <MDBCarouselInner>
    //     {data.map((item, index) => (
    //       <MDBCarouselItem itemId={index}>
    //         <MDBCarouselElement
    //           src={item.image}
    //           alt={item.title}
    //           style={{ height: "700px" }}
    //         />
    //         <MDBCarouselCaption>
    //           <h5>{item.title}</h5>
    //           <p>{item.description}</p>
    //         </MDBCarouselCaption>
    //       </MDBCarouselItem>
    //     ))}
    //   </MDBCarouselInner>
    // </MDBCarousel>
    <MDBCarousel showControls showIndicators>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/041.webp' alt='...' />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/042.webp' alt='...' />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/043.webp' alt='...' />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default ImageSlider;
