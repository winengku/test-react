import React, {Component} from 'react';

class AddList extends Component{
constructor(props){
    super(props)
    this.state = {
        item: {
            id: '',
            title: '',
            description: 'lorem ipsum',
            status: '0',
            createdAt: ''
        },
        listData: []
    }
}
handleSubmit = (event) => {
    event.preventDefault()
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        hour = '' + d.getHours(),
        minute = '' + d.getMinutes()

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    if (hour.length < 2) 
        hour = '0' + hour;
    if (minute.length < 2) 
        minute = '0' + minute;

    var z = year + '-' + month + '-' + day + ' ' + hour + ':' + minute
    this.setState({
        item: {
            id: '',
            title: '',
            description: 'lorem ipsum',
            status: '0',
            createdAt: z
        },
        // listData: [...this.props, this.state.item],
    })
    console.log(this.props)
    
}

handleChange = (event) => {
    this.setState({
        item : {
            title: event.target.value,
            description: 'lorem ipsum',
            status: '0',
            createdAt: ''
        } 
    })
}


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>title</label> 
                    <br />
                    <input value={this.state.title} onChange={this.handleChange} />
                    <br />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}


export default AddList