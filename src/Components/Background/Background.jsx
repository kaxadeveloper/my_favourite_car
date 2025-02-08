import React from 'react';
import ReactPlayer from 'react-player';
import './Background.css';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';

const Background = ({ playStatus, heroCount }) => {

    if (playStatus) {
        return (
            <div className='background fade-in' autoPlay loop muted>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=6DiGfIrWIcA"
                    playing={playStatus}
                    controls
                    width="100%"
                    height="100%"
                />
            </div>
        );
    }
    else if (heroCount===0)
    {
        return <img src={image1} className='background fade-in' alt="" />
    }
    else if (heroCount===1)
    {
        return <img src={image2} className='background fade-in' alt="" />
    }
    else if (heroCount===2)
    {
        return <img src={image3} className='background fade-in' alt="" />
    }
};

export default Background;
