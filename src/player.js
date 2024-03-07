document.addEventListener("loadstart", async () => {
  const button = document.querySelector("#player-button");
  const audio = document.querySelector(".audio");
  const image = document.querySelector(".player-image");

  button.addEventListener("click", () => {
    audio.volume = 0.02;
    player();
  });

  function player() {
    if (audio.paused) {
      audio.play();
      image.style.animationPlayState = "running";
      //   button.classList.toggle("play");
    } else {
      audio.pause();
      image.style.animationPlayState = "paused";
      //   button.classList.toggle("play");
    }
  }

  window.onload = () => {
    image.style.animationPlayState = "paused";
  };

  // bar

  var bar = document.getElementById("myBar");
  var barBuffer = document.getElementById("myBarBuffer");

  // La progression se recalcule chaque foi que <audio> fait un update
  audio.ontimeupdate = function () {
    progression();
  };

  // Recacul de la progresion
  function progression() {
    // Temps écoulé
    var new_position = fancyTimeFormat(audio.currentTime);
    document.getElementById("position").innerHTML = new_position;

    // Temps restant
    // var new_restant = fancyTimeFormat(audio.duration - audio.currentTime);
    // document.getElementById("restant").innerHTML = new_restant;

    // Pourcentage
    var new_percent = Math.round((audio.currentTime / audio.duration) * 100);
    bar.style.width = new_percent + "%";

    //Buffer
    var new_buffer = Math.round((audio.buffered.end(0) / audio.duration) * 100);
    barBuffer.style.width = new_buffer + "%";
  }

  function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    let ret = "";

    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;

    return ret;
  }
});
