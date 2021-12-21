
const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
]

attendances.push(['cihan',10] ,['burak', 9] ,['arif',10])
console.log(attendances);
attendances.splice(1,1,["Elamin", 10])
console.log(attendances)
var name = attendances[0][0];
var lastStudent = attendances[8] [0]
var numbers = (attendances.length) + 1
console.log('bugun ' + numbers + ' kişi geldi ' + ' first student name was '  + name + ' and last student name was ' +lastStudent+'.'  )
let ageAverage =((attendances[0][1]+attendances[1][1]+ attendances[2][1] + attendances[3][1]+ attendances[4][1]+ attendances[5][1]+ attendances[6][1]+ attendances[7][1]+ attendances[8][1])/9).toFixed(2)
console.log(ageAverage)
attendances.shift()
console.log(attendances)
attendances.splice(2,1)
console.log(attendances)
numbers=attendances.length
console.log(`${numbers} öğrenciyle dersi bitirdik.`)