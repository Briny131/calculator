import React from 'react';
import './App.css';
import Btn from './button';
import ShowDock from './showDock'
import calcular from './calcular'


let cal = new calcular()

class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			result:'',
		}
	}

	ceshi(v){
		if(cal.first){
			cal.val1 += v
			this.setState({
				result:cal.val1
			})
		}else{
			cal.val2 += v
			this.setState({
				result:cal.val2
			})
		}

	}

	render(){
		return (
			<div className='App'>
				<div className='row'>
					<ShowDock val={this.state.result}/>
				</div>
				<div className='row'>
					<Btn value='C' click={()=>{this.setState({result:cal.clear()})}}/>
					<Btn value='+/-' click={()=>{console.log(cal)}}/>
					<Btn value='%' click={()=>{cal.mod()}}/>
					<Btn value='/' click={()=>{cal.divide()}}/>
				</div>
				<div className='row'>
					<Btn value='7' click={()=>{this.ceshi('7')}}/>
					<Btn value='8' click={()=>{this.ceshi('8')}}/>
					<Btn value='9' click={()=>{this.ceshi('9')}}/>
					<Btn value='*' click={()=>{cal.time()}}/>
				</div>
				<div className='row'>
					<Btn value='4' click={()=>{this.ceshi('4')}}/>
					<Btn value='5' click={()=>{this.ceshi('5')}}/>
					<Btn value='6' click={()=>{this.ceshi('6')}}/>
					<Btn value='-' click={()=>{cal.sub()}}/>
				</div>
				<div className='row'>
					<Btn value='1' click={()=>{this.ceshi('1')}}/>
					<Btn value='2' click={()=>{this.ceshi('2')}}/>
					<Btn value='3' click={()=>{this.ceshi('3')}}/>
					<Btn value='+' click={()=>{cal.add()}}/>
				</div>
				<div className='row'>
					<Btn value='0'  width={true} click={()=>{this.ceshi('0')}}/>
					<Btn value='.' click={()=>{this.ceshi('.')}}/>
					<Btn value='=' click={()=>{this.setState({result:cal.result()})}}/>
				</div>
			</div>
		);
	}
	
}

export default App;
