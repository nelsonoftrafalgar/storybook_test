import { FC } from 'react'
import SpeakerButton from './SpeakerButton'
import Text from '../components/Text'
import classNames from 'classnames'

export interface ISpeakerProps {
	text?: string
	size: 'small' | 'large' | 'long'
	classname?: string
}

const Speaker: FC<ISpeakerProps> = ({ text = '', size, classname }) => {
	if (size === 'long') {
		return (
			<div className={classNames('speaker-wrapper', size, classname)}>
				<div className='circle-small' />
				<div className='circle-large' />
				<SpeakerButton size={size} />
			</div>
		)
	}

	return (
		<div className={classNames('speaker-wrapper', size, classname)}>
			<Text text={text} color='dark' size='xs' weight='regular' />
			<SpeakerButton size={size} />
		</div>
	)
}

export default Speaker
