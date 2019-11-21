import React, { Component } from 'react';

class NavBlock extends Component {
    state = { menuToggle: true}

    componentDidMount(){
        document.addEventListener("mousedown", this.offClickCheck, false);
    }

    offClickCheck = (e) => {
        if( !this.node.contains(e.target) && this.state.menuToggle === false ){
            this.navToggle();
        }
    }

    navToggle = () => {
        let navMenu = document.getElementsByClassName("navMenu")[0];

        this.state.menuToggle ? navMenu.classList.add("change") : navMenu.classList.remove("change")
        this.setState( {menuToggle: !this.state.menuToggle} );
    }

    render(){
        let linkCreate = this.props.links ? this.mapLinks() : '';
 
        return (
            <nav className="navBar" ref={ node => this.node = node}>
                <div className="navMenu">
                    <div className="menuButton" onClick={this.navToggle}>
                        <div className="menuBar one"></div>
                        <div className="menuBar two"></div>
                        <div className="menuBar three"></div>
                        <p className="menuText">{this.state.menuToggle ? "Menu" : "Exit"}</p>
                    </div>
                    <ul className="linkBar">
                        <li>
                            <a href="#intro">Intro</a>
                        </li>
                        <li>
                            <a href="#details">Game Description</a>
                        </li>
                        <li>
                            <a href="#roosts">More Information</a>
                        </li>
                    </ul>
                </div>
                {/* <h3>Kyle Van Bergen</h3> */}
            </nav>
            
        )
    }
}

export default NavBlock