import React from "react";
import {Card, Typography} from "@material-ui/core";
import Link from "next/link";

const RepairBrand = ({brandTitle, brands}) => {
    return (
        <>
            <Typography variant="h3">{brandTitle}</Typography>
            <div style={{display: "flex", gap: 10, flexDirection: "row", alignItems: "center", flexWrap: "wrap", width: '80%', margin: '0 auto', justifyContent: 'center'}}>
                {brands.map((brand, index) => {
                    return (
                        <Link href={brand.brandUrl}>
                            <Card style={{display: "flex", gap: 30, width: 300, height: 300, justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                                <img style={{width: 200, height: 200, borderRadius: 40}} src={require(`../../public${brand.brandImage}`)} />
                                <Typography variant="h6">{brand.brandName}</Typography>
                            </Card>
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
