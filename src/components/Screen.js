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
            this.maze = new Maze(mazeSettings);
            this.maze.render();
        }
    }

    show = () => showScreen(this.screenSettings.id);

    hide = () => hideScreen(this.screenSettings.id)

    onKeyDown = e => {
        if (this.maze) {
            this.maze.onKeyDown(e);
        }
    };

}