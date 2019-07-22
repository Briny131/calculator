import React, {Component} from 'react';
import './btn.css'

class btn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div className='b_board' onClick={() => {
                this.props.click()

            }}>
                {this.props.value}
            </div>
        )
    }
}



export default btn

