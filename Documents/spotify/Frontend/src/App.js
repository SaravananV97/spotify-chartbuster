import React, { Component } from 'react';
import './App.css';
import * as actionCreators from "./Store/action/actionCreators";
import Appbar from "./Components/Appbar";
import {connect} from "react-redux";
import SongTable from "./Components/songsTable";
import DetailsModal from "./Container/detailsmodal";
import axios from "axios";
import Loading from "./Components/loading";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      songs: [],
      open: false,
      search: ""
    }
  }

  componentDidMount = () => {
    axios.get("/api/top50").then((res) => {
      console.log(res.data.songs);
      this.setState({songs: [...res.data.songs]});
    }).catch(err => console.log(err));
  }

  handleModalClose = () => {
    this.setState({open: false});
  }

  handleSearchChange = (event) => {
    this.setState({search:event.target.value}) 
  }

  handleSearchClick = () => {
    const key = this.state.search;
    const prev = [...this.state.songs];
    console.log("handle Clicked" + key);
      axios.post(`/api/search/${key}`).then((res) => {
        console.log(res.data.results);
        if(res.data.results.length === 0)
          this.setState({songs:[...prev]});
        else
          this.setState({songs: [...res.data.results], open: false});
      }).catch(err => console.log(err));
    }

    handleCardClicked = (num) =>{
    this.setState({open:true});    
    console.log("Handling card Click");
  } 

  render() {
    const head = (<SongTable style = {{backgroundColor: "#777", color: "white"}} name = {"Song Name"} rank = {"Rank"} onCardClick = {(nums) => this.handleCardClicked(nums)}></SongTable>);

    const songs = this.state.songs;
    const showSongs = (
       songs.map((song, i) => {
        return <SongTable key = {i} name = {song.song_name} artists = {song.artist_name} rank = {song.Rank} onCardClick = {(nums) => this.handleCardClicked(nums)}></SongTable>
    }));
    return (
      <div className="App">      
        <Appbar onSearchClick = {() => this.handleSearchClick()} onSearchChange = {this.handleSearchChange} />
        {this.state.songs.length === 0?<Loading />: [head,showSongs]}
        <SongTable onCardClick = {(nums) => this.handleCardClicked(nums)}></SongTable>
        <DetailsModal modalOpen = {this.state.open} modalClose = {this.handleModalClose}></DetailsModal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    setSearch: (value) => dispatch(actionCreators.setSearch(value))
  }

}

export default connect(null, mapDispatchToProps)(App);
