import React, { Component } from 'react';
class ShoppingList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this);
    }
    // 事件处理
    handleClick(e) {
        console.log(e);
        this.setState(state => (
            { isToggleOn: !state.isToggleOn }
        ));
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
                <h3 onClick={this.handleClick}>Shopping List for {this.props.name}</h3>
                <p>{this.state.date.toLocaleTimeString()}</p>
                {/* 嵌套使用 */}
                {this.props.children}
            </div>
        );
    }
}
export default ShoppingList;