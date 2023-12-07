const justFood = (number) =>{
    return `Catering od Just Food pro ${number} lidí za ${1000*number} Kč`
}

const yourMama = (number) =>{
    return `Catering od Your Mama pro ${number} lidí za ${1500*number} Kč`
}

const FlavourHeaven = (number) =>{
    return `Catering od Flavour Haven pro ${number} lidí za ${3000*number} Kč`
}

console.log(FlavourHeaven(100))

const createEvent = (name,number,company) => {
document.body.innerHTML +=`Událost ${name} s ${company(number)}`
}

createEvent("Inaugorace prezidenta", 100, FlavourHeaven)