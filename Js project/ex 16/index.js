const guestList = ['Ali', 'Adnan', 'Hamza'];
console.log(`${guestList[0]} You are invited for dinner at my house`)
console.log(`${guestList[1]} You are invited for dinner at my house`)
console.log(`${guestList[2]} You are invited for dinner at my house`)
console.log(`${guestList[1]} couldn't make it!`)
guestList[1] = "Faisal";
console.log(`${guestList[0]} You are invited for dinner at my house`)
console.log(`${guestList[1]} You are invited for dinner at my house`)
console.log(`${guestList[2]} You are invited for dinner at my house`)

console.log("I found a bigger dinning table");
guestList.unshift("Asad");
guestList.splice(3, 0, 'Ajmal')
for (let guests of guestList) {
    console.log(`${guests} You are invited for dinner at my place`)
}