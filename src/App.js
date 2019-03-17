import React, { Component } from 'react';
import Post from './Post';
import './App.css';
import IMG_20180907_081607_466 from './IMG_20180907_081607_466.jpg'
import Rough from './Rough';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          profilePic: IMG_20180907_081607_466,
          profileName: 'Wasi Bin Ayub',
          postDate: 'October 6, 2018',
          photo: [IMG_20180907_081607_466],
          photoDetail: 'This Impressive Picture',
          likes: 'You, Farhad & 20 others like it',
          notlikes: 'Farhad & 20 others like it',
        }
      ]
    }
  }
  render() {
    const { list } = this.state;
    return (
      <div className="App">
        {
          list.map((item => {
            return <Post list={item} />
          }))
        }
        {/* <Rough /> */}
      </div>
    );
  }
}

export default App;
