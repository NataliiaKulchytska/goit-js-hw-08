import  Player  from '@vimeo/player';
import throttle from 'lodash.throttle';


const KEY_TIME = 'videoplayer-current-time';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
     localStorage.setItem('KEY_TIME', seconds)
}
setCurrentTime();
function setCurrentTime() {
    if (!localStorage.getItem(KEY_TIME)) {
        return;
    }
    player.setCurrentTime(localStorage.getItem(KEY_TIME))
}


