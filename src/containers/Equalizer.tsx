import EQSlider from '../components/EQSlider'
import { FC } from 'react'
import Text from '../components/Text'
import TileWrapper from '../components/TileWrapper'

export interface IEqualizerProps {
	equalizerData: Array<{ max: number; text: string }>
}

const Equalizer: FC<IEqualizerProps> = ({ equalizerData }) => {
	return (
		<TileWrapper gradient='dark' classname='w-auto'>
			<div className='d-flex flex-column w-100 m-top-10 m-bottom-10 m-left-10 m-right-10'>
				<div className='d-flex justify-content-center'>
					<Text text='Equalizer' color='light' size='s' weight='bold' />
				</div>
				<div className='d-flex justify-content-between'>
					{equalizerData.map(({ max, text }) => (
						<div key={text} className='d-flex flex-column align-items-center m-left-10 m-right-10'>
							<EQSlider max={max} />
							<Text text={text} color='dark' size='xs' weight='bold' />
						</div>
					))}
				</div>
			</div>
		</TileWrapper>
	)
}

export default Equalizer
