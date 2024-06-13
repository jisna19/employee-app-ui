import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Search = () => {
    const [data,changedata]=useState(
        {
            "name":""
           } 
    )
    const [result,changeresult]=useState([])
    const inputHandler = (event) => {
        changedata({ ...data, [event.target.name]: event.target.value })
    }
    const deleteemployee=(id)=>{
        let input={"_id":id}
        axios.post("http://localhost:8081/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully deleted")
                    
                } else {
                    alert("something went wrong")
                    
                }
            }
        ).catch().finally()
    }
   const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8081/search",data).then(
            (response)=>{
                console.log(response.data )
                changeresult(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
  return (
    <div>
    <NavBar/>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">name</label>
                        <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-success" onClick={readValue}>search</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">salary</th>
      <th scope="col">designation</th>
    </tr>
  </thead>
  <tbody>
    {
        result.map(
            (value,index)=>{
                return  <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.salary}</td>
                <td>{value.designation}</td>
                <td>
                    <button className="btn btn-danger" onClick={()=>{deleteemployee(value._id)}}>Delete</button>
                </td>

              </tr>
            }
        )
    }
   
  </tbody>
</table>
        </div>
    </div>
    </div>
  )
}

export default Search