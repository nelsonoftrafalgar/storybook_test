import {CSSProperties, FC} from 'react'

import classNames from 'classnames'

export interface ITileWrapperProps {
    gradient?: 'light' | 'dark'
    width: string
}

const TileWrapper: FC<ITileWrapperProps> = ({gradient, children, width}) => {
    return (
        <div style={{'--width': `${width}px`} as CSSProperties} className={classNames('tile-wrapper', gradient)}>
            {children}
        </div>
    )
}

export default TileWrapper
