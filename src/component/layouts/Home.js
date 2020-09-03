import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';

import Nav from "../nav/Nav";
import Slider from '../slider/Slider';
import Gallery from '../gallery/Gallery';
import AboutUs from '../about/AboutUs';
import '../../style/Home.css';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const Home = () => {
    const [search, setSearch] = React.useState("");
    const [isTopp, setTop] = React.useState(false);
    const homeRef = React.useRef(null)
    const galleryRef = React.useRef(null)
    const aboutRef = React.useRef(null)

    const executeScroll = (data) => scrollToRef(data)

    React.useEffect(() => {
        window.onscroll = function () {
            if (window.pageYOffset === 0) {
                setTop(true)
            }
            else {
                setTop(false)
            }
        };
    }, [setTop])

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
            <Nav
                isTop={isTopp}
                refProp={homeRef}
                onSelect={(data) => {
                    if (data === 0) {
                        executeScroll(homeRef)
                    }
                    else if (data === 1) {
                        executeScroll(galleryRef)
                    }
                    else if (data === 2) {
                        executeScroll(aboutRef)
                    }
                }}
            />
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
            <Gallery refProp={galleryRef} />
            <AboutUs refProp={aboutRef} />

        </Box >
    );
};

export default Home;