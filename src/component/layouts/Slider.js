import React from "react";
import Box from "@material-ui/core/Box";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../../assets/img.png';
import image2 from '../../assets/img2.png';
import image3 from '../../assets/img3.png';
import '../../style/Slider.css';

const Slider = () => {
    return (
        <Box>
            <AliceCarousel autoPlay autoPlayInterval="3000" buttonsDisabled={true}>
                <img src={image1} alt="Logo" className="imgg" />
                <img src={image2} alt="Logo" className="imgg" />
                <img src={image3} alt="Logo" className="imgg" />
            </AliceCarousel>
        </Box >
    );
};

export default Slider;
