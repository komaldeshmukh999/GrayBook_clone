import logo from "../assets/logo.svg"

import nav_log from '../assets/nav_log.svg'

export default function Nav() {
    return (
        <nav className="nav-bar">
            <div className="left">
                <img src={logo} alt="logo" />

                <div className="search-box">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" fill="white" viewBox="0 0 256 256"><path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path></svg>
                        <span>Search</span>
                    </div>
                    <input type="text" placeholder="Search here.." />
                </div>

            </div>
            <div className="right">
                <div className="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 0 256 256"><path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path></svg>
                </div>
                <button>Become a creator</button>
                <a>Sign up/Login</a>
                <img src={nav_log} alt="nav_log" />
            </div>

        </nav>

    )
}
