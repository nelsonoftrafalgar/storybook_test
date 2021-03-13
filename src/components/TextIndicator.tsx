import { FC } from 'react'

export interface ITextIndicatorProps {
    text: string
}

const TextIndicator: FC<ITextIndicatorProps> = ({text}) => {
    return (
        <div className='text-indicator-wrapper'>
            <span className='text-indicator-text'>{text}</span>
        </div>
    )
}

export default TextIndicator
