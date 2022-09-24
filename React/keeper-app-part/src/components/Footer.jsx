import React from "react";



function Footer() {
    const timeNow = new Date().getFullYear();
    return  (
<div>   <footer> <p>Copyright © {timeNow}</p>
</footer>

</div>


    )
}

export default Footer;