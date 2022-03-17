import React,{useState,useEffect} from 'react'; import Card from './Card'
import './content.css'
const Content = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
      .then( res => res.json())
      .then( data => setCountry(data))
  },[])
  return(
    <div className='container'>
       {/* {country.map((c,i) => <Card key={i} country={c}/>)} */}
       {country.map(e => <Card country={e} keys={e.ccn3}/>)}
    </div>);
}

export default Content;