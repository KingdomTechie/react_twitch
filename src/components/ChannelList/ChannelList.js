// The ChanneList component will contain the list of Channel Previews within the componnent


import ChannelPreview from "../ChannelPreview/ChannelPreview"

function ChannelList (props) {

    const channels =[
        {
        _id: "abcdedfj123456",
        title: "Playing Games with Friends",
        avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/1e5469da-206e-4a7e-8384-1fed487a9454-profile_image-50x50.png",
        username: "Asmongold",
        category: "Final Fantasy XIV Online",
        tag: ["English"],
        previewChannel: "https://static-cdn.jtvnw.net/previews-ttv/live_user_sixy66-440x248.jpg",
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
            <h1>{props.header}</h1>

            {generateChannels(channels)}
        </div>
    )
}

export default ChannelList;