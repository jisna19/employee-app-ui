import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {
    const [data,changedata]=useState([])
        const fetchData = () => {
            axios.get("http://localhost:8080/view").then(
                (response) => {
                    console.log(response.data)
                    changedata(response.data)
                }
            ).catch(
                (error) => {
                    alert(error.message)
                }).finally()
        }
        useEffect(()=>{fetchData() },[])
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