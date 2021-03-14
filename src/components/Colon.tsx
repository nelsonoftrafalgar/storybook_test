import {FC} from 'react'

export interface IColonProps {
    double: boolean
}

const Colon: FC<IColonProps> = ({double}) => {
    return (
        <div className='colon-wrapper'>
            <div className='colon'/>
            {double && <div className='colon'/>}
        </div>
    )
}

export default Colon
