import {combineReducers} from 'redux';

const songReducer = () => {
    return[
        {title: 'No Scrub',duration: '4:05'},
        {title: 'Macarema',duration: '2:30'},
        {title: 'All Star',duration: '3:15'},
        {title: 'I want it That Way',duration: '1:45'}
    ];
};

const selectedSongReducer = (selectedSong=null,action) =>{
    if(action.type === 'SONG_SELECT'){
        return action.payload;
    }

    return selectedSong;

};



export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});

