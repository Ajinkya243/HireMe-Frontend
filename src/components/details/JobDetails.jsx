
import Nav from "../nav/Nav";
import {useSearchParams} from 'react-router-dom'
import { useQuery } from "@tanstack/react-query";
import useFetchDetails from "../../utils/fetchDetails/useFetchDetails";
import { ClipLoader } from "react-spinners";
const JobDetails=()=>{
    const[searchparams]=useSearchParams();
    const id=searchparams.get("id");

    const{data,isLoading,error}=useQuery({
        queryKey:['job',id],
        queryFn:useFetchDetails
    })
    
    return(
        <div>
            <Nav/>
            <div className="container py-5">
                {isLoading && <p className="text-center"><ClipLoader/></p>}
                {error && <p className="text-center">Error occur while fetching data.</p>}
            {data && (
                <div>
                    <h5 className="fs-3">{data.title}</h5>
                    <div className="card">
                            <div className="card-body fs-5">
                                <p><strong>Company Name:</strong> {data.companyName}</p>
                                <p><strong>Location:</strong> {data.location}</p>
                                <p><strong>Salary:</strong> {data.salary}</p>
                                <p><strong>Job Type:</strong> {data.jobType}</p>
                                <p><strong>Description:</strong> {data.description}</p>
                                <p><strong>Qualifications:</strong>
                                <ol>
                                    {data.qualification.split(',').map(el=>(
                                        <li>{el}</li>
                                    ))}
                                </ol>
                                </p>
                            </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    )

}
export default JobDetails;