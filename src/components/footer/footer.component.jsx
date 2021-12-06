import React, { useState } from "react";

const Footer = () => {
    
    const [fecha, setFecha] = useState(new Date);

    return(
        <footer>
            <p>&copy; { fecha.getFullYear() } - Ana Santibañez</p>
        </footer>
    )
}

export default Footer;