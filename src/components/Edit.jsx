import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

function Edit() {
  const [eid,setId]=useState('')
  const [eName,setName]=useState('')
  const [eAge,setAge]=useState('')
  const [eDesignation,setDesig]=useState('')
  const [eSalary,setSal]=useState('')

  const {id}=useParams()
  console.log(id);
  const getEmployee=async(id)=>{
    const result = await axios.get(`${base_url}/get-an-employee/${id}`)
    console.log(result.data);
   
    setId(result.data.employees.id)
    setName(result.data.employees.Name)
    setAge(result.data.employees.Age)
    setDesig(result.data.employees.Designation)
    setSal(result.data.employees.Salary)
    

  
  }
 

  useEffect(()=>{getEmployee(id)},[])

  const location = useNavigate()

  const base_url='http://localhost:8000'
  const updateemp=async(e)=>{
    e.preventDefault()
    const body = {
      id:eid,Name:eName,Age:eAge,Designation:eDesignation,Salary:eSalary
    }
      const result = await axios.post(`${base_url}/update-an-employee/${id}`,body)
      console.log(result);
      alert(result.data.message)
      location('/')
  }

  return (
    <div>
       <div className="container mb-5 mt-5">
        <h2><b>Edit Details</b></h2>
        <form>
        <MDBInput onChange={e=>setId(e.target.value)} value={eid} label='Id' id='form1' type='number' readOnly />
        <br />
        <MDBInput  onChange={e=>setName(e.target.value)} value={eName} label='Name' id='form1' type='text' />
        <br />
        <MDBInput  onChange={e=>setAge(e.target.value)} value={eAge} label='Age' id='form1' type='text' />
        <br />
        <MDBInput  onChange={e=>setDesig(e.target.value)} value={eDesignation} label='Designation' id='form1' type='text' />
        <br />
        <MDBInput  onChange={e=>setSal(e.target.value)} value={eSalary} label='Salary' id='form1' type='text' />
        </form>
        <MDBBtn onClick={e=>updateemp(e)}  className='mt-3'>update</MDBBtn>
      </div>
    </div>
  )
}

export default Edit