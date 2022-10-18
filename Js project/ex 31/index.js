const usernames = ['admin', 'Ali', 'Taha', "Adnan", "Faisal"];
for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello Admin!")
    } else {
        console.log(`Hello ${username} Welcome to PIAIC`)
    }
}

usernames.length = 0;
if (usernames.length === 0) {
    console.log("We need users")
}