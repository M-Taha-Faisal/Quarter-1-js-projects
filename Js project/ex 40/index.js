function makeAlbum(name,title,tracks){
    return {
    ArtistName:name,
    AkbumTitle:title,
    NoOfTracks:tracks
}
}
const dict1=makeAlbum();
console.log(dict1);
const dict2=makeAlbum();
console.log(dict2);
const dict3=makeAlbum();
console.log(dict3)
console.log(makeAlbum("Ed Sheeran","Shape of you",1))