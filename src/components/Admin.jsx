import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Admin() {
  const base_url='http://localhost:8000'

 const[admindata,setAdmindata]=useState([])

 const fetchData=async()=>{
  const result = await axios.get(`${base_url}/get-all-employees`)
  console.log(result);
  setAdmindata(result.data.employees)
 }
console.log(admindata);
const deleteEmp=async(id)=>{
  const result = await axios.delete(`${base_url}/delete-an-employee/${id}`)
  console.log(result);
  alert(result.data.message)
  fetchData()
}

 useEffect(()=>{fetchData()},[])

  return (
    <div>
        <div className='row mx-auto ' style={{width:'100%',}} >
       <div className='col'>
       <h1 style={{marginLeft:'90px',fontSize:'90px'}} className='mt-5'><b>EMPLOYEE <br /> MANAGMENT <br /> SYSTEM</b></h1>
        <div style={{width:'500px',textAlign:'justify',marginLeft:'90px'}}>
            <p>
            Employee management refers to the processes used to ensure employees perform their best. It consists of keeping track of employees’ achievements and progress, fostering healthy professional relationships and giving them the tools they need to succeed. Done right, employees will be motivated to fulfill the organization’s objectives. It can also lead to a boost in employee productivity, satisfaction, retention and engagement.
            </p>
        </div>
       </div>
        <div className='col'>
          <img style={{width:'550px',marginTop:'100px'}} src="https://cdni.iconscout.com/illustration/premium/thumb/hr-managers-searching-new-employee-2645885-2218316.png" alt="" />
        </div>

      </div>
        <Link to={'/add'}> <div style={{textAlign:'end',marginRight:'100px'}}>
      <Button   variant="primary">Add</Button>
      </div> 
      </Link> 
        <div className='container'>
        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
        <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Designation</th>
          <th scope='col'>Salary</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {admindata.map(a=>(  <tr>
          <td>
           {a.id}
          </td>
          <td>
         
           {a.Name}
          </td>
          <td>
       {a.Age}
          </td>
          <td> {a.Designation}</td>
          <td>
           {a.Salary}
          </td>
          <td >
         <div className='d-flex justify-content-evenly'>
        <Link to={`/view/${a.id}`}> <i class="fa-solid fa-eye"></i></Link>
        <Link to={`/edit/${a.id}`}> <i className='fa-solid fa-pen '></i></Link>
          <a href=""><i onClick={()=>deleteEmp(a.id)} className='fa-solid fa-trash '></i></a>
         </div>
          </td>
        </tr>))}
      
      </MDBTableBody>
    </MDBTable>
        </div>


    </div>
  )
}

export default Admin