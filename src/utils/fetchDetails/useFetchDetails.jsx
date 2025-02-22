
const useFetchDetails=async({queryKey})=>{
    const key=queryKey[1];
    const resp= await fetch(`https://hire-me-backend-pi.vercel.app/jobs/${key}`);
    if(!resp.ok){
        throw Error("Error occur")
    }
    return  resp.json()
}
export default useFetchDetails;