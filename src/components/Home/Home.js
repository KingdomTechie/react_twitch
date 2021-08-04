import ChannelList from "../ChannelList/ChannelList"

// Props is coming from App.js
function Home (props) {

    const { username, avatar} = props.user

    return (
        <div className="Home">
            <h1>Welcome, {username}</h1>
            <ChannelList header="Live Channels we think you'll like"/>
            <ChannelList header="Recommended Control Channels"/>
            <ChannelList header="Recommended Star Wars Channels"/>
        </div>
    )
}

export default Home;