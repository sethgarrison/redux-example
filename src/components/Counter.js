import React, {Component} from 'react'
// Connect is how we bind store and dispatch methods to our component
import {connect} from 'react-redux'
// We pull out the two dispatch methods we need from our store
import {increment, decrement} from '../store'

class Counter extends Component {
    render () {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onClick={this.props.decrement}>-</button>
                <button onClick={this.props.increment}>+</button>
            </div>
        )
    }
}

/**
 * Connect takes two arguments:
 * 1) [mapStateToProps(state, [ownProps]): stateProps] (Function)
 * 2) [mapDispatchToProps(dispatch, [ownProps]): dispatchProps]
 *
 * The first is what we use to pass the state to the component's props. The second is what we use
 * to bind the dispatch methods to the component's props.
 */
export default connect(
    (state) => ({count: state.count}),
    {increment, decrement}
)(Counter)