import { useState, useEffect }from 'react';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyAmGPi5ZmyN7lighp8HcXHWi41o-fNv-rs';

//CUSTOM HOOKS
const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);  
    
    useEffect (() => {
        onTermSubmit(defaultSearchTerm);                                                                                                         
    }, [defaultSearchTerm]);    
    
    const  onTermSubmit = async term => {                                                                                               
        const response = await youtube.get('/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 15,
                type: 'video',
                key:KEY
            }
        });
        
        setVideos(response.data.items);
       
    };
    return [videos, onTermSubmit];
}

export default useVideos;