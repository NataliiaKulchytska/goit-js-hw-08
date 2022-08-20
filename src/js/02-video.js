import Player from '@vimeo/player';
import throttle from 'lodash.throttle';



const onPlay = function (data) {
    const stringJSON = JSON.stringify(data);
    localStorage.setItem('videoplayer-current-time', stringJSON)
    console.log(onPlay);
};


const iframe = document.querySelector('ifraime');
const player = new Player(iframe);


player.on('timeupdate', throttle(onPlay, 500));
player.setCurrentTime(getCurrentTime());

const getCurrentTime = function () {
    const parsJSON = JSON.parse(localStorage.getItem('videoplayer-current-time'));

    return parsJSON.seconds;
};


