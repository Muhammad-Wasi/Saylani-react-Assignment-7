import React, { Component } from 'react';
import FacebookEmoji from 'react-facebook-emoji';
import FbImageLibrary from 'react-fb-image-grid';
import './App.css';
// import Rough from './Rough';

class Post extends Component {
    constructor(props) {
        super(props);
        console.log('props***', props.list)
        this.state = {
            hover: false,
            like: false,
            post: props.list,
            type: ''
        }
    }


    hoverOn = () => {
        console.log('hoverOn***')
        this.setState({ hover: true })
    }
    hoverOf = () => {
        console.log('hoverOf***')
        this.setState({ hover: false })
    }
    like = () => {
        const { like } = this.state;
        this.setState({ like: !like })
    }
    render() {
        const { hover, post, like, type } = this.state;
        return (
            <div className="CardDiv">
                <div className="Div1">
                    <div className="ProfilePic">
                        <img src={post.profilePic} alt="Profile Pic..." title="Profile Picture" />
                    </div>
                    <div className="ProfileName">
                        <b>{post.profileName}</b>
                        <p>{post.postDate}</p>
                    </div>
                    <div className="ProfileExtraDiv">
                    </div>

                </div>
                <div className="Div2">
                    <p>{post.photoDetail}</p>
                </div>
                <div className="Div3">
                    {/* <Rough /> */}
                    <img src={post.photo[0]} title="Post Picture" alt="Post Pic.." />
                </div>

                <div className="Div4">
                    <div className="Emoji" onClick={this.like} style={{ float: 'left', paddingLeft: '10px', marginTop: '0px' }} >
                        <span style={{ cursor: 'pointer' }} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOf}>
                            <span onMouseEnter={() => { this.setState({ type: 'like' }) }} onMouseLeave={() => { this.setState({ type: '' }) }}>
                                {type === 'like' ?
                                    <FacebookEmoji type="like" size="sm" />
                                    :
                                    <FacebookEmoji type="like" size="xs" />
                                }
                            </span>
                            {hover &&
                                <span>
                                    <span onMouseEnter={() => { this.setState({ type: 'love' }) }} onMouseLeave={() => { this.setState({ type: '' }) }}>
                                        {type === 'love' ?
                                            <FacebookEmoji type="love" size="sm" />
                                            :
                                            <FacebookEmoji type="love" size="xs" />
                                        }
                                    </span>

                                    <span onMouseEnter={() => { this.setState({ type: 'wow' }) }} onMouseLeave={() => { this.setState({ type: '' }) }}>
                                        {type === 'wow' ?
                                            <FacebookEmoji type="wow" size="sm" />
                                            :
                                            <FacebookEmoji type="wow" size="xs" />
                                        }
                                    </span>
                                    <span onMouseEnter={() => { this.setState({ type: 'yay' }) }} onMouseLeave={() => { this.setState({ type: '' }) }}>
                                        {type === 'yay' ?
                                            <FacebookEmoji type="yay" size="sm" />
                                            :
                                            <FacebookEmoji type="yay" size="xs" />
                                        }
                                    </span>
                                    <span onMouseEnter={() => { this.setState({ type: 'angry' }) }} onMouseLeave={() => { this.setState({ type: '' }) }}>
                                        {type === 'angry' ?
                                            <FacebookEmoji type="angry" size="sm" />
                                            :
                                            <FacebookEmoji type="angry" size="xs" />
                                        }
                                    </span>

                                    <span onMouseEnter={() => { this.setState({ type: 'haha' }) }} onMouseLeave={() => { this.setState({ type: '' }) }}>
                                        {type === 'haha' ?
                                            <FacebookEmoji type="haha" size="sm" />
                                            :
                                            <FacebookEmoji type="haha" size="xs" />
                                        }
                                    </span>


                                    <span onMouseEnter={() => { this.setState({ type: 'sad' }) }} onMouseLeave={() => { this.setState({ type: '' }) }}>
                                        {type === 'sad' ?
                                            <FacebookEmoji type="sad" size="sm" />
                                            :
                                            <FacebookEmoji type="sad" size="xs" />
                                        }
                                    </span>

                                </span>
                            }
                        </span>

                    </div>
                    <br />
                    <div className="Likers">
                        {like && post.likes}
                        {!like && post.notlikes}
                    </div>

                </div>


            </div>
        )
    }
}

export default Post;