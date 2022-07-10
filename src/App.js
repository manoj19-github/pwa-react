import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import {fetchByUserId} from "./services"
function App() {
  const [data,setData]=useState(null)
  const [loading,setLoading]=useState(false)
  const [query,setQuery]=useState("")
  useEffect(()=>{
    const fetchData=async(id)=>{
      setLoading(true)
      const tempData=await fetchByUserId(id)
      setLoading(false)
      setData(tempData)
    }
    !!query && fetchData(query)
  },[query])

  return (
    <div className="main-container">
      <input 
        type="number"
        className="search"
        placeholder="Search User..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {!!data && (
        <div className='city'>
          <h1>Name : {data.name}</h1>
          <h5>Email : {data.email} </h5>
          <p>City : {data.address.city}</p>
        </div>
      )
      }
      
    </div>
  );
}

export default App;
