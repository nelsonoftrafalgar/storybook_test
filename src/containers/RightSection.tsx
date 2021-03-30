import Button from '../components/Button'
import Colon from '../components/Colon'
import EQSlider from '../components/EQSlider'
import Icon from '../components/Icon'
import Input from '../components/Input'
import LightIndicator from '../components/LightIndicator'
import PercentIndicator from '../components/PercentIndicator'
import Speaker from '../components/Speaker'
import Switch from '../components/Switch'
import Text from '../components/Text'
import TileWrapper from '../components/TileWrapper'
import airPods from '../assets/icons/air_pods.svg'
import marshall from '../assets/icons/marshall.svg'
import minus from '../assets/icons/minus.svg'
import phone from '../assets/icons/phone.svg'
import plus from '../assets/icons/plus.svg'
import sliders from '../assets/icons/sliders.svg'
import speaker from '../assets/icons/speaker.svg'

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
			<TileWrapper gradient='dark'>
				<div className='d-flex flex-column m-top-10 m-bottom-20'>
					<div className='d-flex flex-column align-items-center m-bottom-20'>
						<Text text='Sound system' color='light' size='m' weight='bold' />
						<Text text='Custom' color='dark' size='s' weight='bold' classname='m-top-10' />
					</div>
					<div className='d-flex'>
						<div className='m-right-10'>
							<div className='d-flex'>
								<div className='d-flex m-right-10'>
									<Speaker text='L top' size='small' classname='m-left-15' />
									<Speaker text='R top' size='small' classname='m-left-15' />
								</div>
								<div className='d-flex flex-column align-items-center m-right-10'>
									<PercentIndicator percent='50' />
									<Icon className='m-top-10' src={speaker} />
								</div>
								<div className='d-flex flex-column'>
									<Button size='small' icon={plus} classname='m-bottom-10' />
									<Button size='small' icon={minus} />
								</div>
							</div>
							<div className='d-flex m-top-10'>
								<div className='d-flex m-right-10'>
									<Speaker text='Speaker' size='large' classname='m-right-10' />
									<Speaker text='Speaker' size='large' />
								</div>
								<div className='d-flex flex-column align-items-center justify-content-end m-right-10'>
									<PercentIndicator percent='50' />
									<Icon className='m-top-10' src={speaker} />
								</div>
								<div className='d-flex flex-column justify-content-end'>
									<Button size='small' icon={plus} />
									<Button size='small' icon={minus} classname='m-top-10' />
								</div>
							</div>
						</div>
						<div className='d-flex'>
							<div className='m-right-10 d-flex align-items-end'>
								<Speaker size='long' />
							</div>
							<div className='d-flex flex-column justify-content-end align-items-center'>
								<Button size='small' icon={plus} classname='m-bottom-10' />
								<Button size='small' icon={minus} classname='m-bottom-10' />
								<PercentIndicator percent='50' />
								<Icon className='m-top-10' src={speaker} />
							</div>
						</div>
					</div>
				</div>
			</TileWrapper>
			<div className='m-top-40'>
				<div className='d-flex'>
					<TileWrapper gradient='dark' classname='w-auto'>
						<div className='d-flex flex-column w-100 m-top-10 m-bottom-10 m-left-10 m-right-10'>
							<div className='d-flex justify-content-center'>
								<Text text='Equalizer' color='light' size='s' weight='bold' />
							</div>
							<div className='d-flex justify-content-between'>
								<div className='d-flex flex-column align-items-center m-left-10 m-right-10'>
									<EQSlider max={15} />
									<Text text='60 Hz' color='dark' size='xs' weight='bold' />
								</div>
								<div className='d-flex flex-column align-items-center m-left-10 m-right-10'>
									<EQSlider max={12} />
									<Text text='120 Hz' color='dark' size='xs' weight='bold' />
								</div>
								<div className='d-flex flex-column align-items-center m-left-10 m-right-10'>
									<EQSlider max={18} />
									<Text text='400 Hz' color='dark' size='xs' weight='bold' />
								</div>
								<div className='d-flex flex-column align-items-center m-left-10 m-right-10'>
									<EQSlider max={30} />
									<Text text='2 Kz' color='dark' size='xs' weight='bold' />
								</div>
								<div className='d-flex flex-column align-items-center m-left-10 m-right-10'>
									<EQSlider max={20} />
									<Text text='4 Kz' color='dark' size='xs' weight='bold' />
								</div>
								<div className='d-flex flex-column align-items-center m-left-10 m-right-10'>
									<EQSlider max={16} />
									<Text text='8 Kz' color='dark' size='xs' weight='bold' />
								</div>
								<div className='d-flex flex-column align-items-center m-left-10 m-right-10'>
									<EQSlider max={17} />
									<Text text='16 Kz' color='dark' size='xs' weight='bold' />
								</div>
							</div>
						</div>
					</TileWrapper>
					<TileWrapper classname='tile-sliders m-left-20'>
						<Icon src={sliders} width='35' />
					</TileWrapper>
				</div>
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
