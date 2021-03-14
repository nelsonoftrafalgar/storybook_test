import { FC } from 'react'
import classNames from 'classnames'

export interface ISwitchProps {
    left: boolean
    handleSwitch: () => void
}

const Switch: FC<ISwitchProps> = ({left, handleSwitch}) => {
    return (
        <div className='switch-wrapper'>
            <div className='switch-inner'>
                <button onClick={handleSwitch} className={classNames('switch-pin', {left})}/>
            </div>
        </div>
    )
}

export default Switch
