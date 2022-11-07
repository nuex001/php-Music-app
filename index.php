<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music website</title>
    <link rel="stylesheet" href="fontawesome-free-6.0.0-beta2-web\css\all.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <nav>
        <div class="logo">LALALA</div>
        <div class="icon">
            <li class=" fas fa-music" onclick="musicShow()"></li>
            <li class="fa fa-search"></li>
        </div>
    </nav>
    <div class="body">
        <div class="row">
            <div class="play_box">
                <li class="fas fa-play" id="play_btn" data-Songname="Stainless"></li>
                <div class="child">
                    <div class="text">
                        <h2>ARTIST</h2>
                        <h3>song_name</h3>
                    </div>
                    <div class="react_box">
                        <li class="fa fa-face-kiss-wink-heart"></li>
                        <li class="fa fa-heart"></li>
                    </div>
                </div>
                <a  href=""class="download_box">
                    <li class=" fas fa-cloud-download-alt" id="dbtn" data-path="Stainless.mp3"></li>
                </a>
            </div>
        </div>
        <div class="row">
            <div class="play_box">
                <li class="fas fa-play" id="play_btn" data-Songname="Surrender"></li>
                <div class="child">
                    <div class="text">
                        <h2>ARTIST</h2>
                        <h3>song_name</h3>
                    </div>
                    <div class="react_box">
                        <li class="fa fa-face-kiss-wink-heart"></li>
                        <li class="fa fa-heart"></li>
                    </div>
                </div>
                <a  href=""class="download_box">
                    <li class=" fas fa-cloud-download-alt" id="dbtn" data-path="Surrender.mp3"></li>
                </a>
            </div>
        </div>

        <div class="row">
            <div class="play_box">
                <li class="fas fa-play" id="play_btn" data-Songname="Godzilla"></li>
                <div class="child">
                    <div class="text">
                        <h2>ARTIST</h2>
                        <h3>song_name</h3>
                    </div>
                    <div class="react_box">
                        <li class="fa fa-face-kiss-wink-heart"></li>
                        <li class="fa fa-heart"></li>
                    </div>
                </div>
                <a  href=""class="download_box">
                    <li class=" fas fa-cloud-download-alt" id="dbtn" data-path="Godzilla.mp3"></li>
                </a>
            </div>
        </div>
        <div class="row">
            <div class="play_box">
                <li class="fas fa-play" id="play_btn" data-Songname="Forgive"></li>
                <div class="child">
                    <div class="text">
                        <h2>ARTIST</h2>
                        <h3>song_name</h3>
                    </div>
                    <div class="react_box">
                        <li class="fa fa-face-kiss-wink-heart"></li>
                        <li class="fa fa-heart"></li>
                    </div>
                </div>
                <a  href=""class="download_box">
                    <li class=" fas fa-cloud-download-alt" id="dbtn" data-path="Forgive.mp3"></li>
                </a>
            </div>
        </div>
    </div>
     <!-- pop-up-music -->
  <div class="music_wrapper " id="music_wrapper">
  <div class="music_container ">
      <audio src="" style="display:none;" id="audio"></audio>
         <div class="header">
             <li class=" fa fa-chevron-down"></li> 
             <span>Now playing</span>
             <span class="name-span">Now playing</span>
         </div>
         <div class="dispalay_img">
             <img src="" alt="" id="IMG-display">
         </div>
         <div class="box">
             <div class="dura_show">
                 <span id="currentTime"></span>
                 <div class="progress_cont">
                     <div class="progress_bar"></div>
                 </div>
                 <span id="durationTime"></span>
             </div>
             <div class="controls">
                 <li class="fa fa-repeat" onclick="command()" id="music_command"></li>
                 <li class="fa-solid fa-backward-step" onclick="prevmusic()" id="prev"></li>
                    <li class="fas fa-play" onclick="playmusic()"  id="playbtn"></li>
                    <li class="fa-solid fa-forward-step" onclick="nextmusic()" id="next"></li>
                    <li class="fas fa-sliders-h" onclick="showlist()" id="list_btn"></li>
             </div>
         </div>
         <div class="list">
                <div class="list_header">
                    <li class=" fas fa-music"><span>Music List</span></li>
                    <li class=" fas fa-angle-double-down" onclick="showlist()" id="cancellist"></li>
                </div>
               <div class="list_box">
               </div>
             </div>
     </div>
  </div>
     <!-- pop-up-music ends -->
</div>
<script src="index.js"></script>
</body>
</html>

<!-- fas fa-arrow-rotate-backward for play one -->