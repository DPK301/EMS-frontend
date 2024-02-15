import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Add() {
  const location = useNavigate()

  const [id,setId]=useState('')
  const [Name,setName]=useState('')
  const [Age,setAge]=useState('')
  const [Designation,setDesig]=useState('')
  const [Salary,setSal]=useState('')
console.log(id);

const base_url='http://localhost:8000/add-an-employee'
  const addemp = async(e)=>{
    e.preventDefault()
    console.log(id,Name,Age,Designation,Salary);
    //API call to add employee details to mongoDB
    const body={id,Name,Age,Designation,Salary}
    const result = await axios.post(base_url,body).then((result)=>{console.log(result); alert(result.data.message)
    location('/')}).catch((error)=>{alert('please enter a unique employee id')})
    console.log(result);

  }

  return (
    <div>
      <div className="container mb-5 mt-5">
        <h2><b>Enter Details</b></h2>
        <form>
        <MDBInput onChange={e=>setId(e.target.value)}  label='Id' id='form1' type='number' />
        <br />
        <MDBInput  onChange={e=>setName(e.target.value)} label='Name' id='form1' type='text' />
        <br />
        <MDBInput  onChange={e=>setAge(e.target.value)} label='Age' id='form1' type='text' />
        <br />
        <MDBInput  onChange={e=>setDesig(e.target.value)} label='Designation' id='form1' type='text' />
        <br />
        <MDBInput  onChange={e=>setSal(e.target.value)} label='Salary' id='form1' type='text' />
        </form>
        <MDBBtn onClick={e=>addemp(e)}  className='mt-3'>Add</MDBBtn>
      </div>
    </div>
  )
}

export default Add