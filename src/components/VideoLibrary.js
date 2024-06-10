import {useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import './video-library.css';
import { videoLibraryData } from '../data/data';
import { useState } from 'react';

const VideoLibrary = () => {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState(null); 

    const handleItemClick = (item, event) => {
        event.preventDefault();
        setSelectedItem(item);
        window.location.hash = `#section${videoLibraryData.indexOf(item)}`;
    }
    

    return (
        <>
        <div className="video-side">
            <div className="info-container"> 
                {selectedItem && (
                    <div>
                        <h2>{selectedItem.title}</h2>
                        <div className='video'>
                        <video key={selectedItem.videoUrl} width="320" height="240" controls>
                            <source src={selectedItem.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        </div>
                    </div>
                )}
            </div>
            <button className="btn-back" onClick={() => navigate('/')}><FontAwesomeIcon icon={faRightToBracket} /> HomePage</button>
            <div className="list">
                <h2>Danh mục</h2>
                <ul>
                    {videoLibraryData.map((item, index) => (
                        <li key={index} onClick={(event) => handleItemClick(item, event)}>
                            <a href={`#section${index}`}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>     
        </>
    )  
}  

export default VideoLibrary;
