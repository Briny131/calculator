import React, {Component} from 'react';
import './btn.css'

class btn extends React.Component{
    static defaultProps = {
        width:false
    }

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div className={this.props.width?'w_board':'b_board'} onClick={() => {
                this.props.click()

            }}>
                {this.props.value}
            </div>
        )
    }
}



export default btn

