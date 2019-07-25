import React, {Component} from 'react';
import './btn.css'

class btn extends React.Component{
    static defaultProps = {
        width:false
    }

    constructor(props){
        super(props);
        this.state = {
            value:props.value
        }
    }
    componentDidUpdate(prevProps){
        if(this.props.value !== prevProps.value){
            console.log('改变了props')
        }
        console.log('自组件从新渲染')
    }
    componentWillReceiveProps(nextProps){
        this.setState({value:nextProps.value})
    }
    shouldComponentUpdate(prevProps){
        if(this.props.value === prevProps.value){
            console.log('h')
            return false 
        }
        return true
    }
    render(){
        return(
            <div className={this.props.width?'w_board':'b_board'} onClick={() => {
                this.props.click()

            }}>
                {this.state.value}
            </div>
        )
    }
}



export default btn

