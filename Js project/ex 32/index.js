let current_users=['Fahad','Asad',"Bilal","Danish","Imran"];
let new_users=["Sheheryar","Asad","Sajid","Babar","Orhan"];
for (let nusers of new_users){
    for (let cusers of current_users){
    if (nusers===cusers){
        console.log("You will need a new Username");
    } else if(nusers===cusers.toUpperCase){
        console.log("You will need a new username");
    } else {
        console.log("Username is available");
    }
    }
};
