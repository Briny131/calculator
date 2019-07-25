import React,{Component} from 'react'
import './btn.css'

class show extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    ceshi(){
        console.log('组件内部')
    }
   render(){
        return(
            <div className='showDock'>
                {this.props.val}
            </div>
        )
    }
}

export default show