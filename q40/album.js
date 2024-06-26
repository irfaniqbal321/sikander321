function make_album(artistName, albumTitle, track) {
    var singer = {
        artist: artistName, title: albumTitle,
    };
    if (track !== undefined) {
        singer.tracks = track;
    }
    return singer;
}
var great_artist = make_album("michael jackson", "last album");
console.log(great_artist);
var popular_artist = make_album("mohammad rafi", "sad album", 4);
console.log(popular_artist);
