import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function SolutionVerses() {

const location = useLocation();
  const data = location.state;
  const ch=data.ch;
  const verse=data.vno;
    let result;

    const [text, setText]=useState("")
    const [trans, setTrans]=useState("")
    const [translation, setTranslation]=useState("")
    const [meaning, setMeaning]=useState("")

    const updateSolution = async() =>{
        const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${ch}/verses/${verse}/`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aa6a8ef50bmshe066599c7a29ed9p1b2ec2jsn7053a0bc678f',
		'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	 result = await response.json();
     setText(result.text)
     setTrans(result.transliteration)
     console.log(result.translation)
     setTranslation(result.translations[1].description)
     setMeaning(result.commentaries[13].description)
	// console.log(result);
} catch (error) {
	console.error(error);
}
    }

  useEffect(() => {
    document.title = `Chapter- ${ch} Verse - ${verse}`
    updateSolution();
  }, [])

  return (
    <>
    <div class="jumbotron" style={{marginTop:"120px"}}>
  <h1 class="display-4">Chapter {ch} Verse {verse}</h1>
  <p class="lead">{text}</p>
  <hr class="my-4"/>
  <p><span style={{fontWeight:"bold"}}>Transliteration:</span> {trans}</p>
  <p><span style={{fontWeight:"bold"}}>Translation:</span> {translation}</p>
  <p><span style={{fontWeight:"bold"}}>Meaning:</span> {meaning}</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg btn-dark" target='_blank' href={`https://bhagavadgita.io/chapter/${ch}/verse/${verse}`} role="button">Learn more</a>
  </p>
  <p class="lead">
    <a class="btn btn-primary btn-lg btn-dark" target='_blank' href="https://youtu.be/28sptQICKCk?feature=shared" role="button">Youtube</a>
  </p>
</div>
    </>
  )
}

export default SolutionVerses