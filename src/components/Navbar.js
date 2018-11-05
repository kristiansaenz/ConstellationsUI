import React from 'react';

class Navbar extends React.Component {
    render(){
        return(
            <ul>
                <li><a href="#home">Orion</a></li>
                <li><a href="#news">Caelum</a></li>
                <li><a href="#contact">Capricornus</a></li>
                <li><a href="#about">Lyra</a></li>
            </ul>
        );
    }
}
export default Navbar;