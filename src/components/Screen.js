import {Maze} from './Maze'

function getScreenEl(screen) {
    return document.getElementById('screen-' + screen);
}

function showScreen(screen) {
    getScreenEl(screen).classList.remove('hidden');
}

function hideScreen(screen) {
    getScreenEl(screen).classList.add('hidden');
}

export class Screen {
    constructor(screenSettings) {
        this.screenSettings = screenSettings;
        const {mazeSettings} = this.screenSettings;
        if (mazeSettings) {
            this.maze = new Maze(mazeSettings, this.onFinish);
            this.maze.render();
        }
    }

    show = () => {
        showScreen(this.screenSettings.id);
        if (this.maze) {
            this.maze.start();
        }
    };

    onFinish = () => {
        getScreenEl(this.screenSettings.id).getElementsByClassName('btn-next-screen')[0].style.display = 'flex';
    };

    hide = () => {
        hideScreen(this.screenSettings.id);
        if (this.maze) {
            this.maze.stop();
        }

    };

    onKeyDown = e => {
        if (this.maze) {
            this.maze.onKeyDown(e);
        }
    };

}