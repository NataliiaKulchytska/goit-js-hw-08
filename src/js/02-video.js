import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const KEY_TIME = 'videoplayer-current-time';
const onPlay = function (data) {
    const stringJSON = JSON.stringify(data);
    localStorage.setItem('KEY_TIME', stringJSON)
    
};
console.log(onPlay);

const iframe = document.querySelector('ifraime');
const player = new Player(iframe);


player.on('timeupdate', throttle(onPlay, 400));
player.setCurrentTime(currentTime());

const currentTime = function () {
    const parsJSON = JSON.parse(localStorage.getItem('KEY_TIME'));

    return parsJSON.seconds;
};


