
import { ClipLoader } from 'react-spinners';
import {Link} from 'react-router-dom'
import useFetchAll from "../../utils/fetchAll/useFetchAll";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const JobGrid=({title,type})=>{
    const[jobs,setJobs]=useState([]);
    const {data,isLoading,error}=useQuery({
        queryKey:['jobs'],
        queryFn:useFetchAll
    })

    const handleDelete=async(id)=>{
        const resp=await fetch(`https://hire-me-backend-pi.vercel.app/jobs/${id}`,{
            method:"DELETE"
        })
        if(!resp.ok){
            toast.error("Error occur while deleting job")
            return;
        }
        toast.success("Job deleted successfully");
        setTimeout(()=>{
            window.location.reload();
        },3000)
        
    }
    
    useEffect(()=>{
        if(data){
        const filterData=data.filter(el=>el.title.toLowerCase().includes(title.toLowerCase()) && (type==='All' || el.jobType===type));
        setJobs(filterData);
        }
    },[title,type,data])
    
    return(
        <div className="py-5">
        <h2 className='display-5'>All Jobs</h2>
        {isLoading && <p className="text-center"><ClipLoader/></p>}
        {error && <p>Error Occur while fetching data.</p>}
        <div className="row g-5">
        {jobs.length===0 && !isLoading && <p>No Such jobs found</p>}
        {jobs && jobs.map(el=>(
            <div key={el._id} className="col col-md-4 col-sm-12 col-12">
            <div className="card">
                <div className="card-body fs-5">
                    <p className='display-6'><strong>{el.title}</strong></p>
                    <p><strong>Company Name:</strong> {el.companyName}</p>
                    <p><strong>Location:</strong> {el.location}</p>
                    <p><strong>Job Type:</strong> {el.jobType}</p>
                    <div className="row gap-2 ">
                        <Link className="btn btn-primary col-md-5" to={`/jobs/_id?id=${el._id}`}>See Details</Link>
                        <button className="btn btn-danger col-md-5" onClick={()=>handleDelete(el._id)}>Delete</button>
                    </div>
                </div>
            </div>
            </div>
        ))}
        </div>
        
        </div>
    )
}
export default JobGrid;