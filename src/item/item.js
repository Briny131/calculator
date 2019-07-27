import React from 'react';
import { Row, Col, Checkbox, Input, Modal, Icon } from 'antd'
import './item.css'
import High from '../status/Status'

class ListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modify: false,
            content: null,
            showEdit: false,
            visible: false
        }
    }
    shouldComponentUpdate(preProps, preState) {
        if (preState.visible !== this.state.visible) {
            return true
        }
        if (preState.showEdit !== this.state.showEdit) {
            return true
        }
        if (preState.modify !== this.state.modify) {
            return true
        }
        if (preProps.data.content === this.state.content) {
            return false
        }
        return true
    }
    componentDidUpdate() {
        // console.log('laile')
    }
    showModal = () => {
        this.setState({
            visible: true
        })
    }
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
    handleChange(e, id) {
        this.props.onChange(this.props.onDelete(id))
    }
    handleBlur = (e) => {
        this.setState({modify:false})
    }
    handlePressEnter(e) {
        // console.log(e.target.value)
        e.persist()
        console.log(e)
        let d = this.props.data.to === 'done'?'doing':'done'
        // setTimeout(() => {
        this.setState({
            content: e.target.value,
            modify: false,
        })
        // }, 0);

        this.props.onChangeValue(this.props.data.id, d, e.target.value)
    }
    handleMouseEnter(e) {
        this.setState({ showEdit: true })
    }
    handleMouseLeave(e) {
        this.setState({ showEdit: false })
    }
    render() {
        return (
            <div
                className="item-style animate"
                onMouseEnter={() => { this.handleMouseEnter() }}
                onMouseLeave={() => { this.handleMouseLeave() }}
            >
                <Row align="bottom">
                    <Col span={1}>
                        <div className={`${this.props.data.status} status ${this.state.showEdit ? 'status-animate' : ''}`}></div>
                    </Col>
                    <Col span={20}>
                        <div style={{ height: '30px', lineHeight: '30px' }}>
                            <Row>
                                <Col span={2}>
                                    <div className="base-style">
                                        <Checkbox checked={this.props.data.done}
                                            onChange={(e) => { this.handleChange(e, this.props.data.id) }}
                                        ></Checkbox>
                                    </div>
                                </Col>
                                <Col span={22}>
                                    {this.state.modify ?
                                        <Input
                                            id="1"
                                            autoFocus={true}
                                            placeholder="请输入"
                                            allowClear
                                            defaultValue={this.state.content || this.props.data.content}
                                            onPressEnter={(e) => { this.handlePressEnter(e) }}
                                            onBlur={this.handleBlur}
                                        >
                                        </Input> :
                                        <span
                                            className="span-style"
                                            onDoubleClick={() => { this.setState({ modify: !this.state.modify }) }}>
                                            {this.state.content || this.props.data.content}
                                        </span>}
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span={3}>
                        {this.state.showEdit ?
                            <div className="icon-style">
                                {/* <Button 
                            type="primary"
                            size="small"
                            onClick={()=>{this.setState({modify:!this.state.modify})}}>
                                修改
                            </Button>
                            <Button 
                            type="danger"
                            size="small"
                            ghost
                            onClick={this.showModal}>
                                删除
                            </Button> */}
                                {/* <Icon 
                            type="edit" 
                            style={{fontSize:'20px'}}
                            onClick={()=>{this.setState({modify:!this.state.modify})}}/> */}
                                <Icon type="close-circle"
                                    theme="twoTone"
                                    twoToneColor="#aaa"
                                    style={{ fontSize: '12px' }}
                                    onClick={this.showModal} />
                            </div> :
                            <div></div>
                        }
                    </Col>
                </Row>
                <Modal
                    title="提示"
                    visible={this.state.visible}
                    cancelText="取消"
                    okText="确定"
                    onOk={() => { this.props.onDelete(this.props.data.id) }}
                    onCancel={this.handleCancel}>
                    确定要删除吗？
                </Modal>
            </div>
        )
    }
}
export default High(ListItem)