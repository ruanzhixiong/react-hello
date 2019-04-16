import React, { Component } from 'react';
class ShoppingList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        // 正确的更改state的方式(类似Vue的data里的数据，但是vue可以直接更改)
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}
export default ShoppingList;