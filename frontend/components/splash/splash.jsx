import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import logo from '../../../app/assets/images/cloud.png';
class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="splash">
                <div className="splash-upper-orange">
                <div className="splash-banner">
                    <nav className="splash-navbar">
                        <div className="splash-banner-right">
                            <button className="splash-login" 
                                onClick={() => this.props.openModal("login")}>
                                Sign In
                            </button>
                            <br/>
                            <button className="splash-signup" 
                                onClick={() => this.props.openModal("signup")}>
                                Create account
                            </button>
                        </div>
                        <div className="splash-banner-left">
                            {/* <img className="cloud" src={window.logo}/> */}
                            {/* <FontAwesomeIcon className="cloud" icon={['fab', 'soundcloud']} /> */}
                        </div>
                    </nav>
                    <div className="splash-banner-center">
                        <h2 className="splash-banner-header">Discover more with SoundCheck Go+</h2>
                        <p className="splash-banner-header-p">SoundCloud Go+ 
                        lets you listen offline, ad-free, with over 150 million 
                        tracks — and growing.</p>
                        <div className="creator-free">
                            <a className="creator" href="https://github.com/ChristopherJose707">
                                Meet the creator!</a>
                            <button className="try-free" 
                                onClick={() => this.props.openModal("signup")}>
                                    Try it for free
                            </button>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        );
    }
};

export default Splash;