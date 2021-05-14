import React from "react"

const newDate = new Date();
const day = newDate.getFullYear();

function Footer(){
    return(
        <footer>
        <p>component @ {day}</p>
        </footer>
    )
}

export default Footer;