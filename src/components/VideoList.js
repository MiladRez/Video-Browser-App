import React from 'react';
import VideoItem from './VideoItem';

var increment = 1;

const VideoList = ({videos, onVideoSelect}) => {
    const renderedVideoList = videos.map((video) => {
        var itemKey = video.id.videoId;
        if(!itemKey) {
            itemKey = "channelID" + increment;
            increment++;
        }
        return <VideoItem key={itemKey} video={video} onVideoSelect={onVideoSelect} />
    });

    return (
        <div className="ui relaxed divided list">{renderedVideoList}</div>
    );
}

export default VideoList;