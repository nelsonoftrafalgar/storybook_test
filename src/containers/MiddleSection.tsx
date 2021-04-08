import Colon from '../components/Colon'
import Icon from '../components/Icon'
import Text from '../components/Text'
import TrackPanel from './TrackPanel'
import cloud from '../assets/icons/cloud.svg'

const MiddleSection = () => {
	return (
		<section className='d-flex flex-column align-items-center middle-section w-100'>
			<TrackPanel />
			<div className='w-100 d-flex justify-content-center align-items-center m-top-40'>
				<Icon src={cloud} />
				<div className='d-flex flex-column m-left-25 m-right-25'>
					<Text text='Tris Manager' color='turquoise' size='s' weight='bold' />
					<Text text='I will be in five minutes' color='dark' size='m' weight='bold' />
				</div>
				<Colon double />
			</div>
		</section>
	)
}

export default MiddleSection
