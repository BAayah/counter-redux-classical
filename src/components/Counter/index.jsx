import React from 'react';
import { decreaseCount, increaseCount } from '../../store/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export const Counter = ({ count, increaseCount, decreaseCount }) => {
    return (
        <div className='counter'>
            <button onClick={decreaseCount}>-</button>
            {count}
            <button onClick={increaseCount}>+</button>
        </div>
    )
}

const mapStatetoProps = state => ({
    count: state.count
})

const mapDispatchtoProps = dispatch => ({
    increaseCount: () => dispatch(increaseCount()),
    decreaseCount: () => dispatch(decreaseCount()),
})

export default connect(mapStatetoProps, mapDispatchtoProps)(Counter)