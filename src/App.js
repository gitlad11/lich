import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './Components/sideBar.js'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MyCarousel from './Components/carousel.js'
import Content from './Components/content.js';
import axios from 'axios'
import Cookies from 'js-cookie'

function App() {
  const [error, setError] = useState("");
  const [created, setCreated] = useState(false);
  const [creating , setCreating] = useState(false);
  const [items, setItems] = useState()
  const [cookie, setCookie] = useState("")

   axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

  const addGood = (url, params) => {
    setCreating(true);
    axios.post(url, params).then(function (res){
      if(res.data){
        console.log(res.data)

        setCreated(true)
        setCreating(false)

      }
    }).catch((error) => { 
      setError(error.message)
      setCreating(false)
       })
  }

  const getGoods = (url, params) => {
    axios.post(url, params).then((res) =>{
      //setItems(res.data)
      console.log(res.data)
    }).catch((error) => {
      console.log(error.message)
    })
  }
  
  const removeGood = (url, params) => {
    axios.post(url, params).then((res) => {
      console.log(res.data)
    }).catch((error) => {
      console.log(error.message)
    })
  }

  const getJson = (url) => {
    axios.get(url).then((res) => {
      if(res.data){
        setItems(res.data)
      }
    }).catch((error) =>{
      setError(error.message)
    })
  }

  useEffect(() =>{
    getJson("https://jsonplaceholder.typicode.com/photos")
    getGoods("/cart/list", { lang : "1", shop : "1" }, {withCredentials: true})
  },[])

  return (

    <div className="App">
        <Container style={{ paddingTop : "30px" }} fluid>
              <Grid container spacing={2}>
               <Grid item xs={5}>
                 <SideBar addGood={addGood} creating={creating} error={error}/>
              </Grid>
              <Grid item xs={7}>
                {items  ? <MyCarousel items={items}/> : <div></div> }
                </Grid>
              <Grid item xs={5}>
              </Grid>
              <Grid item xs={7}>
                <Content items={items}/>
                </Grid>  
                   
                </Grid>
        </Container>
    </div>
  );
}

export default App;
