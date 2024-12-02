import axios from 'axios';
import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { data, useParams } from "react-router-dom";


function Enquiry()
{
    const {register,handleSubmit,reset,setValue}= useForm();    
    const {applicant_Id} = useParams();
    const saveData=enquiry=>{
        if(!applicant_Id)
        {
        axios.post('http://localhost:9091/enquiry/save',enquiry)
        .then(res=>{
            if(res.status===201){
                alert("Enquiry Deatils Saved..")
                reset();
            }
        })
        .catch(error=>console.log(error));
    }
    else{
        axios.put(`http://localhost:9091/enquiry/edit/${applicant_Id}`,enquiry)
        .then(res=>{
            if(res.status===201){
                alert("Enquiry Details updated..")
            }
        })
        .catch(error=>console.log(error));
      }
    }
    const getEditData=enquiry=>{
        if(applicant_Id)
            {
        axios.get(`http://localhost:9091/enquiry/getsingledata/${applicant_Id}`)
        .then(res=>{
            for(let prop in res.data)
                {
                    setValue(prop,res.data[prop])
                }
            })
        }              
    }
    useEffect(getEditData,[]);
    return(
        <div className="d-flex justify-content-center">
            <div className="bg-white w-50 mt-3 p-3 "style={{border: '2px solid #000', width:'100px'}}>
               <h1>{applicant_Id}</h1>
                <h1 className="text-center fs-3 text-primary" >Enter Enquiry Details...</h1>
                <form onSubmit={handleSubmit(saveData)} >
                    <div>
                        <label className="form-label">Enter Applicant Id </label>
                        <input type="text" {...register('applicant_Id')} className="form-control border border-dark"></input>
                    </div>
                    <div>
                        <label className="form-label">Enter First Name </label>
                        <input type="text" {...register('first_Name')} className="form-control border border-dark"></input>
                    </div>
                    <div>
                        <label className="form-label">Enter Last Name </label>
                        <input type="text" {...register('last_Name')} className="form-control border border-dark"></input>
                    </div>
                    <div>
                        <label className="form-label">Enter Age </label>
                        <input type="text" {...register('age')} className="form-control border border-dark"></input>
                    </div>
                    <div>
                        <label className="form-label">Enter Email </label>
                        <input type="text" {...register('email')} className="form-control border border-dark"></input>
                    </div>
                    <div>
                        <label className="form-label">Enter Mobile no</label>
                        <input type="text" {...register('mobileNo')} className="form-control border border-dark"></input>
                    </div>
                    <div>
                        <label className="form-label">Enter Alternate Mobile no </label>
                        <input type="text" {...register('alternateMobileNo')} className="form-control border border-dark"></input>
                    </div>
                    <div>
                        <label className="form-label">Enter Pan Card no </label>
                        <input type="text" {...register('pancardNo')} className="form-control border border-dark"></input>
                    </div>
                    <div>
                        <label className="form-label">Enter Adhar no </label>
                        <input type="text" {...register('adharNo')} className="form-control border border-dark"></input>
                    </div>
                    <div>
                        <label className="form-label">Enter Address</label>
                        <input type="text" {...register('address')} className="form-control border border-dark"></input>
                    </div>
                    <div>
                        <label className="form-label">Enter City </label>
                        <input type="text" {...register('city')} className="form-control border border-dark"></input>
                    </div>
                    {/* <div>
                        <label className="form-label" hidden>Enter Cibil Id</label>
                        <input type="text" {...register('enquiry.cibilScore.cibilId')} value={"pending"} hidden className="form-control border border-dark"></input><br></br>
                    </div>
                    <div>
                        <label className="form-label" hidden>Enter Cibil Scoure</label>
                        <input type="text" {...register('enquiry.cibilScore.cibilScore')} value={"pending"}  hidden className="form-control border border-dark"></input>
                    </div>
                    <div>
                        <label className="form-label" hidden>Enter Cibil Status</label>
                        <input type="text" {...register('enquiry.cibilScore.status')} value={"pending"} hidden className="form-control border border-dark"></input>
                    </div>
                    <div>
                        <label className="form-label" hidden>Enter Cibil CibilScoreDateandTime</label>
                        <input type="text" {...register('enquiry.cibilScore.cibilScoreDateandTime')} value={"pending"} hidden className="form-control border border-dark"></input>
                    </div>
                    <div>
                        <label className="form-label" hidden>Enter Cibil Remark</label>
                        <input type="text" {...register('enquiry.cibilScore.remark')} value={"pending"} hidden className="form-control border border-dark"></input>
                    </div> */}                  

                    <button className="btn btn-success mt-3">Submit</button>

                </form>
            </div>
        </div>
    )
}
export default Enquiry;