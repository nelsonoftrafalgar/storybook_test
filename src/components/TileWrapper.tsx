import { FC } from 'react'
import classNames from 'classnames'

export interface ITileWrapperProps {
	gradient?: 'light' | 'dark'
}

const TileWrapper: FC<ITileWrapperProps> = ({ gradient, children }) => {
	return <div className={classNames('tile-wrapper', gradient)}>{children}</div>
}

export default TileWrapper
