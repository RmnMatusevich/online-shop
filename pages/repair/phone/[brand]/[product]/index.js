import React, { useState, useEffect } from 'react';
import { attributes } from "../../../../../content/repair-phone-apple.md";
import HeaderLinks from "../../../../../components/Header/HeaderLinks";
import Header from "../../../../../components/Header/Header";
import Footer from "../../../../../components/Footer/Footer";
import { makeStyles } from "@material-ui/core/styles";
import Parallax from "../../../../../components/Parallax/Parallax";
import GridContainer from "../../../../../components/Grid/GridContainer";
import GridItem from "../../../../../components/Grid/GridItem";
import styles from "assets/jss/nextjs-material-kit/pages/components.js";
import classNames from "classnames";
import { useRouter } from 'next/router'

const useStyles = makeStyles(styles);

const Index = () => {
    const { title, subtitle, phoneAppleTitle, products } = attributes;
    const classes = useStyles();
    const router = useRouter();
    const { brand, product, data } = router.query;
    console.log("DSADASASD ", brand, product, data);
    console.log(products);

    // console.log(query)
    // useEffect(() => {
    //     setElem(product.filter(i => i.appleProductUrl === query.id)[0]);
    // }, [query])
    // const elem = product.filter(i => i.appleProductUrl === query.id)[0];
    // console.log(elem);

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
            <Parallax image={require('../../../../../assets/img/bg.jpg')}>
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
                    {products.map((i, index) => {
                        return (
                            <div key={index}>
                                {i.productDescription}
                                <img src={i.productImage} />
                                {i.productName}
                                {i.productUrl}
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Index;
