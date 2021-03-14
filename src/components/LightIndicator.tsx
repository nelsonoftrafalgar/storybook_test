import { FC } from 'react'
import classNames from 'classnames'

export interface ILightIndicatorProps {
    text?: string
    on: boolean
    icon?: string
}

const LightIndicator: FC<ILightIndicatorProps> = ({text, on, icon}) => {
    return (
        <span className={classNames('light-indicator', {on, icon})}>
            {icon ? <img className='light-indicator-icon' src={icon} alt=""/> : text}
        </span>
    )
}

export default LightIndicator
