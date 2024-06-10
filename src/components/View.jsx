import React, { useState } from 'react'
import NavBar from './NavBar'

const View = () => {
    const [data,changedata]=useState([
        {
            "id":"121",
            "name":"jisna",
            "salary":"25000",
            "designation":"clerk"
        },
        {
            "id":"122",
            "name":"jini",
            "salary":"65000",
            "designation":"Accountant"
        },
        {
            "id":"123",
            "name":"swathy",
            "salary":"35000",
            "designation":"Manager"
        },
        {
            "id":"124",
            "name":"Raifa",
            "salary":"45000",
            "designation":"clerk"
        }

    ])
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">index</th>
                                        <th scope="col">id</th>
                                        <th scope="col">name</th>
                                        <th scope="col">salary</th>
                                        <th scope="col">designation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map(
                                            (value,index)=>{
                                                return <tr>
                                                <th scope="row">{index+1}</th>
                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td>{value.salary}</td>
                                                <td>{value.designation}</td>
                                            </tr>
                                            }
                                        )
                                    }
                                </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View