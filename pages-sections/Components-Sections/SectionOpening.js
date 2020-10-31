import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";

const useStyles = makeStyles(styles);

const SectionOpening = () => {
    const classes = useStyles();

    return (<div className={classes.sections}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h2>Открытие</h2>
                    </div>
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={8}>
                            Наш сервис Tech Tag открывается в Польше! Ремонты любой сложности мобильных телефонов, планшетов, ноутбуков, компьютеров
                        </GridItem>
                    </GridContainer>
                </div>
    </div>)
}

export default SectionOpening;
