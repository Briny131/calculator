import React from 'react';
// import Item from './item'
import {Badge} from 'antd'
import './status.css'
import Item from '../item/item';

class Status extends React.Component{
    static defaultProps = {
        item:[]
    }
    constructor(props){
        super(props)
        this.state = {

        }
    }


    render(){
        return(
            <div>
                <Badge count={this.props.item.length}>
                    <div className="status-style">{this.props.name}</div>
                </Badge>
                <div style={{width:"90%"}}>
                    {this.props.item.map((item,index)=>{
                        return (
                        <Item 
                        key={item.id} 
                        data={item}
                        onDelete={this.props.onDelete}
                        onChange={this.props.onChange}
                        onChangeValue={this.props.onChangeValue}
                        ></Item>
                        )
                    })}
                </div>
                
            </div>
        )
    }
}

export default Status