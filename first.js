const express = require('express'); 
const axios = require('axios');    
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const app = express(); 

const PORT = 8080; 

app.get('/show-details', async (req, res) => {
  try {
    const response = await axios.get("https://api.tvmaze.com/singlesearch/shows?q=friends");

    const resp = response.data;
    const showDetails = {
      id : resp.id,
      name: resp.name,
      genres: resp.genres,
      premiered: resp.premiered,
      rating: resp.rating.average,
      summary: resp.summary,
      officialSite: resp.officialSite,
    };


    res.send({
      success: true,
      message: "Friends show details fetched successfully",
      data: showDetails,
    });

  } catch (error) {
    res.send({
      success: false,
      message : "Failed to fetch show details",
      error : error.message
    });
  }
});

//  Route: GET /episodes
app.get('/episodes', async (req, res) => {
  try {
    // 10. First, get the show's ID (Friends)
    const showResponse = await axios.get('https://api.tvmaze.com/singlesearch/shows?q=friends');
    const showId = showResponse.data.id;
    const ep = await axios.get(`https://api.tvmaze.com/shows/${showId}/episodes`);
    const allEpisodes = ep.data;
    
   res.send({
          name: allEpisodes.name,
      season: allEpisodes.season,
      number: allEpisodes.number,
    numberofep : allEpisodes.length,
      data: allEpisodes
   });


  } catch (error) {
    res.status(500).send({
      message: "Failed to fetch episodes",
      error: error.message
    });
  }
});

//  Starting the server
app.listen(PORT, (req,res) => {
  console.log("server responded");
});
