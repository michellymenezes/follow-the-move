function captureUserMedia(mediaConstraints, successCallback, errorCallback) {
    navigator.mediaDevices.getUserMedia(mediaConstraints).then(successCallback).catch(errorCallback);
}
var mediaConstraints = {
    audio: !IsChrome && !IsOpera && !IsEdge, // record both audio/video in Firefox
    video: true
};

function start(song) {
    $('#modalSong' + song).modal('hide');
    var song = document.getElementById('audioInHTML'+song);
    song.pause();
    song.currentTime = 0.0;
    this.disabled = false;
    captureUserMedia(mediaConstraints, onMediaSuccess, onMediaError);
}
//document.querySelector('#start-recording').onclick = function() {
//    this.disabled = false;
//    captureUserMedia(mediaConstraints, onMediaSuccess, onMediaError);
//};
//
//document.querySelector('#maysa').onclick = function() {
//    this.disabled = false;
//    captureUserMedia(mediaConstraints, onMediaSuccess, onMediaError);
//};

//document.querySelector('#start-recording2').onclick = function() {
//    this.disabled = false;
//    captureUserMedia(mediaConstraints, onMediaSuccess, onMediaError);
//};
//
//document.querySelector('#start-recording3').onclick = function() {
//    this.disabled = false;
//    captureUserMedia(mediaConstraints, onMediaSuccess, onMediaError);
//};
//
//document.querySelector('#start-recording4').onclick = function() {
//    this.disabled = false;
//    captureUserMedia(mediaConstraints, onMediaSuccess, onMediaError);
//};
//
//document.querySelector('#start-recording5').onclick = function() {
//    this.disabled = false;
//    captureUserMedia(mediaConstraints, onMediaSuccess, onMediaError);
//};


var mediaRecorder;
function onMediaSuccess(stream) {
	
    var video = document.createElement('video');
    var videoWidth = 800;
    var videoHeight = 400;
    video = mergeProps(video, {
        controls: true,
        muted: true,
        width: videoWidth,
        height: videoHeight,
        src: URL.createObjectURL(stream)
    });
    video.play();
    videosContainer.appendChild(video);
    videosContainer.appendChild(document.createElement('hr'));
    mediaRecorder = new MediaStreamRecorder(stream);
    mediaRecorder.stream = stream;
    mediaRecorder.mimeType = 'video/webm'; // this line is mandatory
    mediaRecorder.videoWidth = videoWidth;
    mediaRecorder.videoHeight = videoHeight;
    
    mediaRecorder.ondataavailable = function(blob) {
        mediaRecorder.stop();
        
        if(index <= 1){
        mediaRecorder.save();
        var a = document.createElement('a');
        a.target = '_blank';
        a.innerHTML = 'Open Recorded Video No. ' + (index++) + ' (Size: ' + bytesToSize(blob.size) + ') Time Length: ' + getTimeLength(timeInterval);
        a.href = URL.createObjectURL(blob);
        videosContainer.appendChild(a);
        videosContainer.appendChild(document.createElement('hr'));

        }

    };
   // var timeInterval = document.querySelector('#time-interval').value;
   // if (timeInterval) timeInterval = parseInt(timeInterval) + 2000;
  //  else
    timeInterval = 5 * 1000;
    // get blob after specific time interval
//    console.log(recordingTime);
    mediaRecorder.start(timeInterval);
}
function onMediaError(e) {
    console.error('media error', e);
}
var videosContainer = document.getElementById('videos-container');
var index = 1;
// below function via: http://goo.gl/B3ae8c
function bytesToSize(bytes) {
    var k = 1000;
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Bytes';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)), 10);
    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}
// below function via: http://goo.gl/6QNDcI
function getTimeLength(milliseconds) {
    var data = new Date(milliseconds);
    return data.getUTCHours() + " hours, " + data.getUTCMinutes() + " minutes and " + (data.getUTCSeconds()-2) + " second(s)";
}
window.onbeforeunload = function() {
    //document.querySelector('#start-recording').disabled = false;
    //document.querySelector('#maysa').disable = false;
};