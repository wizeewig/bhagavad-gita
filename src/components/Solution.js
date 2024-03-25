import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'

function Solution() {

  useEffect(() => {
    document.title = "Bhagavad Gita - Solutions"
  }, [])


  return (
    <>
    <div style={{marginTop:"110px", marginLeft:"8px", marginRight:"8px"}}>
      <p>The truth is that we can have a feeling of doubt in our mind, and can be suspicious of others too. We are in a dilemma about what to do and what not to do? This dilemma had arisen in Arjun’s mind.</p>
      <p style={{marginBottom:"40px"}}>The sermon given by Lord Shri Krishna through the medium of Shrimad Bhagwat Geeta during the war of Mahabharata shows the principles of spirituality and the right direction to live life to the human beings. In 18 chapters of Shrimad Bhagwat Geeta you get the solution to all your problems. Then whatever be the problem, be it social, mental, or practical, the solution to all those problems is written in the verses written in the chapters of Shrimad Bhagwat Geeta. </p>
      <h3 style={{textAlign:"center", marginBottom:"40px", textDecoration:"underline"}}>Solution to different problems</h3>
      </div>
      {/* <hr/> */}
      <ul class="list-group list-group-flush">
      <li class="list-group-item" style={{fontSize:"25px"}}>Anger
      <ul style={{fontSize:"16px"}}>
  <li><Link to="/solution-verses" state={{ch:"2",vno:"56"}}>Chapter 2 Verse 56</Link></li>
  <li><Link to="/solution-verses" state={{ch:"2",vno:"62"}}>Chapter 2 Verse 62</Link></li>
  <li><Link to="/solution-verses" state={{ch:"2",vno:"63"}}>Chapter 2 Verse 63</Link></li>
  <li><Link to="/solution-verses"  state={{ch:"5",vno:"26"}}>Chapter 5 Verse 26</Link></li>
  <li><Link to="/solution-verses"  state={{ch:"16",vno:"1"}}>Chapter 16 Verse 1</Link></li>
  <li><Link to="/solution-verses"  state={{ch:"16",vno:"2"}}>Chapter 16 Verse 2</Link></li>
  <li><Link to="/solution-verses"  state={{ch:"16",vno:"3"}}>Chapter 16 Verse 3</Link></li>
  <li><Link to="/solution-verses"  state={{ch:"16",vno:"21"}}>Chapter 16 Verse 21</Link></li>
</ul>
      </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Confusion
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"2",vno:"7"}}>Chapter 2 Verse 7</Link></li>
  <li><Link to="/solution-verses"  state={{ch:"3",vno:"2"}}>Chapter 3 Verse 2</Link></li>
  <li><Link to="/solution-verses"  state={{ch:"18",vno:"61"}}>Chapter 18 Verse 61</Link></li>
  </ul>
      </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Dealing with Envy 
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"12",vno:"13"}}>Chapter 12 Verse 13</Link></li>
  <li><Link to="/solution-verses"  state={{ch:"12",vno:"14"}}>Chapter 12 Verse 14</Link></li>
  <li><Link to="/solution-verses"  state={{ch:"16",vno:"19"}}>Chapter 16 Verse 19</Link></li>
  <li><Link to="/solution-verses"  state={{ch:"18",vno:"71"}}>Chapter 18 Verse 71</Link></li>
  </ul>
      </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Death of Loved one
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"2",vno:"13"}}>Chapter 2 Verse 13</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"2",vno:"20"}}>Chapter 2 Verse 20</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"2",vno:"22"}}>Chapter 2 Verse 22</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"2",vno:"25"}}>Chapter 2 Verse 25</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"2",vno:"27"}}>Chapter 2 Verse 27</Link></li>
      </ul>
       </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Demotivated
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"11",vno:"33"}}>Chapter 11 Verse 33</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"18",vno:"48"}}>Chapter 18 Verse 48</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"18",vno:"78"}}>Chapter 18 Verse 78</Link></li>
      </ul>
      </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Depression 
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"2",vno:"3"}}>Chapter 2 Verse 3</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"2",vno:"14"}}>Chapter 2 Verse 14</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"2",vno:"21"}}>Chapter 2 Verse 21</Link></li>
      </ul>
      </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Discriminated 
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"5",vno:"18"}}>Chapter 5 Verse 18</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"5",vno:"19"}}>Chapter 5 Verse 19</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"6",vno:"32"}}>Chapter 6 Verse 32</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"9",vno:"29"}}>Chapter 9 Verse 29</Link></li>
      </ul>
      </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Fear
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"4",vno:"10"}}>Chapter 4 Verse 10</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"11",vno:"50"}}>Chapter 11 Verse 50</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"18",vno:"30"}}>Chapter 18 Verse 30</Link></li>
      </ul>
      </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Feeling Sinful 
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"4",vno:"36"}}>Chapter 4 Verse 36</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"4",vno:"37"}}>Chapter 4 Verse 37</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"5",vno:"10"}}>Chapter 5 Verse 10</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"9",vno:"30"}}>Chapter 9 Verse 30</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"10",vno:"3"}}>Chapter 10 Verse 3</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"14",vno:"6"}}>Chapter 14 Verse 6</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"18",vno:"66"}}>Chapter 18 Verse 66</Link></li>
      </ul>
      </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Forgetfullness 
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"15",vno:"15"}}>Chapter 15 Verse 15</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"18",vno:"61"}}>Chapter 18 Verse 61</Link></li>
      </ul>
      </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Greed
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"14",vno:"17"}}>Chapter 14 Verse 17</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"16",vno:"21"}}>Chapter 16 Verse 21</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"27",vno:"25"}}>Chapter 17 Verse 25</Link></li>
      </ul>
       </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Laziness 
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"3",vno:"8"}}>Chapter 3 Verse 8</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"3",vno:"20"}}>Chapter 3 Verse 20</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"6",vno:"16"}}>Chapter 6 Verse 16</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"18",vno:"39"}}>Chapter 18 Verse 39</Link></li>
      </ul>
      </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Loneliness 
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"6",vno:"30"}}>Chapter 6 Verse 30</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"9",vno:"29"}}>Chapter 9 Verse 29</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"13",vno:"16"}}>Chapter 13 Verse 16</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"13",vno:"18"}}>Chapter 13 Verse 18</Link></li>
      </ul>
      </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Losing Hope 
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"4",vno:"11"}}>Chapter 4 Verse 11</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"9",vno:"22"}}>Chapter 9 Verse 22</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"9",vno:"34"}}>Chapter 9 Verse 34</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"18",vno:"66"}}>Chapter 18 Verse 66</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"18",vno:"78"}}>Chapter 18 Verse 78</Link></li>
      </ul>
      </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Lust 
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"3",vno:"37"}}>Chapter 3 Verse 37</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"3",vno:"41"}}>Chapter 3 Verse 41</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"3",vno:"43"}}>Chapter 3 Verse 43</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"5",vno:"22"}}>Chapter 5 Verse 22</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"16",vno:"21"}}>Chapter 16 Verse 21</Link></li>
      </ul>
      </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Practicing Forgiveness 
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"11",vno:"44"}}>Chapter 11 Verse 44</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"12",vno:"13"}}>Chapter 12 Verse 13</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"12",vno:"14"}}>Chapter 12 Verse 14</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"16",vno:"1"}}>Chapter 16 Verse 1</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"16",vno:"2"}}>Chapter 16 Verse 2</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"16",vno:"3"}}>Chapter 16 Verse 3</Link></li>
      </ul>
      </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Pride 
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"16",vno:"4"}}>Chapter 16 Verse 4</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"16",vno:"13"}}>Chapter 16 Verse 13</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"16",vno:"14"}}>Chapter 16 Verse 14</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"16",vno:"15"}}>Chapter 16 Verse 15</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"18",vno:"26"}}>Chapter 18 Verse 26</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"18",vno:"58"}}>Chapter 18 Verse 58</Link></li>
      </ul>
      </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Seeking Peace
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"2",vno:"66"}}>Chapter 2 Verse 66</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"2",vno:"71"}}>Chapter 2 Verse 71</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"4",vno:"39"}}>Chapter 4 Verse 39</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"5",vno:"29"}}>Chapter 5 Verse 29</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"8",vno:"28"}}>Chapter 8 Verse 28</Link></li>
      </ul>
      </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Temptation 
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"2",vno:"60"}}>Chapter 2 Verse 60</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"2",vno:"61"}}>Chapter 2 Verse 61</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"2",vno:"70"}}>Chapter 2 Verse 70</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"7",vno:"14"}}>Chapter 7 Verse 14</Link></li>
      </ul>
      </li>
      <li class="list-group-item" style={{fontSize:"25px"}}>Uncontrolled Mind
      <ul style={{fontSize:"16px"}}>
      <li><Link to="/solution-verses"  state={{ch:"6",vno:"5"}}>Chapter 6 Verse 5</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"6",vno:"6"}}>Chapter 6 Verse 6</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"6",vno:"26"}}>Chapter 6 Verse 26</Link></li>
      <li><Link to="/solution-verses"  state={{ch:"6",vno:"35"}}>Chapter 6 Verse 35</Link></li>
      </ul>
       </li>
    </ul>
    
    </>
  )
}

export default Solution