import React from 'react';
import orion from '../images/orion2.jpg';

class Constellation extends React.Component {
    render(){
        return(
            <div class="constellation-wrapper">
                <div class="constellation-image">
                    <img src={orion} alt="orion"/>
                </div>
                <div class="constellation-info">
                    <div class="constellation-name">Orion</div>
                    <div class="constellation-translation">The Hunter</div>
                    <p>Lorem Ipsum
                    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                    "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id commodo justo, non maximus orci. Quisque ac ultricies dolor. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus nisi sed consectetur lacinia. Donec fringilla sapien sed erat gravida,
                    vel mollis ante sagittis. Duis tristique augue sed nunc varius rutrum non tempor lorem. Sed ut enim sed diam placerat interdum. Nulla elit erat, 
                    consequat sit amet justo sollicitudin, tempor mollis libero. Nulla lobortis lectus tempus est viverra vestibulum. Sed ac malesuada elit. Fusce tortor 
                    justo, dictum et enim sed, fringilla tempus magna. Fusce mollis condimentum sapien, at venenatis enim tempor eu. 
                    Nulla consequat turpis vitae vehicula bibendum. Morbi leo turpis, convallis vel lorem eu, imperdiet lobortis est. 
                    Praesent tincidunt, est lacinia viverra rhoncus, sem arcu vestibulum urna, eu tempor orci eros non nibh. 
                    Pellentesque placerat massa eget turpis ullamcorper, sit amet elementum nisl aliquam.
                    </p>
                </div>
            </div>
        );
    }
}
export default Constellation;