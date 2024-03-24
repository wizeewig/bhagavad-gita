import React, { useEffect, useState } from 'react'
import Verses from './Verses'
import Spinner from './Spinner'

function Chapter(props) {

    const chap= props.ch
    const [articles, setArticles]=useState([])
    const [loading, setLoading]=useState(true)
    let result


const updateChapter = async() => {
    const url = `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${props.ch}/verses/`;
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
    <div style={{marginTop:"120px", fontSize:"30px", fontWeight:"bold", textAlign:"center"}}>🙇‍♂️  Chapter- {chap} 🙇‍♀️ </div>
    {loading && <Spinner />}
    <div className="container">
            <div className="row">
              {
                !loading && articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.slug}>
                      <Verses
                        verseNumber={element.verse_number}
                        text={element.text}
                        transliteration={element.transliteration}
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