import React, { Component } from 'react';

class roosts extends Component {

    render(){

        return(
            <div id="roosts" className={` info-blade`}>
                <h1>Important Information </h1>
                <ul>
                    <li>
                        <p>Venmo @danheyward <strong>$25.00</strong> by end-of-day Thursday, November 21 if you plan on participating. Please include in the message some homage to this event as he is not that bright and needs all the help he can get.</p>
                    </li>
                    <li>
                        <p>Meet at <a href="https://www.google.com/maps/place/Old+Stove+Brewing/@47.609879,-122.3447005,18z/data=!4m5!3m4!1s0x0:0xceb7400f730039c0!8m2!3d47.6093799!4d-122.3430456">Old Stove Brewing</a> at 4pm, Saturday, November 23.</p>
                    </li>
                    <li>
                        <p>Playing Area: Virginia Ave to Cedar Ave, 1st and 2nd Ave.</p>
                    </li>
                    <li>
                        <p>Approved Bar List: <a href="https://goo.gl/maps/7mbeiJVSsVy6tZnj7" target="_blank">Google List</a></p>
                    </li>
                </ul>
            </div>
        )
    }

}
export default roosts;