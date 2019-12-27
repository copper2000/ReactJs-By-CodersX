import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TodoItem.css';
import classNames from 'classnames';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

class TodoItem extends Component {   
    render() {
        const { item, onClick } = this.props; // const item = this.props.item      
        let url = checkImg;
        if (item.isComplete) {
            url = checkCompleteImg;
        }
        return (
            <div 
                className={classNames('TodoItem', { 'TodoItem-complete': item.isComplete })}                 
            >
                <img width={28} src={url} onClick={onClick} alt=""/> 
                <p>{item.task}</p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    item: PropTypes.shape({
        task: PropTypes.string.isRequired,
        isComplete: PropTypes.bool.isRequired,        
    }),
    onClick: PropTypes.func
};

export default TodoItem;

