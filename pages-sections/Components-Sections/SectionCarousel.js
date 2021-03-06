import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";
import { attributes, react as HomeContent } from '../../content/main.md';

const useStyles = makeStyles(styles);

export default function SectionCarousel({carousel}) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                {carousel.map((i, index) => {
                  return (<div key={index}>
                            <img src={i.image} alt="Slide" className="slick-image" />
                          </div>)
                })}
                {/*<div>*/}
                {/*  <img src={image1} alt="First slide" className="slick-image" />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*  <img src={image2} alt="Second slide" className="slick-image"*/}
                {/*  />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*  <img src={image3} alt="Third slide" className="slick-image" />*/}
                {/*</div>*/}
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
