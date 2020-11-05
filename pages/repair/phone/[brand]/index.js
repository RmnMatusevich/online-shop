const repairPhoneApple = require("../../../../content/repair-phone-apple.md");
const repairPhoneSony = require("../../../../content/repair-phone-sony.md");

import Header from "../../../../components/Header/Header";
import HeaderLinks from "../../../../components/Header/HeaderLinks";
import Parallax from "../../../../components/Parallax/Parallax";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import classNames from "classnames";
import SectionOpening from "../../../../pages-sections/Components-Sections/SectionOpening";
import SectionCarousel from "../../../../pages-sections/Components-Sections/SectionCarousel";
import SectionAboutUs from "../../../../pages-sections/Components-Sections/SectionAboutUs";
import Footer from "../../../../components/Footer/Footer";
import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../../../../components/Card/Card";
import styles from "assets/jss/nextjs-material-kit/pages/components.js";
import TeamSection from "../../../../pages-sections/LandingPage-Sections/TeamSection";
import RepairPhone from "../../../../components/Repair/RepairPhone";
import { useRouter } from 'next/router'

const useStyles = makeStyles(styles);

export default function Index(props) {
    let phoneData;
    let title, subtitle, phoneTitle, products;
    const router = useRouter()
    const { brand, data } = router.query
    if (brand === 'apple') {
        console.log("AAAAPPLE")
        phoneData = repairPhoneApple.attributes;
        console.log("phoneData : ", phoneData)
        title = phoneData.title;
        subtitle = phoneData.subtitle
        phoneTitle = phoneData.phoneTitle
        products = phoneData.products
    }else if (brand === 'sony'){
        console.log("AAAAPPLE")
        phoneData = repairPhoneSony.attributes;
        console.log("phoneData : ", phoneData)
        title = phoneData.title;
        subtitle = phoneData.subtitle
        phoneTitle = phoneData.phoneTitle
        products = phoneData.products
    }
    const classes = useStyles();
    const { ...rest } = props;
    // const { title, subtitle, phoneTitle, products } = phoneData;
    return (
        <div>
            <Header
                brand="Tech Tag"
                rightLinks={<HeaderLinks />}
                fixed
                color="white"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax image={require(`../../../../assets/img/bg.jpg`)}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title}>{title}</h1>
                                <h3 className={classes.subtitle}>
                                    {subtitle}
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <RepairPhone phoneTitle={phoneTitle} products={products} />
                {/*<SectionAboutUs title={attributes.aboutUsTitle} description={attributes.aboutUsDescription} />*/}
            </div>
            <Footer />
        </div>
    );
}
