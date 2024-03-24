import React from 'react'

function Verses(props) {

    let {text, chnumber, verseNumber, transliteration, english, hindi} = props;

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
                  {/* <p className="card-text"><span style={{textDecoration:"underline"}}>Meaning:</span></p> */}
                  <p className="card-text"><span style={{textDecoration:"underline"}}>Meaning:</span> {english}</p>
                  {/* <p className="card-text"><span style={{textDecoration:"underline"}}>Hindi:</span> {hindi}</p> */}
                  <a rel="noreferrer" href={`https://bhagavadgita.io/chapter/${chnumber}/verse/${verseNumber}`} target="_blank" className="btn btn-sm btn-dark">Read More</a>
              </div>
          </div>
        </div>
        </>
      )
}

export default Verses