let magicians=['taha',"Ali","Asad"];
function show_magicians(){
    for (let magician of magicians){
        console.log (magician);
    }
};

show_magicians();
function makeGreat(){
for (let i=0;i<magicians.length;i++){
   magicians[i]=`The great ${magicians[i]}`
}
}
makeGreat();
show_magicians();
