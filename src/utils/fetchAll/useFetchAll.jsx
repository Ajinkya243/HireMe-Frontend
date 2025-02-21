
const useFetchAll=async()=>{
    const resp=await fetch("https://hire-me-backend-pi.vercel.app/jobs");
    if(!resp.ok){
        throw Error("Error occur while fetching data.")
    }
    return resp.json();
}
export default useFetchAll;