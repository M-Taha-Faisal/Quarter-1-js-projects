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
console.log("I can Invite only two people");
const a = guestList.pop()
console.log(`${a} Sorry I couldn't Invite you`)
const b = guestList.pop()
console.log(`${b} Sorry I couldn't Invite you`)
const c = guestList.pop()
console.log(`${c} Sorry I couldn't Invite you`)
guestList.pop()
guestList.pop()
console.log(guestList)