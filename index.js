//black jackgame rules
//Number cards (2–10) → same value
//Face cards (J, Q, K) → value 10
//Ace (A) →  11
//A Blackjack happens when your first two cards total 21:
//Ace (11) + 10 / J / Q / K
let  message=document.getElementById("message-el")
let sumEl=document.querySelector("#sum-el")
let cardsEl=document.querySelector("#cards-el")
let ply=document.querySelector("#player-el")
let cards=[]
let sum=0
let hasblackjack=false
let isAlive=false
let player= {
    name: "sasi",
    chips : 123,
    sayHello : function(){
          return "Hello "+player.name +" 😘"
    }
}
ply.textContent = player.name +" $"+ player.chips +player.sayHello()
function startgame()
{    isAlive=true
    let firstcard=getRandomCard()
    let secondcard=getRandomCard()
    cards.push(firstcard)
    cards.push(secondcard)
    sum=firstcard+secondcard
    rendergame()
    
}
function rendergame(){
  sumEl.textContent="Sum: "+sum
  cardsEl.textContent="Cards: "
  for(let i=0;i<cards.length;i+=1)
  {
    cardsEl.textContent+=cards[i]+" "
  }
  
let mms=""
    if( sum <= 20)
{
    mms="Do you want to draw a new card? 😊😊"
    
} else if ( sum === 21)
{
    mms="Wohoo ! You have got Blackjack! 🥳"
    hasblackjack=true
}
else 
{
    mms="You are out of the game 😪"
    isAlive=false
}
message.textContent=mms


}
function newCard()
{   if( isAlive === true && hasblackjack === false ){
    let newcard=getRandomCard()
    sum+=newcard
    cards.push(newcard)
    rendergame()
}
}


let i=0
for( i=0;i<cards.length;i+=1)
{
    console.log(cards[i])
}
let greet=document.querySelector("#greet-el")

let sentence= ["Hello","sasi","dharani","😘"]

for(i=0;i<sentence.length;i++)
{
    greet.textContent+=sentence[i]+" "
}

let player1=100
let player2=150
 function total()
 {
    return player1+player2
 }
let final=total()
console.log(final)

function getRandomCard(){
    let randomVariable=Math.floor(Math.random()*13)+1
    if( randomVariable === 1)
        return 11
    else if ( randomVariable>=11)
        return 10
    else
        return randomVariable 
}

let randomNumber= Math.random()*6

console.log(randomNumber)

let flooredNumber =Math.floor(Math.random()*6)+1
console.log(flooredNumber)

function rollDice(){
    return Math.floor(Math.random()*6)+1
}
let rolldice=rollDice()
console.log(rolldice)


let likeDocumentaries = true
let likeStartups = true

if( likeDocumentaries === true || likeStartups === true)
{
    movie()
}

function movie(){
    console.log("Hey do checkout here")
}

let airbnd ={
 //composite data types
    title: "Airbnd castle",
    rooms:16,
    size:63,
    features:["good view" ,"peaceful"]
}

console.log(airbnd.rooms)

let person ={
    name : "sasi",
    age :19,
    country : "India"
}

function log(){
    console.log(person.name +" is "+ person.age+ " from "+person.country )
}
log()

let age =75
if( age< 6)
{
    console.log("free")
}
else if ( age<=17)
{
    console.log("Child discount")
}
else if(age<=26)
{
    console.log("student discount")
}
else if ( age<=66)
{
    console.log("full price")
}
else
{
    console.log("senior citizenship")
}

//array
let large=["china","india","usa","indonesia","pakisthan"]
for(let i=0;i<large.length;i+=1)
{
    console.log(" - " +large[i])
}

//shift remove first element
// add at the begiing
let modified=["Tuvalu","india","usa","indonesia","monaco"]
modified.shift()
modified.unshift("china")
modified.pop()
modified.push("pakisthan")
console.log(modified)

let day=13
let weekday= "Friday"

if( weekday === "Friday" && day === 13)
{
    console.log("😢")
}

let hands = ["rock","paper","sxissor"]
//create a function that returns a random item  from the array

function randomHand(){
    let index= Math.floor(Math.random()*3)
    console.log(hands[index])

}
randomHand()

let fruit =[ "🍎","🍊","🍎","🍎","🍊"]
let appleShelf= document.querySelector("#apple-shelf")
let orangeShelf = document.querySelector("#orange-shelf")

function arrange(){
for( let i=0; i < fruit.length; i+=1)
{
    if( fruit[i] === "🍎")
    {
        appleShelf.textContent += "🍎"
    }
    else
    {
        orangeShelf.textContent += "🍊"
    }
}
}
arrange()