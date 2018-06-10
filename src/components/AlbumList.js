import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axious from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
    state = { albums: [] };
    componentWillMount() {
        axious.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((res) => {
                this.setState({ albums: res.data });
                console.log(this.state);
            }, (error) => {
                console.log(error);
            });
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
