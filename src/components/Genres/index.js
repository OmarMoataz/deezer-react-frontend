import React, { Component } from "react";
import { connect } from "react-redux";

import { getGenresDispatcher } from "../../redux/dispatchers/genreActions";
import { getArtistsDispatcher } from "../../redux/dispatchers/artistActions";

class Genres extends Component {
  state = {
    modalShown: false
  }

  componentDidMount() {
    this.props.getGenres();
  }

  render() {
    return (
      <React.Fragment>
        <h1> Genres </h1>
        {this.renderCurrentState()}
      </React.Fragment>
    );
  }

  renderCurrentState = () => {
    const { genres } = this.props;

    if (genres.loading) return <div> loading </div>;
    if (genres.error) return <div> {genres.error} </div>;

    return (
      <div>
        {genres.data.map((genre) => (
          <div key={genre.id}>
            <h2> {genre.name} </h2>
            <button onClick={this.props.getArtists(genre.id)}> Show artists </button>
            <img alt="genre" src={genre.picture} />
          </div>
        ))}
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
    artists: state.artists
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGenres: getGenresDispatcher(dispatch),
    getArtists: (genreId) => getArtistsDispatcher(dispatch, genreId)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
