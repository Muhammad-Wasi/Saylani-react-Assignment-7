import React, { Component } from 'react';
import FbImageLibrary from 'react-fb-image-grid';
import './App.css';

class Rough extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif',
                'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif',
                'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif',
                'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif',
                'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif',
            ]
        }
    }
    render() {
        const { list } = this.state;
        return (
            <div style={{ width: '700px', height: '700px', border: '2px solid red', margin: '0px auto' }}>
                <FbImageLibrary width={35} fromLeft={0} fromRight={0} images={list} />
            </div>
        )
    }
}
export default Rough;