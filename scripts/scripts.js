const colors = document.querySelector("#color")
const button = document.querySelector(".button")
const body = document.querySelector("body")
const details = document.querySelector(".details")
const savedColors = []

button.addEventListener("click", (e) => {
    if(colors.value === "RGB"){
        details.innerHTML = ''
        const r = Math.floor(Math.random()*256)
        const g = Math.floor(Math.random()*256)
        const b = Math.floor(Math.random()*256)
        
        newColor = "rgb(" + r + "," + g +"," + b + ")"
        savedColors.push(newColor)
        body.style.backgroundColor = newColor
        const h1 = document.createElement("h1")
        h1.classList.add("heading")
        h1.innerText = newColor
        details.append(h1)
        
    }else if(colors.value === "HEX"){
        details.innerHTML = ''
        let xCharacters = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
        const h1 = document.createElement("h1")
        h1.classList.add("heading")
        let xColor = '#'

        for(let i = 0; i < 6; i++){
            let randomIndex = Math.floor(Math.random()* xCharacters.length)
            xColor += xCharacters[randomIndex]
            body.style.backgroundColor = xColor
            h1.innerText = xColor
            details.append(h1)
        }
        savedColors.push(xColor)
    }else if(colors.value === "HSL"){
        details.innerHTML = ''
        const h = Math.floor(Math.random()*350)
        const s = Math.floor(Math.random()*100)
        const l = Math.floor(Math.random()*100)

        newColor = "hsl(" + h + ", " + s +"%" + ", " + l + "%" + ")"
        savedColors.push(newColor)
        body.style.backgroundColor = newColor

        const h1 = document.createElement("h1")
        h1.classList.add("heading")
        h1.innerText = newColor
        details.append(h1)
    }
    console.log(savedColors);
    localStorage.setItem("savedColors", JSON.stringify(savedColors))
}) 
