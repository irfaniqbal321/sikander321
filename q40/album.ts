function make_album(artistName:string,albumTitle:string,track?:number){
    let singer:{artist:string,title:string,tracks?:number}={
        artist:artistName,title:albumTitle,
    };
    if(track !==undefined){
        singer.tracks=track;

    }
    return singer;
}
let great_artist=make_album("michael jackson","last album")
console.log(great_artist);
let popular_artist=make_album("mohammad rafi","sad album",4)
console.log(popular_artist);


