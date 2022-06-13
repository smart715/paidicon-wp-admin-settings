import React, { Component } from 'react'

export default class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#1569a8",
            active: false
        };
    }

    handleChange = (e) => {
        this.setState({
            oldColor: this.state.color,
            color: e.target.value,
            active: !this.state.active
        });
    };

    render() {
        return (
            <div>
                <div />

                <label className="color-selector">
                    
                    <span>{this.state.color}</span>
                    <div className='circleeee'>
                    <input
                        type="color"
                        value={this.state.color}
                        onChange={this.handleChange}
                        className="hidden"
                    />
                    <span className="circle" style={{ background: this.state.color }} />
                    </div>
                </label>
            </div>
        );
    }
}
