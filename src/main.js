import './style.scss';

const Screen = {
    START: 'start',
    STORY_1: 'story-1',
    MAZE_1: 'maze-1',
    STORY_2: 'story-2'
};

const Maze = {
    MAZE_1: 'maze-1',
    MAZE_2: 'maze-2'
};

const MAZE_MATRIX_1 = [
    [{right: 1}, {top: 1, right: 1, bottom: 1, left: 1}, {left: 1}],
    [{right: 1, bottom: 1}, {top: 1, right: 1, left: 1}, {left: 1, bottom: 1}],
    [{top: 1}, {right: 1, bottom: 1}, {top: 1, left: 1}]
];

function getMazeEl(mazeId) {
    return document.getElementById(mazeId);
}

function getScreenEl(screen) {
    return document.getElementById('screen-' + screen);
}

function showScreen(screen) {
    getScreenEl(screen).classList.remove('hidden');
}

function hideScreen(screen) {
    getScreenEl(screen).classList.add('hidden');
}

function renderMazeCell(cell) {
    const div = document.createElement('div');
    div.className = 'maze-cell';
    if(cell.top){
        div.style.borderTopWidth = 0;
    }
    if(cell.right){
        div.style.borderRightWidth = 0;
    }
    if(cell.bottom){
        div.style.borderBottomWidth = 0;
    }
    if(cell.left){
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

class MazeGame {

    activeScreen = Screen.START;

    setActiveScreen = (screen) => {
        hideScreen(this.activeScreen);
        this.activeScreen = screen;
        showScreen(this.activeScreen);
    };

    handleBtnStartClick = () => {
        this.setActiveScreen(Screen.MAZE_1)
    };

    start = () => {
        showScreen(this.activeScreen);
        getMazeEl(Maze.MAZE_1).appendChild(renderMaze(MAZE_MATRIX_1));
    }
}

window.mg = new MazeGame();
mg.start();