import React from 'react';
import { Select, Input } from 'antd'
import List from '../item/item'
import './ToDoList.css'
const { Option } = Select


class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {
                done: [],
                doing: []
            },
            status: 'no-urgent',
            id: 0
        }
    }

    componentWillMount() {
        let a = window.localStorage
        if (a.item) {
            this.setState({ item: JSON.parse(a.item), id: +a.id })

        }
    }
    componentWillUnmount() {
        this.saveData()
    }

    deleteItem = (id, obj = 'doing') => {
        let data = this.state.item, item, index
        for (let i in data[obj]) {
            if (data[obj][i].id === id) {
                index = i
                break;
            }
        }
        item = data[obj].splice(index, 1)[0]
        this.setState({ item: data })
        this.saveData()
        return item
    }
    handleChangeStatus = (i) => {
        let a = this.state.item
        a[i.to].push(i)
        if (i.to === 'done') {
            i.done = true
            i.to = 'doing'
        } else {
            i.done = false
            i.to = 'done'
        }
        this.setState({ item: a })
        this.saveData()
    }
    selectBefore = (
        <Select style={{ width: "100px" }}
            defaultValue="no-urgent"
            onChange={(e) => { this.handleChange(e) }}>
            <Option value="no-urgent" >不紧急</Option>
            <Option value="justsoso">一般</Option>
            <Option value="urgent">紧急</Option>
        </Select>
    )
    handleChangeValue = (id, obj, value) => {
        let data = this.state.item, index
        for (let i in data[obj]) {
            if (data[obj][i].id === id) {
                index = i
                break;
            }
        }
        data[obj][index].content = value
        this.setState({ item: data })
        this.saveData()
    }
    handlePressEnter = (e, o = true) => {
        // o && e.persist()
        // setTimeout(() => {
        //     console.log(e)
        // }, 1000)
        // console.log(e.target)
        let data = this.state.item,
            a = {
                status: this.state.status,
                content: e.target.value,
                done: false,
                to: 'done',
                id: this.state.id
            }
        data.doing.push(a)
        this.setState({ item: data, id: a.id + 1 })
        this.saveData()
    }
    handleChange(e) {
        this.setState({ status: e })
    }
    saveData() {
        window.localStorage.item = JSON.stringify(this.state.item)
        window.localStorage.id = this.state.id
    }

    render() {
        return (
            <div style={{ width: "500px", margin: '20px' }}>
                <div>
                    <Input
                        addonBefore={this.selectBefore}
                        allowClear
                        placeholder="请输入"
                        onPressEnter={(e) => this.handlePressEnter(e)} />
                </div>
                <List
                    name="未完成"
                    item={this.state.item.doing}
                    onDelete={this.deleteItem}
                    onChange={this.handleChangeStatus}
                    onChangeValue={this.handleChangeValue}></List>
                <List
                    name="完成"
                    item={this.state.item.done}
                    onDelete={(id) => { return this.deleteItem(id, 'done') }}
                    onChange={this.handleChangeStatus}
                    onChangeValue={this.handleChangeValue}></List>
                <Ceshi placeholder="input search text" style={{ width: 200 }}></Ceshi>
            </div>
        )
    }
}

export default ToDoList

// master stash
//