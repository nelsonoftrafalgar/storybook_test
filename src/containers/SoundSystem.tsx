import Speaker from '../components/Speaker'
import Text from '../components/Text'
import TileWrapper from '../components/TileWrapper'
import VolumeSettingsColumn from './VolumeSettingsColumn'
import VolumeSettingsLarge from './VolumeSettingsLarge'
import VolumeSettingsSmall from './VolumeSettingsSmall'

const SoundSystem = () => {
	return (
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
							<VolumeSettingsSmall />
						</div>
						<div className='d-flex m-top-10'>
							<div className='d-flex m-right-10'>
								<Speaker text='Speaker' size='large' classname='m-right-10' />
								<Speaker text='Speaker' size='large' />
							</div>
							<VolumeSettingsLarge />
						</div>
					</div>
					<div className='d-flex'>
						<div className='m-right-10 d-flex align-items-end'>
							<Speaker size='long' />
						</div>
						<div className='d-flex flex-column justify-content-end align-items-center'>
							<VolumeSettingsColumn />
						</div>
					</div>
				</div>
			</div>
		</TileWrapper>
	)
}

export default SoundSystem
