import React from "react";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import '../../style/Nav.css';
const Nav = ({ onSelect, refProp, isTop }) => {
    const [navSelected, setNavSelection] = React.useState(0);

    const handleClick = (position) => {
        setNavSelection(position)
        onSelect(position)

    }

    React.useEffect(() => {
        if (isTop) {
            setNavSelection(0)
        }
    }, [isTop, setNavSelection]);

    return (
        <Box className="nav-root" ref={refProp}>
            <Button className={navSelected === 0 ? "titlePink" : "titleGray"} onClick={() => { handleClick(0) }}>Home</Button>
            <Button className={navSelected === 1 ? "titlePink" : "titleGray"} onClick={() => { handleClick(1) }}>Gallery</Button>
            <Button className={navSelected === 2 ? "titlePink" : "titleGray"} onClick={() => { handleClick(2) }}>About Us</Button>
            <Button className={navSelected === 3 ? "titlePink" : "titleGray"} onClick={() => { handleClick(3) }}>What We Do</Button>
        </Box >
    );
};

export default Nav;
