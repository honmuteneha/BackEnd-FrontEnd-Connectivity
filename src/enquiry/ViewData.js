import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';

function ViewData(){
    const [enquiry,setProduct]=useState([]);

    const getData=()=>{
        axios.get('http://localhost:9091/enquiry/getAllData')
        .then((res)=>setProduct(res.data))
    }
    useEffect(getData,[])
    function deleteEnquiry(applicant_Id)
    {
      
      axios.delete(`http://localhost:9091/enquiry/del/${applicant_Id}`)
      .then(res=>{
        if(res.status===200)
        {
            alert("Enquiry details removed..")
            window.location.reload();
        }
      })
      .catch(error=>console.log(error));
      
    }

    return(
        <div>
           <table className="table table-hover">
            <thead>
                <tr>
                    <th>Applicant_Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Email</th>                                     
                    <th>MobileNo</th>
                    <th>Alternate MobileNo</th>
                    <th>PanCard</th>
                    <th>AdharCard</th>                                     
                    <th>Address</th>
                    <th>City</th>
                    <th>CibilId</th>
                    <th>CibilScore</th>
                    <th>Status</th>
                    <th>CibilScoreDateandTime</th>
                    <th>Remark</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    enquiry.map((enquiry)=><tr>
                        <td>{enquiry.applicant_Id}</td>
                        <td>{enquiry.first_Name}</td>
                        <td>{enquiry.last_Name}</td>
                        <td>{enquiry.age}</td>
                        <td>{enquiry.email}</td>
                        <td>{enquiry.mobileNo}</td>
                        <td>{enquiry.alternateMobileNo}</td>
                        <td>{enquiry.pancardNo}</td>
                        <td>{enquiry.adharNo}</td>
                        <td>{enquiry.address}</td>
                        <td>{enquiry.city}</td>
                        {/* <td>{enquiry.cibilScore.cibilId}</td>
                        <td>{enquiry.cibilScore.cibilScore}</td>
                        <td>{enquiry.cibilScore.status}</td>
                        <td>{enquiry.cibilScore.cibilScoreDateandTime}</td>
                        <td>{enquiry.cibilScore.remark}</td> */}
                        <td>
                            <button className="btn btn-outline-danger me-4" onClick={()=>deleteEnquiry(enquiry.applicant_Id)}><i class="bi bi-trash3-fill"></i></button>
                            <Link className="btn btn-outline-primary" to={`/edit/${enquiry.applicant_Id}`}><i class="bi bi-pencil-square"></i></Link>
                        </td>
                        </tr>)
                }
                </tbody> 
           </table>
        </div>
    )
}
export default ViewData;