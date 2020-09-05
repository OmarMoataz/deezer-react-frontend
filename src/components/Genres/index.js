import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { withRouter } from "react-router";
import styled from "styled-components";

import { getGenresDispatcher } from "../../redux/dispatchers/genreDispatchers";
import {
  getArtistsDispatcher,
  clearArtistsDispatcher,
} from "../../redux/dispatchers/artistDispatchers";

import Artists from '../Artists';

const GenreListing = styled.div`
  margin: 0 0.5rem;
`

const InfoWrapper = styled.div`
  display: inline-block;
  width: 50%;
  margin-bottom: 10px;
`;

const GenreImage = styled.img`
  display: inline-block;
`;

const ShowArtistsBtn = styled.button`
  padding: 5px;
`

const ModalCloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`

Modal.setAppElement('#root');

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

  handleShowArtists = (genreId, genreTitle) => {
    this.props.getArtists(genreId)();
    this.setState({ genreTitle, isModalShown: true });
  };

  handleCloseModal = () => {
    this.props.clearArtists();
    this.setState({ isModalShown: false });
  };

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
          <ModalCloseBtn onClick={this.handleCloseModal}> X </ModalCloseBtn>
          <Artists artists={artists} genreTitle={this.state.genreTitle}/>
        </Modal>
        <GenreListing>
          {genres.data.map((genre) => (
            <div key={genre.id}>
              <InfoWrapper>
                <h2> {genre.name} </h2>
                <ShowArtistsBtn onClick={() => this.handleShowArtists(genre.id, genre.name)}>
                  Show artists
                </ShowArtistsBtn>
              </InfoWrapper>
              <GenreImage alt="genre" src={genre.picture} />
            </div>
          ))}
        </GenreListing>
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
    clearArtists: clearArtistsDispatcher(dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Genres));
