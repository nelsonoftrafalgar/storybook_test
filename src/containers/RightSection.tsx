import Colon from '../components/Colon'
import Equalizer from './Equalizer'
import Icon from '../components/Icon'
import Input from '../components/Input'
import LightIndicator from '../components/LightIndicator'
import SoundSystem from './SoundSystem'
import Switch from '../components/Switch'
import Text from '../components/Text'
import TileWrapper from '../components/TileWrapper'
import airPods from '../assets/icons/air_pods.svg'
import marshall from '../assets/icons/marshall.svg'
import phone from '../assets/icons/phone.svg'
import sliders from '../assets/icons/sliders.svg'

const equalizerData = [
	{ max: 15, text: '60 Hz' },
	{ max: 12, text: '120 Hz' },
	{ max: 18, text: '400 Hz' },
	{ max: 30, text: '2 Kz' },
	{ max: 20, text: '4 Kz' },
	{ max: 16, text: '8 Kz' },
	{ max: 17, text: '16 Kz' },
]

const RightSection = () => {
	return (
		<section className='right-section'>
			<div className='d-flex justify-content-start align-items-center'>
				<LightIndicator text='Sounds' />
				<Text
					text='Bedroom'
					color='light'
					size='m'
					weight='bold'
					classname='m-left-20 m-right-30'
				/>
				<Colon double />
			</div>
			<div className='d-flex justify-content-start align-items-center m-top-20'>
				<Icon src={phone} className='m-left-30 m-right-15' />
				<Colon double />
				<Text
					text='Playlist'
					color='turquoise'
					size='m'
					weight='bold'
					classname='m-left-20 m-right-30'
				/>
				<Text text='FM' color='light' size='m' weight='bold' classname='m-right-30' />
				<Text text='News' color='light' size='m' weight='bold' />
			</div>
			<div className='d-flex justify-content-start align-items-center m-top-20 m-bottom-40'>
				<div className='d-flex flex-column align-items-center m-right-25'>
					<Icon src={marshall} width='100' />
					<Text text='Marshall' color='light' size='s' weight='bold' classname='m-top-10' />
					<Text text='Sound System' color='dark' size='s' weight='bold' />
				</div>
				<Switch left handleSwitch={() => null} />
				<div className='d-flex flex-column align-items-center m-left-25'>
					<Icon src={airPods} width='70' />
					<Text text='Air Pods' color='light' size='s' weight='bold' classname='m-top-10' />
					<Text text='Headphones' color='dark' size='s' weight='bold' />
				</div>
			</div>
			<SoundSystem />
			<div className='m-top-40 d-flex'>
				<Equalizer equalizerData={equalizerData} />
				<TileWrapper classname='tile-sliders m-left-20'>
					<Icon src={sliders} width='35' />
				</TileWrapper>
			</div>
			<div className='m-top-40 m-bottom-40'>
				<TileWrapper gradient='dark'>
					<div className='m-top-20 m-bottom-20'>
						<Input />
					</div>
				</TileWrapper>
			</div>
		</section>
	)
}

export default RightSection
