import React, {useContext} from "react";
import WrapperContext from "../Context/WrapperContext";


const Navbar = (props) => {

    const nameContext = useContext(WrapperContext)
    const navbarStyle = {
        backgroundColor: "violet",
        height: "200px",
        display: "flex",
        justifyContent: "end",
        color: "white"
    }

    return(
        <div>
            <nav style="navbarStyle"><h1>Hi {nameContext}</h1></nav>
        </div>
    )
}

export default Navbar;