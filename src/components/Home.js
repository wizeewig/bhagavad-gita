import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate()
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };
    
    const handleClick = () => {
        navigate(`/chapter-${selectedValue}`);
        console.log(selectedValue);
      };

  return (
    <div class="input-group container" style={{marginTop:"150px"}}>
  <select class="custom-select" id="inputGroupSelect04" onChange={handleChange}>
    <option selected>Select the chapter</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>
    <option value="6">Six</option>
    <option value="7">Seven</option>
    <option value="8">Eight</option>
    <option value="9">Nine</option>
    <option value="10">Ten</option>
    <option value="11">Eleven</option>
    <option value="12">Twelve</option>
    <option value="13">Thirteen</option>
    <option value="14">Fourteen</option>
    <option value="15">Fifteen</option>
    <option value="16">Sixteen</option>
    <option value="17">Seventeen</option>
    <option value="18">Eighteen</option>
  </select>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" onClick={handleClick} type="button" style={{ backgroundImage: "linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%)", fontWeight:"bold"}}>Submit</button>
  </div>
</div>
  )
}

export default Home