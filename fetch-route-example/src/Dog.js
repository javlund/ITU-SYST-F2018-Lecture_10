import React from 'react';
import { getImageForBreed } from './retriever';
import './dog.css';

class Dog extends React.Component {
  state = {
    image: ''
  };

  getDogImage() {
    getImageForBreed(this.props.match.params.breed)
    .then(json => this.setState({
      image: json.message
    }));
  }

  componentDidMount() {
    this.getDogImage();
  }
  
  componentWillReceiveProps() {
    this.getDogImage();
  }

  render() {
    return <img src={this.state.image} alt={this.props.breed} className="right" />;
  }
}

export default Dog;