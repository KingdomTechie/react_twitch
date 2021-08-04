import ChannelPreview from "../ChannelPreview/ChannelPreview";
import "./ChannelList.css";


// The ChanneList component will contain the list of Channel Previews within the componnent
// The ChannelList component will also be brought into Home.js

// Props is coming from parent container of Home > ChannelList
function ChannelList (props) {

    const { header } = props.header

    // The ChannelList holds the data for it's own list.  The (dummy) data is the channels array
    const channels =[
        {
        _id: "abcdedfj123456",
        title: "Playing Games with Friends",
        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/1e5469da-206e-4a7e-8384-1fed487a9454-profile_image-50x50.png",
        username: "Asmongold",
        category: "Final Fantasy XIV Online",
        tag: ["English"],
        previewChannel: "https://static-cdn.jtvnw.net/previews-ttv/live_user_summit1g-440x248.jpg",
        viewerCount: 46.8,
        },
        {
        _id: "12345678",
        title: "Checkout the new update!",
        avatar: "https://static-cdn.jtvnw.net/ttv-boxart/Star%20Wars%20Battlefront%20II-40x56.jpg",
        username: "RareDrop",
        category: "Dungeons and Dragons",
        tag: ["English","updates"],
        previewChannel: "https://static-cdn.jtvnw.net/previews-ttv/live_user_raredrop-440x248.jpg",
        viewerCount: 46.8,
        },
        {
        _id: "12345678",
        title: "Checkout the new update!",
        avatar: "https://static-cdn.jtvnw.net/ttv-boxart/Star%20Wars%20Battlefront%20II-40x56.jpg",
        username: "RareDrop",
        category: "Dungeons and Dragons",
        tag: ["English","updates"],
        previewChannel: "https://static-cdn.jtvnw.net/previews-ttv/live_user_raredrop-440x248.jpg",
        viewerCount: 46.8,
            }
]
    // This function generates each channel preview within the dataset
    // Make sure to add a 'key' to an element as a unique identifier
    const generateChannels = channels => {
        return channels.map(function (channel) {
            return <ChannelPreview key={channel._id} channel={channel}/>
        })
    }

    return (
        <div className="Channel-List">
            {/* Props is coming from the property in ChannelList in Home.js */}
            <h1>{header}</h1>

            <div className="channels">{generateChannels(channels)}</div>
        </div>
    )
}

export default ChannelList;