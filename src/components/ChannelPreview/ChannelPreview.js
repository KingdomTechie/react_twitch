
function Tag (props) {
    return(
        <span className="tag">{props.tag}</span>
    )
}

function ChannelPreview(props) {

    const { title, previewChannel, viewerCount, avatar, username, category, tag } = props.channel

    const generateTags = tags => {
        return tags.map(function(tag, index){
            return <Tag key={index} tag={tag}/>
        })
    }

    return (
        <div className="Channel-Preview">
            <h4>{title}</h4>
            <img src={previewChannel}/>
            <span className="viewer_count">{viewerCount}</span>
            <h4>{title}</h4>
            <img src={avatar} />
            <h5>{username}</h5>
            <h5>{category}</h5>
            <div className="tags">
                {generateTags(tag)}
            </div>
        </div>
    )

}

export default ChannelPreview