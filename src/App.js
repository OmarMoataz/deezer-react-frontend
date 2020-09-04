import "./App.css";
import React from "react";

import { connect } from "react-redux";
import { getGenresDispatcher } from "./dispatchers/genres";

class App extends React.Component {
  componentDidMount() {
    this.props.getGenres();
  }

  render() {
    if (this.props.loading) return <div> loading </div>;
    if (this.props.error) return <div> {this.props.error} </div>;
    
    return (
      <div className="App">
        {this.props.genres.data.map((genre) => {
          return <div> {genre.name} </div>;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
    error: state.error,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGenres: getGenresDispatcher(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
