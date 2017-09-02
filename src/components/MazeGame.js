import {ScreenSettings} from '../constants';
import {Screen} from './Screen';

export class MazeGame {

    screens = [
        new Screen(ScreenSettings.SCREEN_START),
        new Screen(ScreenSettings.SCREEN_MAZE_1),
        new Screen(ScreenSettings.SCREEN_STORY_2),
        new Screen(ScreenSettings.SCREEN_MAZE_2)
    ];

    activeScreen;

    showNextScreen = () => {
        this.activeScreen.hide();
        const index = this.screens.indexOf(this.activeScreen) + 1;
        this.activeScreen = this.screens[index];
        this.activeScreen.show();
    };

    handleBtnStartClick = () => {
        this.showNextScreen();
    };

    handleKeyDown = e => this.activeScreen.onKeyDown(e);

    start = () => {
        this.activeScreen = this.screens[0];
        this.activeScreen.show();
        document.body.addEventListener('keydown', this.handleKeyDown);
    }
}