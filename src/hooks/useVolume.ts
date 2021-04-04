import { useState } from 'react'

export const useVolume = () => {
	const [volume, setVolume] = useState(0)

	const handleIncrement = () => {
		volume < 100 && setVolume(volume + 1)
	}

	const handleDecrement = () => {
		volume > 0 && setVolume(volume - 1)
	}

	return { volume, handleDecrement, handleIncrement }
}
