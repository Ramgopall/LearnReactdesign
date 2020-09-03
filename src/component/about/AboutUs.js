import React from 'react'
import Box from "@material-ui/core/Box";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import '../../style/AboutUs.css'
const AboutUs = ({ refProp }) => {
    return (
        <Box className="about-root" ref={refProp}>
            <Box className="about_social_logo">
                <h2>About Us</h2>
                <FacebookIcon className="about_social_fb" />
                <InstagramIcon className="about_social_is" />
                <TwitterIcon className="about_social_tw" />
                <YouTubeIcon className="about_social_yt" />
            </Box>
            <Box className="about_info">
                <h2>The Secret to<br />
                 Long lasting <br />
                 flowers</h2>

                <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br />
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure<br />
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br />
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit <br /><br /><br />
                    anim id est laborum


                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br />
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure<br />
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br />
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit <br />
                    anim id est laborum
                </h4>
            </Box>
        </Box>
    )
}

export default AboutUs
