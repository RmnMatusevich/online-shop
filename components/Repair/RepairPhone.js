import React from "react";
import { Card, Typography, withStyles } from "@material-ui/core";
import Link from "next/link";

const StyledCard = withStyles({
    root: {
        display: "flex",
        gap: 12,
        width: 260,
        height: 260,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        boxShadow: '0 12px 20px -10px gray',
        transition: '0.18s ease',
        "&:hover, &:focus": {
            transform: 'scale(1.03)',
            boxShadow: '0 12px 20px -10px gray',
        }
    }
})(Card);

const RepairPhone = ({ phoneTitle, products }) => {
    return (
        <>
            <Typography variant="h3">{phoneTitle}</Typography>
            <div style={{ display: "flex", gap: 10, flexDirection: "row", alignItems: "center", flexWrap: "wrap", width: '80%', margin: '0 auto', justifyContent: 'center' }}>
                {products.map((i, index) => {
                    return (
                        <Link as={`/repair/phone/apple/${i.productUrl}`} href={`/repair/phone/[brand]/[product]?data=sdfsdfsdsdfwerfergfergtrwqeyshgwre`} key={index}>
                            <StyledCard>
                                <img style={{ width: 150, height: 150, borderRadius: 30 }} src={require(`../../public${i.productImage}`)} />
                                <Typography variant="h6" style={{ letterSpacing: 1.2 }}>{i.productName}</Typography>
                            </StyledCard>
                        </Link>
                    );
                })}
            </div>
        </>)
};

export default RepairPhone;
