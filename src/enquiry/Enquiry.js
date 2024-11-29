import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';


function Enquiry()
{
    const {register,handleSubmit,reset}= useForm();    
    const saveData=enquiry=>{
        
        axios.post('http://localhost:9091/enquiry/getAllData',enquiry)
        .then(res=>{
            if(res.status===201){
                alert("Product Deatils Saved..")
                reset();
            }
        })
        .catch(error=>console.log(error));
    }
       

    return(
        <div className="d-flex justify-content-center">
            <div className="bg-white w-50 mt-3 p-3 "style={{border: '2px solid #000', width:'100px'}}>
               
                <h1 className="text-center fs-3 text-primary" >Enter Enquiry Details...</h1>
                <form onSubmit={handleSubmit(saveData)} >
                    <div>
                        <label className="form-label">Enter Applicant Id </label>
                        <input type="text" {...register('applicant_Id')}  className="form-control border border-dark"></input>
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
                    <div>
                        <label className="form-label" hidden>Enter Cibil Id</label>
                        <input type="text" {...register('enquiry.cibilId')} value={0} hidden className="form-control border border-dark"></input>
                    </div>
                    <div>
                        <label className="form-label" hidden>Enter Cibil Scoure</label>
                        <input type="text" {...register('enquiry.cibilScore')} value={"hidden"}  className="form-control border border-dark"></input>
                    </div>
                    <div>
                        <label className="form-label" hidden>Enter Cibil Status</label>
                        <input type="text" {...register('enquiry.status')} value={"pending"} hidden className="form-control border border-dark"></input>
                    </div>

                    <button className="btn btn-success mt-3">Submit</button>

                </form>
            </div>
        </div>
    )
}
export default Enquiry;