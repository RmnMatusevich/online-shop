import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/completedStyle.js";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";

const useStyles = makeStyles(styles);

const SectionAboutUs = () => {
    const classes = useStyles();

    return (<div className={classes.sections}>
        <div className={classes.container}>
            <div className={classes.title}>
                <h2>О нас</h2>
            </div>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h4>При поломке или сбое устройства, зачастую необходима быстрая, квалифицированная помощь по ремонту цифровой техники. Мастера сервиса Tech Tag быстро справятся с поломкой практически любой сложности. Чётко соблюдаются все рекомендации по проведению ремонтных работ.</h4>
                </GridItem>
            </GridContainer>
        </div>
    </div>)
}

export default SectionAboutUs;
