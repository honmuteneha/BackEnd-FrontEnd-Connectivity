import axios from "axios";
import React, { useEffect, useState } from "react";


function ViewData(){
    const [enquiry,setProduct]=useState([]);

    const getData=()=>{
        axios.get('http://localhost:9091/enquiry/getAllData')
        .then((res)=>setProduct(res.data))
    }
    useEffect(getData,[])

    return(
        <div>
           <table className="table table-hover">
            <thead>
                <tr>
                    <th>Applicant_Id</th>
                    <th>First Name</th>
                    <th> Last Name</th>
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
                        <td>{enquiry.cibilScore.cibilId}</td>
                        <td>{enquiry.cibilScore.cibilScore}</td>
                        <td>{enquiry.cibilScore.status}</td>
                        <td>{enquiry.cibilScore.cibilScoreDateandTime}</td>
                        <td>{enquiry.cibilScore.remark}</td>
                        </tr>)
                }
                </tbody> 
           </table>
        </div>
    )
}
export default ViewData;