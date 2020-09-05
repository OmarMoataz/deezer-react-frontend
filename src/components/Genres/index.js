import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { withRouter } from 'react-router';

import { getGenresDispatcher } from "../../redux/dispatchers/genreDispatchers";
import { getArtistsDispatcher, clearArtistsDispatcher } from "../../redux/dispatchers/artistDispatchers";

class Genres extends Component {
  state = {
    isModalShown: false,
    genreTitle: "",
  };

  componentDidMount() {
    this.props.getGenres();
    const genreId = this.props.match.params.id;
    if (genreId) {
      this.handleShowArtists(genreId);
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1> Genres </h1>
        {this.renderCurrentState()}
      </React.Fragment>
    );
  }

  handleShowArtists = (genreId) => {
    this.props.getArtists(genreId)();
    this.setState({ isModalShown: true });
  };

  handleCloseModal = () => {
    this.props.clearArtists();
    this.setState({ isModalShown: false });
  }

  renderCurrentState = () => {
    const { genres } = this.props;
    const { artists } = this.props;
    
    const { isModalShown } = this.state;

    if (genres.loading) return <div> loading </div>;
    if (genres.error) return <div> {genres.error} </div>;
 
    return (
      <>
        <Modal
          isOpen={isModalShown}
          onRequestClose={this.handleCloseModal}
          contentLabel={this.state.genreTitle}
        >
          {artists.loading && <p> Loading artists... </p>}
          {artists.error && <p> {artists.error} </p>}
          {artists.data.map(artist => (
            <h3 key={artist.id}> {artist.name} </h3>
          ))}
        </Modal>
        <div>
          {genres.data.map((genre) => (
            <div key={genre.id}>
              <h2> {genre.name} </h2>
              <button onClick={() => this.handleShowArtists(genre.id)}> Show artists </button>
              <img alt="genre" src={genre.picture} />
            </div>
          ))}
        </div>
      </>
    );
  };
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
    artists: state.artists,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGenres: getGenresDispatcher(dispatch),
    getArtists: (genreId) => {
      return getArtistsDispatcher(dispatch, genreId);
    },
    clearArtists: clearArtistsDispatcher(dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Genres));
