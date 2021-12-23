import { Component } from 'react';
export class ControlBar extends Component {

    minimizeWindow() {
        // @ts-ignore
        minimize()
    }

    maximizeWindow() {
        // @ts-ignore
        changeWindowState()
    }

    closeApp() {
        // @ts-ignore
        closeWindow()
    }

    render() {
        return  <div className="ControlBar">
                    <img className="Logo" src="" ></img>
                    <a className="ButtonClose" onClick={this.closeApp}>
                        <svg height="12" className="Svg" enableBackground="new 0 0 26 26" viewBox="0 0 26 26" xmlSpace="preserve"><path d="M14.0605469,13L24.7802734,2.2802734c0.2929688-0.2929688,0.2929688-0.7675781,0-1.0605469  s-0.7675781-0.2929688-1.0605469,0L13,11.9394531L2.2802734,1.2197266c-0.2929688-0.2929688-0.7675781-0.2929688-1.0605469,0  s-0.2929688,0.7675781,0,1.0605469L11.9394531,13L1.2197266,23.7197266c-0.2929688,0.2929688-0.2929688,0.7675781,0,1.0605469  C1.3662109,24.9267578,1.5576172,25,1.75,25s0.3837891-0.0732422,0.5302734-0.2197266L13,14.0605469l10.7197266,10.7197266  C23.8662109,24.9267578,24.0576172,25,24.25,25s0.3837891-0.0732422,0.5302734-0.2197266  c0.2929688-0.2929688,0.2929688-0.7675781,0-1.0605469L14.0605469,13z"/></svg>
                    </a>
                    <a className="Button" onClick={this.maximizeWindow}>
                        <svg height="20" className="Svg" x="0px" y="0px" viewBox="0 0 50 50" enableBackground="new 0 0 50 50" xmlSpace="preserve"><path d="M15.243,19.194c0.553,0,1-0.447,1-1s-0.447-1-1-1h-3.77c-0.553,0-1,0.447-1,1v21.951c0,0.553,0.447,1,1,1h21.951 c0.553,0,1-0.447,1-1v-3.765c0-0.553-0.447-1-1-1s-1,0.447-1,1v2.765H12.474V19.194H15.243z"/><path d="M41.474,9.146H19.522c-0.553,0-1,0.447-1,1v21.951c0,0.553,0.447,1,1,1h21.951c0.553,0,1-0.447,1-1V10.146 C42.474,9.593,42.026,9.146,41.474,9.146z M40.474,31.097H20.522V11.146h19.951V31.097z"/></svg>
                    </a>
                    
                    <a className="Button" onClick={this.minimizeWindow}>
                        <svg width="12" className="Svg" height="1" viewBox="0 0 12 1"><g stroke="none" strokeWidth="0" fill="none" fillRule="evenodd"><g transform="translate(-310.000000, -349.000000)"><g transform="translate(100.000000, 100.000000)"><g transform="translate(204.000000, 230.000000)"><g><polygon points="0 0 24 0 24 24 0 24"></polygon><path d="M7,19 L17,19 C17.55,19 18,19.45 18,20 C18,20.55 17.55,21 17,21 L7,21 C6.45,21 6,20.55 6,20 C6,19.45 6.45,19 7,19 Z"></path></g></g></g></g></g></svg>
                    </a>
                </div>;
    }
}