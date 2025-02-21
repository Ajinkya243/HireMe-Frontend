
import JobGrid from "../jobGrid/JobGrid";
import useDebounce from "../../utils/debounce/useDebounce";

const Jobs=({title,setTitle,type,setType})=>{
    const inputTitle=useDebounce(title,500);
    return(
        <div className="container py-3">
        <div className="row gap-5">
            <div className="col col-md-6">
        <input type="text" className="form-control" placeholder="Search by job title" value={title} onChange={(event)=>setTitle(event.target.value)}/>
        </div>
        <div className="col col-md-4">
        <select className="form-select" name="" id="" value={type} onChange={event=>setType(event.target.value)}>
            <option value="All">All</option>
            <option value="Full-time (On-site)">Full-time (On-site)</option>
            <option value="Part-time (On-site)">Part-time (On-site)</option>
            <option value="Full-time (Remote)">Full-time (Remote)</option>
            <option value="Part-time (Remote)">Part-time (Remote)</option>
        </select>
        </div>
        </div>
        <JobGrid title={inputTitle} type={type}/>
        </div>
    )
}

export default Jobs;