import ProgressBar from '../components/ProgressBar'
import Text from '../components/Text'

const TrackProgress = () => {
	return (
		<div className='w-100 d-flex align-items-center justify-content-center m-top-60'>
			<Text text='07:10' color='dark' size='s' weight='bold' classname='m-right-20' />
			<ProgressBar maxProgress={100} currentProgress={50} />
			<Text text='02:35' color='dark' size='s' weight='bold' classname='m-left-20' />
		</div>
	)
}

export default TrackProgress
