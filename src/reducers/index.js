import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title:'No Scrubs', duration:'4:06'},
        {title:'Highway to hell', duration:'6:35'},
        {title:'Insomnia', duration:'3:40'},
        {title:'Swinging on a star', duration:'4:55'},
        {title:'Cocain', duration:'4:04'}
    ];
};

const selectedSongReducer = (selectedSong=null,  action) => {
    if  (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs:  songsReducer,
    selectedSong: selectedSongReducer
});