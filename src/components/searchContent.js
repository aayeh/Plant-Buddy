import React,{useState} from 'react'
import {Link} from "react-router-dom"
import JSONDATA from '../data/plants.json'
import '../app.css'
import PlantInfo from "./plantInfo.js"
import { Route } from 'react-router-dom';


function SearchContent () {
  const [searchTerm,setSearchTerm] = useState('')

  return (
    <div className="search">

    <br/>
      <input type="text" placeholder="seach by name..." style={{width: "400px"}}
      onChange={e=>setSearchTerm(e.target.value)}/>
      <br/>
      
      {JSONDATA.filter((val)=>{
        if(searchTerm == ""){
          return val
        }
        else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
          return val;
        }
      }).map((val,key)=>{
        <Route path={'/search'+val.name} render={() => <PlantInfo/>}/>

        return (

          <Link to= {'/search/'+val.name}>
          <button className="button">

          {val.name}
          </button>
          </Link>

        )

      })}


    </div>
  );
}

export default SearchContent;
