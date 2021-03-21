import { FC } from 'react'
import Icon from './Icon'
import classNames from 'classnames'

export interface ILightIndicatorProps {
    text?: string
    on: boolean
    icon?: string
}

const LightIndicator: FC<ILightIndicatorProps> = ({text, on, icon}) => {
    return (
        <span className={classNames('light-indicator', {on, icon})}>
            {icon ? <Icon className='light-indicator-icon' src={icon}/> : text}
        </span>
    )
}

export default LightIndicator
