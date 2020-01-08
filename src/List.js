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
            <table>{rows}</table>
        </div>
    )
}

const UndoneList = () => {
    return(
        <tr>
            <td>1</td>
            <td>2</td>
        </tr>
    )
}

class List extends Component{
    render(){
        const { listData } = this.props
        return (
            <div>
                <DoneList listData={listData}/>
                <UndoneList />
            </div>
        )
    }
}

export default List