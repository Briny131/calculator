import React from 'react';
// import Item from './item'
import { Badge } from 'antd'
import './status.css'
function High(PropComponent) {
    return class Status extends React.Component {
        static defaultProps = {
            item: []
        }
        constructor(props) {
            super(props)
            this.state = {
                hidden: false
            }
        }

        handleHidden() {
            this.setState({
                hidden: !this.state.hidden
            })
        }

        get item() {
            return this.props.item.sort((a, b) => {
                return a.status.length - b.status.length
            }).map((item, index) => {
                return (
                    <PropComponent
                        key={item.id}
                        data={item}
                        onDelete={this.props.onDelete}
                        onChange={this.props.onChange}
                        onChangeValue={this.props.onChangeValue}
                    />
                )
            })
        }


        render() {
            return (
                <div style={{ margin: '20px' }}>
                    <Badge count={this.props.item.length}>
                        <div
                            className="status-style"
                            onClick={() => this.handleHidden()}>
                            {this.props.name}
                            {this.state.hidden
                                ?<div id="down-icon"></div> 
                                :<div id="up-icon"></div>
                            }
                        </div>
                    </Badge>
                    {this.state.hidden
                        ? ''
                        : <div>
                            {this.item}
                        </div>
                    }


                </div>
            )
        }
    }
}


export default High