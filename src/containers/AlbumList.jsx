import React, { Component } from 'react';
import Input from '../components/Input';

const Album = props => (
  <div>
    <img
      src={props.url}
      style={{ height: '30px', weight: '30px' }}
      alt="Album pic"
    />
    <span>{props.title}</span>
  </div>
);

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [], searchText: '', status: 'LOADING' };
  }

  componentDidMount() {
    this.setState({ status: 'LOADING' });
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
      // if you need status code in res this the way to do
      // .then(res => res.json().then(data => ({ status: res.status, body: data })))
      .then(res => res.json())
      .then(res => {
        this.setState({ status: 'SUCCESS', albums: res });
      })
      .catch(err => {
        this.setState({ status: 'ERROR' });
      });
  }

  handleInputChange = e => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    const { albums, searchText, status } = this.state;
    return (
      <div>
        {/* <p>{JSON.stringify(this.state)}</p> */}
        <Input
          id="searchText"
          type="text"
          name="searchText"
          placeholder="Enter something to search"
          value={searchText}
          onChange={this.handleInputChange}
        />
        {status === 'LOADING' && <div>Loading...</div>}
        {status === 'SUCCESS' &&
          albums
            .filter(album => album.title.startsWith(searchText))
            .map(album => <Album key={album.id} {...album} />)}
        {status === 'ERROR' && <div>Error :( </div>}
      </div>
    );
  }
}

export default AlbumList;
