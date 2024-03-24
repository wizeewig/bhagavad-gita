import React, { useEffect, useState } from 'react'
import Verses from './Verses'
import Spinner from './Spinner'

function Chapter(props) {

    const chap= props.ch
    const [articles, setArticles]=useState([])
    const [chname, setchName] = useState('')
    const [chnametranslated, setchNametranslated] = useState('')
    const [meaning, setmeaning] = useState('')
    const [summaryeng, setsummaryeng] = useState('')
    const [summaryhindi, setsummaryhindi] = useState('')
    const [versescount, setversescount] = useState('')
    const [loading, setLoading]=useState(true)
    let result; let result1;


const updateChapter = async() => {
    const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${props.ch}/verses/`;
    const url1 = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${props.ch}/`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aa6a8ef50bmshe066599c7a29ed9p1b2ec2jsn7053a0bc678f',
		'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
	}
};

try {
    const response1 = await fetch(url1, options);
    result1 = await response1.json();
    setchName(result1.name)
    setchNametranslated(result1.name_translated)
    setmeaning(result1.name_meaning)
    setsummaryeng(result1.chapter_summary)
    setsummaryhindi(result1.chapter_summary_hindi)
    setversescount(result1.verses_count)

	const response = await fetch(url, options);
	 result = await response.json();
    setArticles(result)
    setLoading(false)

} catch (error) {
	console.error(error);
}
  }

useEffect(() => {
    document.title = `Chapter- ${props.ch}`
    updateChapter();
  }, [])

  return (
    <>
    {/* <div style={{marginTop:"120px", marginBottom:"20px", fontSize:"30px", fontWeight:"bold", textAlign:"center"}}>🙇‍♂️  Chapter- {chap} 🙇‍♀️ </div> */}
    <div className="container" style={{marginTop:"120px"}}>
    <div className="jumbotron">
    <h1 style={{marginTop:"-30px", marginBottom:"25px",  textAlign:"center"}}>🙇‍♂️  Chapter- {chap} 🙇‍♀️ </h1>
  <p style={{fontSize:"30px", textAlign:"center", marginBottom:"25px"}}>{chname} - {chnametranslated}</p>
  <p className="lead"><span style={{fontWeight:"normal"}}>Meaning:</span> {meaning}</p>
  <hr className="my-4"/>
  <p className="lead"><span style={{fontWeight:"normal"}}>Summary English:</span> {summaryeng}</p>
  <p className="lead"><span style={{fontWeight:"normal"}}>हिन्दी सारांश:</span> {summaryhindi}</p>
  <p className="lead"><span style={{fontWeight:"normal"}}>Verses Count:</span> {versescount}</p>
  <p className="lead">
    <a className="btn btn-lg btn-dark" href={`https://bhagavadgita.io/chapter/${props.ch}`} target='_blank' role="button">Learn more</a>
  </p>
</div>
    {loading && <Spinner />}
            <div className="row">
              {
                !loading && articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.slug}>
                      <Verses
                        chnumber={props.ch}
                        verseNumber={element.verse_number}
                        text={element.text}
                        transliteration={element.transliteration}
                        english={element.translations[0].description}
                        hindi={element.translations[3].description}
                      />
                    </div>
                  );
                })}
            </div>
            </div>
    </>
  )
}

export default Chapter