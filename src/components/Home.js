import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate()
    let [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
        console.log(event.target.value)
        setSelectedValue(event.target.value);
      };
    
    const handleClick = () => {
        if(selectedValue=="") selectedValue=1
        navigate(`/chapter-${selectedValue}`);
        // console.log(selectedValue);
      };

  return (
    <>
    <div className="input-group container" style={{marginTop:"230px", marginBottom:"130px"}}>
  <select className="custom-select" id="inputGroupSelect04" onChange={handleChange}>
    <option selected>Select the chapter</option>
    <option value="1">Chapter One - अर्जुनविषादयोग</option>
    <option value="2">Chapter Two - सांख्ययोग</option>
    <option value="3">Chapter Three - कर्मयोग</option>
    <option value="4">Chapter Four - ज्ञानकर्मसंन्यासयोग</option>
    <option value="5">Chapter Five - कर्मसंन्यासयोग</option>
    <option value="6">Chapter Six - ध्यानयोग</option>
    <option value="7">Chapter Seven - ज्ञानविज्ञानयोग</option>
    <option value="8">Chapter Eight - अक्षरब्रह्मयोग</option>
    <option value="9">Chapter Nine - राजविद्याराजगुह्ययोग</option>
    <option value="10">Chapter Ten - विभूतियोग</option>
    <option value="11">Chapter Eleven - विश्वरूपदर्शनयोग</option>
    <option value="12">Chapter Twelve - भक्तियोग</option>
    <option value="13">Chapter Thirteen - क्षेत्र-क्षेत्रज्ञविभागयोग</option>
    <option value="14">Chapter Fourteen - गुणत्रयविभागयोग</option>
    <option value="15">Chapter Fifteen - पुरुषोत्तमयोग</option>
    <option value="16">Chapter Sixteen - दैवासुरसम्पद्विभागयोग</option>
    <option value="17">Chapter Seventeen - श्रद्धात्रयविभागयोग</option>
    <option value="18">Chapter Eighteen - मोक्षसंन्यासयोग</option>
  </select>
  <div className="input-group-append">
    <button className="btn btn-dark" onClick={handleClick} type="button" >Submit</button>
  </div>
</div>
</>
  )
}

export default Home