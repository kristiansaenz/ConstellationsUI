import React from 'react';

class Dropdownmenu extends React.Component {
    render() {
        return(
            <div id="Dropdown-box">
                <p>Select a month:</p>
                <select>
                    <option>January</option>
                    <option>Febuary</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>
            </div>
        );
    }
}

export default Dropdownmenu;