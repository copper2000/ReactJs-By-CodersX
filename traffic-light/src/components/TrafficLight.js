import React, { Component } from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

const RED = -1;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends Component {

    render() {
        const { currentColor } = this.props;
        return (
            <div>
                <div className="TrafficLight">
                    <div className={classNames('bulb', 'red', { active: currentColor === RED })} />
                    <div className={classNames('bulb', 'yellow', { active: currentColor === YELLOW })} />
                    <div className={classNames('bulb', 'green', { active: currentColor === GREEN })} />
                </div>
                <div>
                    <button className="button">Change Mode</button>
                </div>
            </div>
        );
    }
}
export default TrafficLight;