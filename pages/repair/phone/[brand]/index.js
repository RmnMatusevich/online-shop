import { attributes } from "../../../../content/repair-phone-apple.md";
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
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../../../../components/Card/Card";
import styles from "assets/jss/nextjs-material-kit/pages/components.js";
import TeamSection from "../../../../pages-sections/LandingPage-Sections/TeamSection";
import RepairPhone from "../../../../components/Repair/RepairPhone";
import { useRouter } from 'next/router'

const useStyles = makeStyles(styles);

export default function Index(props) {

    const router = useRouter()
    const { brand, data } = router.query
    console.log(brand, data);
    if (brand === 'apple') {

    }
    const classes = useStyles();
    const { ...rest } = props;
    const { title, subtitle, phoneAppleTitle, products } = attributes;
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
                <RepairPhone phoneAppleTitle={phoneAppleTitle} products={products} />
                <SectionAboutUs title={attributes.aboutUsTitle} description={attributes.aboutUsDescription} />
            </div>
            <Footer />
        </div>
    );
}