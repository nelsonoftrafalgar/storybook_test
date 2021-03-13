import { FC } from 'react'

export interface IPercentIndicatorProps {
    percent: number | string
}

const PercentIndicator: FC<IPercentIndicatorProps> = ({percent}) => {
    return (
        <div className='percent-indicator-wrapper'>
            <span className='percent-indicator-text'>{percent}%</span>
        </div>
    )
}

export default PercentIndicator
