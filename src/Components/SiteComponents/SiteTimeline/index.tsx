// CSS
import './SiteTimeline.css'
// PROPS
import { SiteTimelineProps } from "Props/Components/TimlineProps"
// TOOLS
import { RenderLogic } from 'Tools/FunctionTools'
// COMPONENTS
import TimelineEvent from './components/TimelineEvent'

const SiteTimeline = (props: SiteTimelineProps) => {

    // A Timeline even is returned for each object in data
    const displayEvents = props.data.map(event => (
        <TimelineEvent
            key={event.event}
            event={event.event}
            year={event.year}
            description={event.description}
        />
    ))

    return (
        // Width of component is 100% by default
        <div className={`timeline w-${RenderLogic(props.width, 100)}`}>
            {displayEvents}
        </div>
    )
}

export default SiteTimeline