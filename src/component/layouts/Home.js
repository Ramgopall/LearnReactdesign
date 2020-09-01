import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';

import Nav from "../nav/Nav";
import Slider from './Slider';
import image1 from '../../assets/img.png';
import '../../style/Home.css';

const Home = () => {
    const [search, setSearch] = React.useState("");

    return (
        <Box className="root">
            <Box className="container">
                <Box className="text">
                    <h1>Decorative<br />
                    & garden<br />
                    varieties</h1>
                    <h3>Order plants in your pajamaas<br />
                    and get them delivered to your<br />
                    doorstep!</h3>
                    <Box className="social_logo">
                        <FacebookIcon className="social_fb" />
                        <InstagramIcon className="social_is" />
                        <TwitterIcon className="social_tw" />
                        <YouTubeIcon className="social_yt" />
                    </Box>

                </Box>
            </Box>
            <Nav />
            <Box className="searchBox">
                <TextField
                    className="search"
                    label=""
                    placeholder="Search here..."
                    type="email"
                    value={search}
                    onChange={(e) => setSearch(e.currentTarget.value)}
                />

                <SearchIcon />
            </Box>
            <Slider />
        </Box >
    );
};

export default Home;
