import Button from '../components/Button'
import ButtonToggle from '../components/ButtonToggle'
import Colon from '../components/Colon'
import Icon from '../components/Icon'
import ProgressBar from '../components/ProgressBar'
import Text from '../components/Text'
import TileWrapper from '../components/TileWrapper'
import TrackIndicator from '../components/TrackIndicator'
import VolumeSettings from './VolumeSettings'
import cloud from '../assets/icons/cloud.svg'
import minus from '../assets/icons/minus.svg'
import pause from '../assets/icons/pause.svg'
import play from '../assets/icons/play.svg'
import plus from '../assets/icons/plus.svg'

const MiddleSection = () => {
	return (
		<section className='d-flex flex-column align-items-center middle-section w-100'>
			<TileWrapper gradient='light'>
				<div className='middle-section-text-wrapper w-100 d-flex flex-column align-items-center'>
					<Text
						text={'Playlist "Relaxation"'}
						color='dark'
						size='s'
						weight='bold'
						classname='m-bottom-20'
					/>
					<Text text='Afterglow' color='light' size='l' weight='bold' classname='m-bottom-5' />
					<Text text='Ambient Mix' color='light' size='s' weight='bold' />
					<div className='d-flex align-items-center justify-content-end w-100 m-top-60'>
						<VolumeSettings />
					</div>
					<div className='w-100 d-flex align-items-center justify-content-center m-top-60'>
						<Text text='07:10' color='dark' size='s' weight='bold' classname='m-right-20' />
						<ProgressBar maxProgress={100} currentProgress={50} />
						<Text text='02:35' color='dark' size='s' weight='bold' classname='m-left-20' />
					</div>
					<div className='w-100 d-flex align-items-center justify-content-center m-top-20'>
						<Button size='small' icon={minus} classname='m-right-15' />
						<TrackIndicator track={1} />
						<Button size='small' icon={plus} classname='m-left-15' />
					</div>
					<Text text='Repeat' color='dark' size='s' weight='bold' classname='m-top-15' />
					<div className='w-100 d-flex align-items-center justify-content-center m-top-20 m-bottom-60'>
						<Button size='large' icon={minus} classname='m-right-35' />
						<ButtonToggle icon1={play} icon2={pause} />
						<Button size='large' icon={plus} classname='m-left-35' />
					</div>
				</div>
			</TileWrapper>
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
