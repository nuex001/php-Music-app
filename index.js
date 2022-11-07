let downloadPlays = document.querySelectorAll("#play_btn");
let lists = document.querySelector(".list");
let list_box = document.querySelector(".list_box");
const music = document.querySelector("#music_wrapper");
const music_container = document.querySelector(".music_container");
list_btn = document.querySelector("#list_btn");
cancel_list = document.querySelector("#cancellist");
const nameSpan = document.querySelector(".name-span");
const IMGdisplay = document.querySelector("#IMG-display");
const audio = document.querySelector("#audio");
progress_bar = document.querySelector(".progress_bar");
progress_cont = document.querySelector(".progress_cont");
let currentshow = document.querySelector("#currentTime");
durashow = document.querySelector("#durationTime");
let musicIndex;
let musicobj;
downloadPlays.forEach(downloadPlay => {
    downloadPlay.addEventListener("click", (e) => {
        // let datas;
        // console.log(e.target.getAttribute("data-Songname"));
        let sName = e.target.getAttribute("data-Songname");
        var xhr = new XMLHttpRequest();
        // console.log(xhr);

        xhr.open('GET', 'api.php?name=' + sName, true);
        xhr.onload = function (e) {
            if (this.status == 200) {
                // console.log(this.responseText);
                var datas = JSON.parse(this.responseText);
                // console.log(datas);
                for (let index = 0; index < datas.length; index++) {
                    if (datas[index].songname == sName) {
                        musicIndex = index;
                        break
                    }
                    //   console.log(datas[index].songname);
                }
                list_box.innerHTML = '';

            }
            // console.log(datas[musicIndex]);
            // console.log(musicWrap);
            for (let i = 0; i < datas.length; i++) {
                list_box.innerHTML += `
                <div class="row" id="list_row" data-src="${datas[i].ID - 1}">
                <h4 id="song_name">${datas[i].artist} <span id="list_duration" data-duraindex="${datas[i].ID - 1}">30.03</span></h4>
                <audio src="music/${datas[i].artist}.mp3" style="display:none;" id="list_audio"></audio>
                <h6 id="artist"> ${datas[i].songname}</h6>
            </div>
                `;

            }
            musicobj = datas;
            loadmusic(musicIndex);
            music.classList.add("active");
            updateprogress(e)
            play();
            if (lists.classList.contains('active')) {
                lists.classList.remove('active');
            }
        }
        xhr.send();
        // audioDisplayPlay();
    })
})
function musicShow() {
    music.classList.toggle("active");
}

function loadmusic(musicIndex) {
    //  console.log(musicobj[musicIndex].songname);
    nameSpan.innerHTML = musicobj[musicIndex].songname;
    IMGdisplay.src = `images/${musicobj[musicIndex].songname}.jpg`;
    audio.src = `music/${musicobj[musicIndex].songname}.mp3`;
    nowplaying();
    playmusic();
    // playmusic();
}

function playmusic(e) {
    let isplaying = music_container.classList.contains("play");
    // console.log("gnggg");
    if (isplaying) {
        pause()
    } else {
        play()
    }
}
function play(e) {
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
    music_container.classList.add("play");
    audio.play();
}
function pause(e) {
    playbtn.classList.add("fa-play");
    playbtn.classList.remove("fa-pause");
    music_container.classList.remove("play");
    audio.pause();
}


function updateprogress(e) {
    const { currentTime, duration } = e.srcElement;
    let proggrespercent = (currentTime / duration) * 100;
    progress_bar.style.width = `${proggrespercent}%`;
    let audioCurrent = audio.currentTime;

    audio.addEventListener("loadeddata", () => {
        // update song duration time total
        let audioDuration = audio.duration;
        totalMin = Math.floor(audioDuration / 60);
        totalSec = Math.floor(audioDuration % 60);
        if (totalSec < 10) {
            totalSec = `0${totalSec}`;
        }
        // console.log(audio.duration);
        durashow.innerHTML = `${totalMin}:${totalSec}`;
    })
    // update song  current time total
    totalMin = Math.floor(audioCurrent / 60);
    totalSec = Math.floor(audioCurrent % 60);
    if (totalSec < 10) {
        totalSec = `0${totalSec}`;
    }
    //  console.log(audio.audioCurrent);
    currentshow.innerHTML = `${totalMin}:${totalSec}`;
}

function setprogress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    //  getting the duration
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
    //  console.log(clickX);
}

function prevmusic(e) {
    musicIndex--
    if (musicIndex < 0) {
        musicIndex = musicobj.length - 1;
    }
    loadmusic(musicIndex);
    play();
}
function nextmusic(e) {
    musicIndex++
    if (musicIndex >= musicobj.length - 1) {
        musicIndex = 0
    }
    loadmusic(musicIndex);
    play();
}

