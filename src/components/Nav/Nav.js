// First things to do when creating a Component 
// 1. Create the function of the Component
// 2. Export the Component 


function Nav() {
    return (
        <header>
            <nav>
                <span className="icon">Twitch</span>
            </nav>
            <nav>
                <span className="user">Keith</span>
            </nav>
        </header>
    )
}

export default Nav;