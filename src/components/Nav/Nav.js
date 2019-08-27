import React, { Component } from 'react'
import { getTableList } from '../../api'
import './Nav.css';

class Nav extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            navList: []
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        getTableList().then(res => {
            this.setState({
                navList: res.data.data.allSubSystems
            })

        }).catch(err => console.log(err))
    }
    handleClick=(e)=>{
        e.preventDefault();
        console.log('The link was clicked.');
        console.log(this);
    }
    render() {
        const listItems = this.state.navList.map((item) =>
            <li key={item.systemId.toString()} onClick={this.handleClick}>
                {item.systemName}
            </li>
        );
        return (
            <ul className="NavWrap">
                {listItems}
            </ul>
        )
    }
}
export default Nav