// PROPS
import { SingleYoutubeSuggestionProps, YoutubeSuggestionProps } from "Props/Components/YoutubeModalProps"
// TOOLS
import { TitleTrimmer } from "Tools/StringTools"

const SingleYoutubeSuggestion = (props: SingleYoutubeSuggestionProps) => (
    <div className="site-flex suggestion-row w-90 m-auto">
        <div className="youtube-suggestion-title cursor-pointer w-50 m-auto">
            {TitleTrimmer(props.video_title, 45)}
        </div>
        <div className="youtube-thumbnail w-50 cursor-pointer" onClick={props.click}>
            <img src={props.video_thumbnail} 
                alt={props.video_title} 
                className="site-responsive-image"
            />
        </div>
    </div>
)

const YoutubeSuggestions = (props: YoutubeSuggestionProps) => {

    const displaySuggestions = props.data.map(obj => (
        // Sets the object as
        <SingleYoutubeSuggestion
            key={obj.video_title}
            video_title={obj.video_title}
            video_thumbnail={obj.video_thumbnail}
            // Sets the object which is clicked as the current displayedVideo on level above
            click={() => props.setFunction(obj)}
        />
    ))

    return (
        <div className="site-col-6 youtube-suggestions">
            <div className="suggestion-list-title w-90 m-auto">
                Recommended Video
            </div>
            {displaySuggestions}
        </div>
    )
}

export default YoutubeSuggestions