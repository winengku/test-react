import React, {Component} from 'react';

class AddList extends Component{
constructor(props){
    super(props)
    this.state = {
        item: {
            id: '',
            title: '',
            description: '',
            status: '0',
            createdAt: Date.getTime()
        }
    }
}
handleSubmit = (event) => {
    event.preventDefault()
    this.setState({

    })
    console.log(this.props)
    console.log(this.state.item)
}

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>title</label> 
                    <br />
                    <input value={this.state.title} />
                    <br />
                    <label>description</label> 
                    <br />
                    <input value={this.state.description}/>
                    <br />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}


export default AddList