function command() {
    text = document.querySelector("#music_command ");
    let gettext = document.querySelector("#music_command").className;
    switch (gettext) {
        case "fa fa-repeat":
            text.classList.remove("fa-repeat");
            text.classList.add("fa-redo");
            break;
        case "fa fa-redo":
            text.classList.remove("fa-redo");
            text.classList.add("fa-shuffle");
            break;
        case "fa fa-shuffle":
            text.classList.remove("fa-shuffle");
            text.classList.add("fa-repeat");
            break;

    }
    // console.log(gettext);
}


function showlist(e) {
    lists.classList.toggle('active');
    const rows = document.querySelectorAll("#list_row");
    rows.forEach(row => {
        row.addEventListener("click", liclcik);
    });
    // console.log(musicobj);
}
function liclcik(e) {
    // const rows = document.querySelectorAll("#list_row");
    // console.log(e.target.tagName);
    let src;
    if (e.target == undefined) {
        console.log("diijdfij");
        src = musicIndex
    } else {
        if (e.target.tagName == "DIV") {
            src = e.target.getAttribute("data-src");
        } else if (e.target.tagName == "H4") {
            src = e.target.parentNode.getAttribute("data-src");
        } else if (e.target.tagName == "H6") {
            src = e.target.parentNode.getAttribute("data-src");
        }
    }
    musicIndex = src;
    // console.log(musicIndex);
    loadmusic(musicIndex);
    play();
}

function nowplaying(e) {
    const rows = document.querySelectorAll("#list_row");
    list_audio = document.querySelectorAll("#list_audio");
    list_duration = document.querySelectorAll("#list_duration");
    rows.forEach(row => {
        if (row.classList.contains("active")) {
            row.classList.remove("active");
            for (let i = 0; i < list_audio.length; i++) {
                // console.log(list_audio[i]);
                list_audio[i].addEventListener("loadeddata", load);
            }
        }
        rows[musicIndex].classList.add("active");
        let spn = document.querySelector(".music_container .list  .row.active h4 span");
        //   spn =  rows[musicIndex].querySelector(" h4 span");
        load(e)
        spn.innerHTML = "playing";

    });
    function load(e) {
        const rows = document.querySelectorAll("#list_row");
        // update song duration time total
        list_audio = document.querySelectorAll("#list_audio");
        list_duration = document.querySelectorAll("#list_duration");
        for (let i = 0; i < list_audio.length; i++) {
            let audioDuration = list_audio[i].duration;
            totalMin = Math.floor(audioDuration / 60);
            totalSec = Math.floor(audioDuration % 60);
            if (totalSec < 10) {
                totalSec = `0${totalSec}`;
            }
            //  console.log(spn);
            list_duration[i].setAttribute("t-duration", `${totalMin}:${totalSec}`);
            list_duration[i].innerHTML = list_duration[i].getAttribute("t-duration");
            // list_duration[i].innerHTML ="";

            list_duration[i].innerHTML = list_duration[i].getAttribute("t-duration");

        }
    }

}

//  window.addEventListener("touchmove")
audio.addEventListener("ended", () => {
    let allmusic = musicobj.length - 1
    text = document.querySelector("#music_command");
    let gettext = document.querySelector("#music_command").className;
    switch (gettext) {
        case "fa fa-repeat":
            nextmusic();
            break;
        case "fa fa-redo":
            audio.currentTime = 0;
            play();
            break;
        case "fa fa-shuffle":
            let randIndex = Math.floor((Math.random() * allmusic) + 1);
            do {
                randIndex = Math.floor((Math.random() * allmusic) + 1);
            } while (musicIndex == randIndex)
            musicIndex = randIndex;
            // console.log(musicIndex);
            loadmusic(musicIndex);
            play();
            break;
    }

});


progress_cont.addEventListener("click", setprogress);
audio.addEventListener("timeupdate", updateprogress);
progress_cont.addEventListener("touchmove", setprogress);
// Object { ID: "3", artist: "Godzilla", songname: "Godzilla", "music-path": "" }
//  function audioDisplayPlay() {

//  }


let downloadBtns = document.querySelectorAll("#dbtn");
// // console.log(downloadBtns);
for (let index = 0; index < downloadBtns.length; index++) {
    downloadBtns[index].onclick = download;
}

function download(e) {
   e.preventDefault();
    // console.log(e.target.getAttribute("data-path"));
   let name = e.target.getAttribute("data-path");
    window.location="api.php?filename="+name;
}


