import { FC, useState } from 'react'

import Slider from 'react-rangeslider'

export interface IEQSliderProps {
	max: number
}

const EQSlider: FC<IEQSliderProps> = ({ max }) => {
	const [value, setValue] = useState(10)

	return (
		<Slider
			orientation='vertical'
			min={1}
			max={max}
			value={value}
			onChange={(value) => setValue(value)}
			tooltip={false}
		/>
	)
}

export default EQSlider
