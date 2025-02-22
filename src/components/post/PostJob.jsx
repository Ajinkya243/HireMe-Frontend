import Nav from "../nav/Nav";
import { toast } from 'react-toastify';
import { useState } from "react";
const PostJob=()=>{
    const[formData,setFormData]=useState({});
    const handleChange=(event)=>{
        const{value,name}=event.target;
        setFormData(prev=>({...prev,[name]:value}))
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        const resp=await fetch("https://hire-me-backend-pi.vercel.app/jobs",{
            method:"POST",
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        if(!resp.ok){
            toast.error("Error occur while posting job.")
            return ;
        }
        toast.success("Job posted successfully.")
        
    }
    return(
        <div>
            <Nav/>
            <div className="container py-3 fs-3">
            <form onSubmit={handleSubmit}>
                <h2 className="display-5">Post Job</h2>
            <div>
                <label htmlFor="inputTitle">Job Title:</label><br />
                <input type="text" name="title" id="inputTitle" className="form-control" onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="inputCompany">Company Name:</label> <br />
                <input type="text" name="companyName" id="inputCompany" className="form-control" onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="inputLocation">Location:</label> <br />
                <input type="text" id="inputLocation" name="location" className="form-control" onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="inputSalary">Salary:</label> <br />
                <input type="number" id="inputSalary" name="salary" className="form-control" onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="inputType">Job Type:</label>
                <select name="jobType" id="inputType" className="form-select" onChange={handleChange} required>
                    <option value="">Select anyone</option>
                    <option value="Full-time (On-site)">Full-time (On-site)</option>
                    <option value="Part-time (On-site)">Part-time (On-site)</option>
                    <option value="Full-time (Remote)">Full-time (Remote)</option>
                    <option value="Part-time (Remote)">Part-time (Remote)</option>
                </select>
            </div>
            <div>
                <label htmlFor="inputDesc">Job Description:</label><br />
                <textarea name="description" id="inputDesc" rows={2} className="form-control" onChange={handleChange} required></textarea>
            </div>
            <div>
            <label htmlFor="inputQualification">Job Qualifications: (use " , " for separator)</label> <br />
            <textarea name="qualification" id="inputQualification" rows={2} className="form-control" onChange={handleChange} required></textarea>
            </div>
            <br />
            <input className="btn btn-primary" type="submit" value="Post Job" />
            </form>
            </div>
        </div>
    )
}
export default PostJob;