import React,{useState, useContext} from 'react'
import {SearchContent} from ".//searchContent"
import { useParams } from 'react-router-dom';
import '../app.css'
import JSONDATA from '../data/plants.json'
import {PlantContext} from "../app.js"


function PlantInfo (props) {
  const [searchTerm,setSearchTerm] = useState('')
  const [addedPlant, setAddedPlant] = useState(false)
  const params = useParams()
  const {plants,addNewPlant, deleteNewPlant} = useContext(PlantContext)
  const addButtonClicked =() =>{
    addNewPlant(params.name);
    setAddedPlant(true)
  }
  const deleteButtonClicked =() =>{
    deleteNewPlant(params.name);
    setAddedPlant(true)
  }
  const result = JSONDATA.filter(plant => plant.name == params.name)[0]
    return(
      <div className = "search">
      <h1 style = {{padding: "12px"}}>
        Plant Name: {params.name}
      </h1>
        <table className = "plantTable">
          <tr>
            <td>Plant Species</td>
            <td>{<input type="text" placeholder={result.name} style={{width: "400px"}}
              onChange={e=>setSearchTerm(e.target.value)}/>}
            </td>
          </tr>
          <tr>
            <td>Fertilizer</td>
            <td>{result.fertilizer}</td>
          </tr>
          <tr>
            <td>Water Temperature</td>
            <td>{result.waterTemp}</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td>{result.humidity}</td>
          </tr>
          <tr>
            <td>Growing Season</td>
            <td>{result.growingSeason}</td>
          </tr>
          <tr>
            <td>Environment Temperatrue</td>
            <td>{result.envTemp}</td>
          </tr>
          <tr>
            <td>Used For</td>
            <td>{result.usedFor}</td>
          </tr>
          <tr>
            <td>Light Levels</td>
            <td>{result.lightLevels}</td>
          </tr>
        </table>
        <br/>
        <button className = "addButton" onClick = {deleteButtonClicked}>
          Delete Plant
        </button>
        {addedPlant && <div style={{color:"green"}}>Plant Added!</div>}
        <button className = "addButton" onClick = {addButtonClicked}>
          Add to Profile
        </button>
        {addedPlant && <div style={{color:"green"}}>Plant Added!</div>}
      </div>

    )
}
export default PlantInfo;
