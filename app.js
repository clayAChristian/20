ps = 0;
 cs = 0;
do {
    var num = Math.floor(Math.random() * 10) * 1;
    cs = cs + num;
    alert(`The CPU got ${num}. CPU new total is ${cs}`)

} while (cs <= 16)


alert("Now its your turn")

do {
    var num = Math.floor(Math.random() * 10) * 1;
    ps = ps + num;
    alert(`Your number is ${num}. Your total is ${ps}`)
    var p1 = prompt("Would you like to go again? Y or N")

} while ((ps <= 19) && (p1 == "y"))

alert(`CPU: ${cs}. YOU: ${ps}.`)

if (cs > ps) {
    alert(`CPU score: ${cs} YOU score: ${ps}`)
}