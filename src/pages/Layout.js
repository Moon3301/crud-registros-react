import React from "react";
import Menu from "./menu";

function Layout(props) {

    return (
        <div>
            <Menu/>
            {props.children}

        </div>

    )

}

export default Layout;