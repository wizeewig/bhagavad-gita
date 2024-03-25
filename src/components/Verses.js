import React from 'react'
import { Link } from 'react-router-dom';

function Verses(props) {

    let {text, chnumber, verseNumber, transliteration, translation, meaning} = props;

    return (
        <>
        <div className='my-3'>
          <div className="card">
            <div style={{display:'flex', justifyContent:'end', position:'absolute', right:'0'}}>
            </div>
              <div className="card-body">
                  <h5 className="card-title">Verse Number: {verseNumber}</h5>
                  <p className="card-text"><span style={{textDecoration:"underline"}}>Verse:</span> {text}</p>
                  <p className="card-text"><span style={{textDecoration:"underline"}}>Transliteration:</span> {transliteration}</p>
                  <p className="card-text"><span style={{textDecoration:"underline"}}>Translation:</span> {translation}<span style={{fontWeight:"bolder"}}> ....</span></p>
                  <p className="card-text"><span style={{textDecoration:"underline"}}>Meaning:</span> {meaning}<span style={{fontWeight:"bolder"}}> ....</span></p>
                  <Link className="btn btn-sm btn-dark" to="/solution-verses" state={{ch:chnumber,vno:verseNumber}}>Read More</Link>
              </div>
          </div>
        </div>
        </>
      )
}

export default Verses