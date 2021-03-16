import { FC } from 'react'

export interface ITrackIndicatorProps {
    track: number | string
}

const TrackIndicator: FC<ITrackIndicatorProps> = ({track}) => {
    return (
        <div className='track-indicator-wrapper'>
            <span className='track-indicator-text'>{track}</span>
        </div>
    )
}

export default TrackIndicator
