import React from 'react'

function Verses(props) {

    let {text, verseNumber, transliteration} = props;

    return (
        <div className='my-3'>
          <div className="card">
            <div style={{display:'flex', justifyContent:'end', position:'absolute', right:'0'}}>
            </div>
              <div className="card-body">
                  <h5 className="card-title">Verse Number: {verseNumber}</h5>
                  <p className="card-text">Verse: {text}</p>
                  <p className="card-text">Transliteration: {transliteration}</p>
                  <a rel="noreferrer" href="#" target="_blank" className="btn btn-sm btn-dark">Read More</a>
              </div>
          </div>
        </div>
      )
}

export default Verses