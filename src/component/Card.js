import React from "react";
import "../style/Card.css";
import Box from "@material-ui/core/Box";

const Card = ({ img }) => {
    return (
        <Box className="card">
            <img src={img} alt="" />
            <Box className="cardInfo">
                <h3>Lorem Ipsum</h3>
                <h4>Marble Flower Pot offeredcomes in beautiful...</h4>
            </Box>
        </Box>
    );
};

export default Card;
