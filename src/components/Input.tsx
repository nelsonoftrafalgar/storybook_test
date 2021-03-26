import {FC} from 'react'
import looking_glass from '../assets/icons/looking_glass.svg'
import Icon from '../components/Icon'

const Input: FC = () => {
    return (
        <div className='input-wrapper'>
            <input className='input' type="text"/>
            <Icon src={looking_glass} />
        </div>
    )
}

export default Input
