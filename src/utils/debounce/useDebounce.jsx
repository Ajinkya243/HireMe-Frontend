const { useEffect, useState } = require("react")

const useDebounce=(title,delay=500)=>{
    const[debounce,setDebounce]=useState('');
    useEffect(()=>{
        const handler=setTimeout(()=>{
            setDebounce(title);
        },500)

        return ()=>clearTimeout(handler);
    })
    return debounce;
}
export default useDebounce;