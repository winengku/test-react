import React, {Component} from 'react';
import List from './List'
import AddList from './AddList'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: []
        }
    }

    componentDidMount(){
        const url = "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list"

        fetch(url).then(result => result.json())
        .then(result => {
            this.setState({
                items: result
            })
        })
    }

    render() {
        const { items } = this.state
        return (
            <div className="App">
                <List listData={items} />
                <AddList  listData={items}/>
            </div>
        )
    }
}

export default App