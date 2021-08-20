import DefaultX from 'assets/x-default.svg'
import DefaultO from 'assets/o-default.svg'
import MegaX from 'assets/x-mega.svg'
import MegaO from 'assets/o-mega.svg'
import {DEFAULT_NAME} from 'constants/variables'

export default function Marker({mark, boardType}){
    const isDefaultBoard = boardType === DEFAULT_NAME

    switch (mark) {
        case 'X':
            return isDefaultBoard
                ? <DefaultX />
                : <MegaX />
        case 'O':
            return isDefaultBoard
                ? <DefaultO />
                : <MegaO />
        default:
            return null
    }
}
