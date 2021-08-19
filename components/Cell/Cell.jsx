import {useState} from 'react'
import Marker from 'components/Marker'
import {cx} from 'constants/utils'
import styles from './Cell.module.scss'

const VALUE_MAP = ['', 'X', 'O']

export default function Cell({value, coordinates, handleClick}){
    const [isHovering, setIsHovering] = useState(false);

    const isEmpty = VALUE_MAP[value] === ''
    const cellStyles=cx([
        styles.box,
        isHovering ? styles.hover : ''
    ])
    return (
        <div
            className={cellStyles}
            value={VALUE_MAP[value]}
            onClick={() => handleClick(coordinates)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <Marker mark={VALUE_MAP[value]}/>
            {isEmpty && isHovering &&
                <Marker mark="X"/>
            }
        </div>
    )
}
