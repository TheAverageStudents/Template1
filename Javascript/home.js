document.getElementsByClassName("no-js")[0].remove()
/**
 * Initializers
 */

const block = document.getElementById("block");

(
    load = () => {
        block.hidden = false
        document.getElementById("block").style.animation = "load 2000ms linear infinite"
    }
)();

(
    stopLoad = () => {
        block.hidden = true
        document.getElementById("block").style.animationPlayState = "paused"
    }
);

const loaded = ()=>{
    stopLoad(); block.style.transition = "1000ms"; block.hidden = true
    document.getElementsByClassName("load")[0].hidden = true
    document.querySelector("#topbar").hidden = false
    document.querySelector("#sidebarFrame").hidden = false
    switchContent(homeCode, initializeHome)
    document.getElementsByTagName("viewer")[0].hidden = false
    flyer.hidden = false
}


/**
 * Loaders
 */

function Count(){loadCounter++; if(loadCounter == 2){loaded()}}
var loadCounter = 0

const scripts = document.querySelector("#scripts")

//This is the main style to be loaded

const style1 = document.createElement("link")
style1.rel = "stylesheet"; style1.href = "../Styles/home.css"
style1.addEventListener("load", ()=>Count())

/*Fly - In codes */

const html1 = document.createElement("div")
const donateCode = document.createElement("div")
const cookieCode = document.createElement("div")
const contactCode = document.createElement("div")
const discordCode = document.createElement("div")
const creationLifeCode = document.createElement("div")

/*Main viewer codes */

const homeCode = document.createElement("section")

;(
    async ()=>{
        homeCode.innerHTML = await (await fetch("../Website/homeCode.html")).text()
    }
)().then(()=>Count());


//document.querySelector("#about").insertAdjacentElement("afterbegin", html1)
scripts.insertAdjacentElement("beforeend", style1)


/**
 * Template code begin
 */

const OverlayContainer = document.getElementById("OverlayContainer")
const menuicon = document.getElementById("menuicon")
const sidebarFrame = document.getElementById("sidebarFrame")
const sidebar = document.getElementById("sidebar")
const wrap = document.getElementById("wrap")

function showSidebar(){
    sidebarFrame.style.animation = "showSidebar 800ms"
    sidebarFrame.style.marginLeft = "1vw"
    OverlayContainer.hidden = false
    OverlayContainer.addEventListener("mouseenter", ()=>{hideSidebar()})
}

function hideSidebar(){
    sidebarFrame.style.animation = "hideSidebar 800ms"
    sidebarFrame.style.marginLeft = "-25vw"
    OverlayContainer.hidden = true
    OverlayContainer.removeEventListener("mouseenter", ()=>{})
}

OverlayContainer.addEventListener("mouseenter", ()=>{hideSidebar()})

menuicon.addEventListener("mouseenter", ()=>showSidebar())


/**
 * Cookie code
 */
function getCookie(id){
    var cString = document.cookie.replace(/ /g, "")
    var cookies = {}
    cString = cString.split(";")
    for(var i of cString){
        cookies[i.split("=")[0]] = i.split("=")[1]
    }
    if(cookies[id]){return cookies[id]}
    else{return false}
}

/**
 * Fly-In code
 */

const flyer = document.getElementsByTagName("flyin")[0]
const cross = document.getElementById("cross")
const OverlayContainer2 = document.getElementById("OverlayContainer2")


function fly(lol, what){
    hideSidebar()
    document.querySelector("#flyContent").innerHTML = ""
    document.querySelector("#flyContent").insertAdjacentElement("afterbegin", lol)
    document.querySelector("#flyTitle").innerText = what
    flyer.style.animation = "fly 400ms"
    flyer.style.top = "15vh"
    OverlayContainer2.hidden = false
}

//Function to hide flyer

function hide(){
    flyer.style.animation = "hide 400ms"
    flyer.style.top = "110vh"
    OverlayContainer2.hidden = true
}

OverlayContainer2.addEventListener("click", ()=>hide())
cross.addEventListener("click", ()=>hide())

/**
 * MAIN CODE
 */

const OverlayViewer = document.getElementsByTagName("OverlayViewer")[0]

const homeButton = document.getElementById("homeButton")

function switchContent(content, initializer){
    wrap.innerHTML = ''
    wrap.insertAdjacentElement("afterbegin", content)
    initializer()
    hideSidebar()
}

homeButton.addEventListener("click", ()=>switchContent(homeCode, initializeHome))

function initializeHome(){
    console.log("Home.")
}

function Overlay(element){
    OverlayViewer.innerHTML = ""
    OverlayViewer.insertAdjacentElement("afterbegin", element)
}