import { CSSProperties, FC } from 'react'

import classNames from 'classnames'

export interface IIconProps {
	src: string
	width?: string
	className?: string
}

const Icon: FC<IIconProps> = ({ src, width = '20', className }) => {
	return (
		<img
			className={classNames('icon', className)}
			style={{ '--width': `${width}px` } as CSSProperties}
			src={src}
			alt=''
		/>
	)
}

export default Icon
