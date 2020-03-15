// Link nhạc nền - cho bằng null nếu không muốn nhạc nền
// var bgMusicURL = 'https://vnno-vn-5-tf-mp3-s1-zmp3.zadn.vn/cb520df004b4edeab4a5/3902281053393594599?authen=exp=1584286098~acl=/cb520df004b4edeab4a5/*~hmac=ccc1ff6f1dfa912275c02438af3b0038&filename=Im-Lang-LK-P-A.mp3';
var bgMusicURL = 'assets/music/IMissU-Hoaprox-4411036.mp3';
var bgMusicControls = true; // Hiện khung điều khiển nhạc nền hay không - chọn true hoặc false (truongsofm)

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
if (!isChrome) {
    $('#iframeAudio').remove()
}
else {
    $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
}