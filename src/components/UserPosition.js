function renderUserPosition() {
    const div = document.createElement('div');
    div.className = 'user-position';
    return div;
}

export class UserPosition {
    setPosition({x, y}) {
        this.el.style.marginLeft = x * 50 + 'px';
        this.el.style.marginTop = y * 50 + 'px';
    }

    render() {
        this.el = renderUserPosition();
        return this.el;
    }
}