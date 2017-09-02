import {UserPosition} from './UserPosition';
import {KeyCode} from '../constants';
function getMazeEl(id) {
    return document.getElementById(id);
}

function renderMazeCell(cell) {
    const div = document.createElement('div');
    div.className = 'maze-cell';
    if (cell.top) {
        div.style.borderTopWidth = 0;
    }
    if (cell.right) {
        div.style.borderRightWidth = 0;
    }
    if (cell.bottom) {
        div.style.borderBottomWidth = 0;
    }
    if (cell.left) {
        div.style.borderLeftWidth = 0;
    }

    return div;
}

function renderMazeRow(row) {
    const div = document.createElement('div');
    div.className = 'maze-row';
    row.forEach(cell => div.appendChild(renderMazeCell(cell)));
    return div;
}

function renderMaze(matrix) {
    const div = document.createElement('div');
    div.className = 'maze';
    matrix.forEach(row => div.appendChild(renderMazeRow(row)));
    return div;
}

export class Maze {
    constructor(mazeSettings) {
        this.mazeSettings = mazeSettings;
        this.currentPosition = mazeSettings.defaultPosition;
    }

    onKeyDown = e => {
        const {x, y} = this.currentPosition;
        const {matrix} = this.mazeSettings;
        const mazeCell = matrix[y][x];
        const maxX = matrix[0].length;
        const maxY = matrix.length;
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


    render() {
        const {id, matrix} = this.mazeSettings;

        this.userPosition = new UserPosition();
        getMazeEl(id).appendChild(this.userPosition.render());
        this.userPosition.setPosition(this.currentPosition);

        getMazeEl(id).appendChild(renderMaze(matrix));
    }
}