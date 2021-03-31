import Colon from '../components/Colon'
import Icon from '../components/Icon'
import LightIndicator from '../components/LightIndicator'
import Text from '../components/Text'
import TextIndicator from '../components/TextIndicator'
import TileWrapper from '../components/TileWrapper'
import Timer from '../components/Timer'
import coffe from '../assets/icons/coffe.svg'
import gear from '../assets/icons/gear.svg'
import ok from '../assets/icons/ok.svg'
import rain from '../assets/icons/rain.svg'
import sun from '../assets/icons/sun.svg'
import toast from '../assets/icons/toast.svg'

const LeftSection = () => {
	return (
		<section className='left-section'>
			<div>
				<Text text='19:14' color='light' size='m' weight='fat' classname='m-right-30' />
				<Text text='4 jun' color='turquoise' size='m' weight='fat' />
			</div>
			<div className='d-flex align-items-center m-top-40'>
				<Text text='Outdoor' color='dark' size='s' weight='fat' classname='m-right-20' />
				<Text text='+32' color='light' size='xl' weight='fat' classname='m-right-30' />
				<Icon src={sun} width='35' className='m-right-5' />
				<Text text='Mostly clear' color='dark' size='s' weight='fat' classname='m-right-30' />
				<Icon src={rain} width='35' className='m-right-5' />
				<Text text='Rain in 2 hours' color='dark' size='s' weight='fat' classname='m-right-30' />
			</div>
			<div className='d-flex align-items-center m-top-30'>
				<Text text='Indoor' color='dark' size='s' weight='fat' classname='m-right-20' />
				<Text text='+24' color='light' size='xl' weight='fat' classname='m-right-20' />
				<Colon double />
			</div>
			<div className='d-flex align-items-center m-top-30'>
				<Text text='Actual' color='dark' size='s' weight='fat' classname='m-right-20' />
				<LightIndicator text='Kitchen' on classname='m-right-10' />
				<Colon double />
			</div>
			<div className='m-top-30 m-left-50'>
				<div className='d-flex'>
					<TextIndicator text='Coffe' classname='m-right-50' />
					<TextIndicator text='Tea' classname='m-right-20' />
					<Colon double />
				</div>
				<div className='m-top-20 d-flex'>
					<div className='d-flex flex-column m-right-30'>
						<Icon src={coffe} width='45' />
						<Text
							text='Double cappuccion'
							color='light'
							size='s'
							weight='bold'
							classname='m-top-10'
						/>
						<Text text='+' color='light' size='s' weight='bold' />
						<div>
							<Text
								text='Caramel syrup'
								color='light'
								size='s'
								weight='bold'
								classname='m-right-20'
							/>
							<Text text='30 ml' color='dark' size='s' weight='regular' />
						</div>
						<Text text='320 ml' color='light' size='l' weight='bold' />
					</div>
					<div className='d-flex flex-column m-right-30'>
						<Icon src={coffe} width='45' />
						<Text text='Mountain tea' color='light' size='s' weight='bold' classname='m-top-10' />
						<Text text='+' color='light' size='s' weight='bold' />
						<div>
							<Text text='Lemon' color='light' size='s' weight='bold' classname='m-right-20' />
							<Text text='20 gr' color='dark' size='s' weight='regular' />
						</div>
					</div>
					<div className='align-self-center'>
						<Timer count={30} />
					</div>
				</div>
			</div>
			<div className='m-top-30 m-left-50'>
				<div className='d-flex'>
					<TextIndicator text='Toast' classname='m-right-20' />
					<Colon double />
				</div>
				<div className='m-top-20 d-flex'>
					<div className='d-flex flex-column m-right-30'>
						<Icon src={toast} width='45' />
						<Text
							text='Whole wheat bread'
							color='light'
							size='s'
							weight='bold'
							classname='m-top-10'
						/>
						<Text text='+' color='light' size='s' weight='bold' />
						<Text text='Salted salmon' color='light' size='s' weight='bold' classname='m-top-10' />
						<Text text='+' color='light' size='s' weight='bold' />
						<Text text='Avocado sauce' color='light' size='s' weight='bold' classname='m-top-10' />
					</div>
					<div className='d-flex align-items-center m-right-30'>
						<p className='mb-0'>
							<Text text='2' color='light' size='l' weight='bold' classname='m-top-10' />
							<Text text='items' color='light' size='s' weight='bold' classname='m-top-10' />
						</p>
					</div>
					<div className='align-self-center'>
						<Timer count={50} />
					</div>
				</div>
			</div>
			<div className='d-flex align-items-end m-top-60'>
				<TileWrapper classname='tile-gear flex-column justify-content-start'>
					<Text
						text='All settings'
						color='light'
						size='s'
						weight='bold'
						classname='m-bottom-10 m-top-10'
					/>
					<Icon src={gear} width='30' />
				</TileWrapper>
				<Text
					text='All systems OK'
					color='light'
					size='l'
					weight='bold'
					classname='m-left-50 m-right-30'
				/>
				<LightIndicator icon={ok} on />
			</div>
		</section>
	)
}

export default LeftSection
