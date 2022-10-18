let magicians=['taha',"Ali","Asad"];
let greats=[];
function show_magicians(a){
console.log(a)
};
show_magicians();
function makeGreat(){
for (let i=0;i<magicians.length;i++){
   greats[i]=`The great ${magicians[i]}`
}
}
makeGreat();
show_magicians(magicians)
show_magicians(greats);
