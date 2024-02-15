import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function View() {
  
  const base_url='http://localhost:8000'
  const {id}= useParams();
  console.log(id);
  const [employeeData,setEmployeedata]=useState({})
  
  const getEmployee=async(id)=>{
    const result = await axios.get(`${base_url}/get-an-employee/${id}`)
    console.log(result.data);
    setEmployeedata(result.data.employees)
  
  }
  console.log(employeeData);

  useEffect(()=>{getEmployee(id)},[])

  return (
    <div>
      <h3>Employee Details :</h3>
          
           <div className='row mx-auto'>
            <div  className='col p-3'>


              <div className=' card shadow  mt-5' style={{width:'500px',marginLeft:'150px'}}>
                id : {employeeData.id}
             <div style={{backgroundColor:'black',height:'1px'}}></div>
                <div className='m-3'>
                  <h1><i class="fa-solid fa-user"></i> <b> {employeeData.Name}</b></h1>
                  <div style={{backgroundColor:'black',height:'1px'}}></div>
                  <p>{employeeData.Designation}</p>
                  <p>Age : {employeeData.Age}</p>
                   <p>Salary : {employeeData.Salary}</p>
                </div>

              </div>

            </div>
            <div  className='col'>
                    <img style={{width:'410px',marginLeft:'100px'}} src="https://static.vecteezy.com/system/resources/previews/003/471/726/large_2x/starting-new-job-concept-free-vector.jpg" alt="" />
            </div>
           </div>

           <div className='text-center m-5'><a className='btn btn-primary' href="/">Back to home</a></div>
    
    </div>
  )
}

export default View