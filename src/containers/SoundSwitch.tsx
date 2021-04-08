import Icon from '../components/Icon'
import Switch from '../components/Switch'
import Text from '../components/Text'
import airPods from '../assets/icons/air_pods.svg'
import marshall from '../assets/icons/marshall.svg'
import { useState } from 'react'

const SoundSwitch = () => {
	const [isLeft, setIsLeft] = useState(false)

	return (
		<div className='d-flex justify-content-start align-items-center m-top-20 m-bottom-40'>
			<div className='d-flex flex-column align-items-center m-right-25'>
				<Icon src={marshall} width='100' />
				<Text text='Marshall' color='light' size='s' weight='bold' classname='m-top-10' />
				<Text text='Sound System' color='dark' size='s' weight='bold' />
			</div>
			<Switch left={isLeft} handleSwitch={() => setIsLeft(!isLeft)} />
			<div className='d-flex flex-column align-items-center m-left-25'>
				<Icon src={airPods} width='70' />
				<Text text='Air Pods' color='light' size='s' weight='bold' classname='m-top-10' />
				<Text text='Headphones' color='dark' size='s' weight='bold' />
			</div>
		</div>
	)
}

export default SoundSwitch
