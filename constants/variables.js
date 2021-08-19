import {newTicTacToeGrid, validateDefault, validateMega} from './utils';

export const DEFAULT_NAME = 'tic-tac-toe';
export const MEGA_NAME = 'mega-tic-tac-toe';
export const DEFAULT_GRID_SIZE = 3;
export const MEGA_GRID_SIZE = 8;

export const GRID = {
    [DEFAULT_NAME]: newTicTacToeGrid(DEFAULT_GRID_SIZE),
    [MEGA_NAME]: newTicTacToeGrid(MEGA_GRID_SIZE),
}
export const VALIDATE = {
    [DEFAULT_NAME]: validateDefault,
    [MEGA_NAME]: validateMega,
}
