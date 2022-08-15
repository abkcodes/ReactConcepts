import React, { Component } from 'react'
import ApiService from '../Api/ApiService'

export default class ListOfCustomers extends Component {
    constructor(props)
     {
      super(props)
    
      this.state = {
         users:[]
      }
    }
    componentDidMount()
    {
ApiService.fetchAllUser().then((result)=>
        this.setState({users:result.data})
);

    }

  render() {
    return (
      <div>
        <table className='table table-stripped table-bordered'>
        <thead>
            <th>password</th>
        </thead>
        <tbody>
            {
                this.state.users.map(user=>
                    <tr>
                        <td>{user.password}</td>
                    </tr>
                    )
            }
        </tbody>
        </table>

      </div>
    )
  }
}
