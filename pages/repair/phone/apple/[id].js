import React from 'react';
import { withRouter } from 'next/router';
import { attributes } from "../../../../content/repair-phone-apple.md";
import HeaderLinks from "../../../../components/Header/HeaderLinks";
import Header from "../../../../components/Header/Header";
import Footer from "../../../../components/Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import Parallax from "../../../../components/Parallax/Parallax";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import styles from "assets/jss/nextjs-material-kit/pages/components.js";
import classNames from "classnames";

const useStyles = makeStyles(styles);

const Index = ({ router: { query } }) => {
    const { title, subtitle, phoneAppleTitle, product } = attributes;
    const classes = useStyles();
    const elem = product.filter(i => i.appleProductUrl === query.id)[0];

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
            />
            <Parallax image={require('../../../../assets/img/bg.jpg')}>
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
                <div>
                    {elem.appleProductName}
                    {elem.appleProductDescription}
                    {elem.appleProductYear}
                    {elem.appleProductYear}
                    <img src={require(`../../../../public${elem.appleProductImage}`)}></img>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default withRouter(Index);