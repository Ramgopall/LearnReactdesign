import React from "react";
import Box from "@material-ui/core/Box";

import Card from '../Card'
import "../../style/Gallery.css";


const Gallery = ({ refProp }) => {
    return (
        <Box className="gallery-root">
            <h1 className="title" ref={refProp}>Gallery</h1>
            <Box className="cards">
                <Card img="https://cdn.shopify.com/s/files/1/0011/7558/4828/products/16cm-Baby-Groot-Flowerpot-Action-Figures-Cute-Guardians-Of-The-Galaxy-PVC-Doll-Creative-Model-Toy.jpg_640x640_19499c64-5f64-4998-bf54-f87c390d4f4e.jpg?v=1571611236" />
                <Card img="https://cdn.connox.com/m/100035/262261/media/iittala/Nappula/Iittala-Nappula-Blumentopf-Gruppe-Situation-2.jpg" />
                <Card img="https://webcomicms.net/sites/default/files/clipart/171616/images-flower-pots-171616-8290854.jpg" />
                <Card img="https://hay.dk/img_20190510125441/globalassets/inriver/resources/plant-pot-with-saucer_1220x1220_brandmastermodel.jpg" />
            </Box>
            <Box className="cards">
                <Card img="https://unicun.com/wp-content/uploads/2020/03/Baby-Groot-Flower-Pot-2.jpg" />
                <Card img="https://ae01.alicdn.com/kf/HLB10HcjXyzxK1RkSnaVq6xn9VXav/Garden-Flower-Planter-Pot-Baby-Groot-Flowerpot-Flower-Pot-Planter-Action-Figures-Tree-Man-Groot-Figure.jpg" />
                <Card img="https://ae01.alicdn.com/kf/Hae9f64781d004f95ac37c6555eb93ba5l/Strongwell-Flower-Pot-Baby-Groot-Big-Flower-Pot-Cute-Toy-Pen-Pot-Holder-PVC-Hero-Model.jpg" />
                <Card img="https://lcpshop.net/wp-content/uploads/2019/06/269074-wgavy5.jpg" />
            </Box>
            <Box className="cards">
                <Card img="https://www.audenza.com/asset/image/image_inventory/xl/3110.jpg" />
                <Card img="https://www.therusticmerchant.co.uk/wp-content/uploads/Photo-13-03-2018-15-36-28.jpg" />
                <Card img="https://pyxis.nymag.com/v1/imgs/133/739/e8560d4b134f1798120a4a9c8a4ec1dfec-3-pack-ceramic.2x.w600.jpg" />
                <Card img="https://cdn.shopify.com/s/files/1/2779/3310/products/Gardena_Pot_Set_2000x.jpg?v=1575455652" />
            </Box>
        </Box>
    );
};

export default Gallery;
