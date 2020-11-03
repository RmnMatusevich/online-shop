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

const RepairBrand = ({ brandTitle, brands }) => {
    return (
        <>
            <Typography variant="h3">{brandTitle}</Typography>
            <div style={{ display: "flex", gap: 10, flexDirection: "row", alignItems: "center", flexWrap: "wrap", width: '80%', margin: '0 auto', justifyContent: 'center' }}>
                {brands.map((brand, index) => {
                    return (
                        <Link href={brand.brandUrl} key={index}>
                            <StyledCard>
                                <img style={{ width: 150, height: 150, borderRadius: 30 }} src={require(`../../public${brand.brandImage}`)} />
                                <Typography variant="h6" style={{ letterSpacing: 1.2 }}>{brand.brandName}</Typography>
                            </StyledCard>
                        </Link>
                    );
                })}
            </div>
            {/*<div style={{display: "flex", gap: 10, flexDirection: "row", alignItems: "center", flexWrap: "wrap", width: '80%', margin: '0 auto', justifyContent: 'center'}}>*/}
            {/*    <Link href="/components">*/}
            {/*    <Card style={{display: "flex", gap: 30, width: 300, height: 300, justifyContent: "center", alignItems: "center", flexDirection: "column"}}>*/}
            {/*        <img style={{width: 200, height: 200, borderRadius: 40}} src={require('../../public/img/header_photo.jpg')} />*/}
            {/*        <Typography variant="h6">Apple</Typography>*/}
            {/*    </Card>*/}
            {/*    </Link>*/}
            {/*    <Card style={{display: "flex", gap: 30, width: 300, height: 300, justifyContent: "center", alignItems: "center", flexDirection: "column"}}>*/}
            {/*        <img style={{width: 200, height: 200, borderRadius: 40}} src={require('../../public/img/header_photo.jpg')} />*/}
            {/*        <Typography variant="h6">Apple</Typography>*/}
            {/*    </Card>*/}
            {/*    <Card style={{display: "flex", gap: 30, width: 300, height: 300, justifyContent: "center", alignItems: "center", flexDirection: "column"}}>*/}
            {/*        <img style={{width: 200, height: 200, borderRadius: 40}} src={require('../../public/img/header_photo.jpg')} />*/}
            {/*        <Typography variant="h6">Apple</Typography>*/}
            {/*    </Card>*/}
            {/*    <Card style={{display: "flex", gap: 30, width: 300, height: 300, justifyContent: "center", alignItems: "center", flexDirection: "column"}}>*/}
            {/*        <img style={{width: 200, height: 200, borderRadius: 40}} src={require('../../public/img/header_photo.jpg')} />*/}
            {/*        <Typography variant="h6">Apple</Typography>*/}
            {/*    </Card>*/}
            {/*    <Card style={{display: "flex", gap: 30, width: 300, height: 300, justifyContent: "center", alignItems: "center", flexDirection: "column"}}>*/}
            {/*        <img style={{width: 200, height: 200, borderRadius: 40}} src={require('../../public/img/header_photo.jpg')} />*/}
            {/*        <Typography variant="h6">Apple</Typography>*/}
            {/*    </Card>*/}
            {/*    <Card style={{display: "flex", gap: 30, width: 300, height: 300, justifyContent: "center", alignItems: "center", flexDirection: "column"}}>*/}
            {/*        <img style={{width: 200, height: 200, borderRadius: 40}} src={require('../../public/img/header_photo.jpg')} />*/}
            {/*        <Typography variant="h6">Apple</Typography>*/}
            {/*    </Card>*/}
            {/*</div>*/}
        </>)
};

export default RepairBrand;
