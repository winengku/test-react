import React, {Component} from 'react';

const DoneList = props => {
    const rows = props.listData.map((row,index) => {
        if(row.status=='1') {
                return (
                    <tr key={index}>
                        <td>{row.title}</td>
                        <td>{row.status}</td>
                        <td>{row.createdAt}</td>
                    </tr>
                )
        }
    })
    return (
        <div>
            <h1>Done List</h1>
            <table>
                <tbody>{rows}</tbody>
            </table>
        </div>
    )
}

const UndoneList = props => {
    const rows = props.listData.map((row,index) => {
        if(row.status=='0') {
            return (
                <tr key={index}>
                    <td>{row.title}</td>
                    <td>{row.status}</td>
                    <td>{row.createdAt}</td>
                </tr>
            )
        }
    })
    return (
        <div>
            <h1>Undone List</h1>
            <table>
                <tbody>{rows}</tbody>
            </table>
        </div>
    )
}

class List extends Component{
    render(){
        const { listData } = this.props
        return (
            <div>
                <DoneList listData={listData}/>
                <UndoneList listData={listData}/>
            </div>
        )
    }
}

export default List