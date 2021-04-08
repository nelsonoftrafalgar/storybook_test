import Text from '../components/Text'
import TileWrapper from '../components/TileWrapper'
import TrackControls from './TrackControls'
import TrackProgress from './TrackProgress'
import TrackRepeat from './TrackRepeat'
import VolumeSettings from './VolumeSettings'

const TrackPanel = () => {
	return (
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
				<TrackProgress />
				<TrackRepeat />
				<TrackControls />
			</div>
		</TileWrapper>
	)
}

export default TrackPanel
