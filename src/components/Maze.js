import {UserPosition} from './UserPosition';
import {KeyCode} from '../constants';

const CLASS_NAME_MAZE = 'maze';
const CLASS_NAME_MAZE_ROW = 'maze-row';
const CLASS_NAME_MAZE_CELL = 'maze-cell';

const VISIBLE_BORDER_COLOR = 'rgba(112,200,60,1)';
const INVISIBLE_BORDER_COLOR = 'rgba(112,200,60,0)';

function getMazeEl(id) {
    return document.getElementById(id);
}

function styleCell(cell, div) {
    if (cell.top) {
        div.style.borderTopColor = INVISIBLE_BORDER_COLOR;
    } else {
        div.style.borderTopColor = VISIBLE_BORDER_COLOR;
    }
    if (cell.right) {
        div.style.borderRightColor = INVISIBLE_BORDER_COLOR;
    } else {
        div.style.borderRightColor = VISIBLE_BORDER_COLOR;
    }
    if (cell.bottom) {
        div.style.borderBottomColor = INVISIBLE_BORDER_COLOR;
    } else {
        div.style.borderBottomColor = VISIBLE_BORDER_COLOR;
    }
    if (cell.left) {
        div.style.borderLeftColor = INVISIBLE_BORDER_COLOR;
    } else {
        div.style.borderLeftColor = VISIBLE_BORDER_COLOR;
    }
}

function renderMazeCell(cell) {
    const div = document.createElement('div');
    div.className = CLASS_NAME_MAZE_CELL;
    styleCell(cell, div);
    return div;
}

function renderMazeRow(row) {
    const div = document.createElement('div');
    div.className = CLASS_NAME_MAZE_ROW;
    row.forEach(cell => div.appendChild(renderMazeCell(cell)));
    return div;
}

function renderMaze(matrix) {
    const div = document.createElement('div');
    div.className = CLASS_NAME_MAZE;
    matrix.forEach(row => div.appendChild(renderMazeRow(row)));
    return div;
}

export class Maze {
    constructor(mazeSettings) {
        this.mazeSettings = mazeSettings;
        this.currentPosition = mazeSettings.defaultPosition;
        this.index = 0;
        this.deg = 0;
    }

    onKeyDown = e => {
        const {x, y} = this.currentPosition;
        const {matrix} = this.mazeSettings;
        const mazeCell = matrix[this.index][y][x];
        const maxX = matrix[this.index][0].length;
        const maxY = matrix[this.index].length;
        switch (e.keyCode) {
            case KeyCode.ARROW_UP:
                if (mazeCell.top && y - 1 >= 0) {
                    this.currentPosition = {x, y: y - 1}
                }
                break;
            case KeyCode.ARROW_DOWN:
                if (mazeCell.bottom && y + 1 < maxY) {
                    this.currentPosition = {x, y: y + 1}
                }
                break;
            case KeyCode.ARROW_LEFT:
                if (mazeCell.left && x - 1 >= 0) {
                    this.currentPosition = {x: x - 1, y}
                }
                break;
            case KeyCode.ARROW_RIGHT:
                if (mazeCell.right && x + 1 < maxX) {
                    this.currentPosition = {x: x + 1, y}
                }
                break;
        }
        this.userPosition.setPosition(this.currentPosition);
    };

    updateMatrix() {
        const {id, matrix} = this.mazeSettings;
        const mazeEl = getMazeEl(id);
        const divRows = mazeEl.getElementsByClassName(CLASS_NAME_MAZE_ROW);
        Array.from(divRows).forEach((divRow, i) => {
            const divCells = divRow.getElementsByClassName(CLASS_NAME_MAZE_CELL);
            Array.from(divCells).forEach((divCell, j) => {
                styleCell(matrix[this.index][i][j], divCell);
            });
        })

    }

    rotateMaze() {
        const {id} = this.mazeSettings;
        this.deg += 5;
        getMazeEl(id).style.transform = `rotate(${this.deg}deg)`;
    }

    start() {
        this.interval = setInterval(() => {
            this.index = (this.index + 1) % 2;
            this.updateMatrix();
            this.rotateMaze();
        }, 2000);
    }


    stop() {
        clearInterval(this.interval);
    }


    render() {
        const {id, matrix} = this.mazeSettings;

        this.userPosition = new UserPosition();
        getMazeEl(id).appendChild(this.userPosition.render());
        this.userPosition.setPosition(this.currentPosition);

        getMazeEl(id).appendChild(renderMaze(matrix[this.index]));
    }
}