// Basic attribute value
const basicStr = document.getElementById('attributeStr')
const basicDex = document.getElementById('attributeDex')
const basicCon = document.getElementById('attributeCon')
const basicInt = document.getElementById('attributeInt')
const basicWis = document.getElementById('attributeWis')
const basicCha = document.getElementById('attributeCha')

// Race modifier
const bonusStr = document.getElementById('bonusStr')
const bonusDex = document.getElementById('bonusDex')
const bonusCon = document.getElementById('bonusCon')
const bonusInt = document.getElementById('bonusInt')
const bonusWis = document.getElementById('bonusWis')
const bonusCha = document.getElementById('bonusCha')

// Total Score
const totalStr = document.getElementById('totalStr')
const totalDex = document.getElementById('totalDex')
const totalCon = document.getElementById('totalCon')
const totalInt = document.getElementById('totalInt')
const totalWis = document.getElementById('totalWis')
const totalCha = document.getElementById('totalCha')

// Modifer
const modStr = document.getElementById('modiferStr')
const modDex = document.getElementById('modiferDex')
const modCon = document.getElementById('modiferCon')
const modInt = document.getElementById('modiferInt')
const modWis = document.getElementById('modiferWis')
const modCha = document.getElementById('modiferCha')

function calcTotal(basic,bonus){
    return (parseInt(basic.value) + parseInt(bonus.value));
}

function calcMod(total){
    let mod = 0;
    mod = (parseInt(total.textContent) - 10)/2;
    return Math.floor(mod);
}

function start(){
    totalStr.textContent = calcTotal(basicStr,bonusStr)
    modStr.textContent = calcMod(totalStr)
    totalDex.textContent = calcTotal(basicDex,bonusDex)
    modDex.textContent = calcMod(totalDex)
    totalCon.textContent = calcTotal(basicCon,bonusCon)
    modCon.textContent = calcMod(totalCon)
    totalInt.textContent = calcTotal(basicInt,bonusInt)
    modInt.textContent = calcMod(totalInt)
    totalWis.textContent = calcTotal(basicWis,bonusWis)
    modWis.textContent = calcMod(totalWis)
    totalCha.textContent = calcTotal(basicCha,bonusCha)
    modCha.textContent = calcMod(totalCha)
}

start()

// Basic attribute
basicStr.addEventListener("input", function() {
    totalStr.textContent = calcTotal(basicStr,bonusStr)
    modStr.textContent = calcMod(totalStr)
});

basicDex.addEventListener("input", function() {
    totalDex.textContent = calcTotal(basicDex,bonusDex)
    modDex.textContent = calcMod(totalDex)
});

basicCon.addEventListener("input", function() {
    totalCon.textContent = calcTotal(basicCon,bonusCon)
    modCon.textContent = calcMod(totalCon)
});

basicInt.addEventListener("input", function() {
    totalInt.textContent = calcTotal(basicInt,bonusInt)
    modInt.textContent = calcMod(totalInt)
});

basicWis.addEventListener("input", function() {
    totalWis.textContent = calcTotal(basicWis,bonusWis)
});

basicCha.addEventListener("input", function() {
    totalCha.textContent = calcTotal(basicCha,bonusCha)
});

// Race bonus
bonusStr.addEventListener("input", function() {
    totalStr.textContent = calcTotal(basicStr,bonusStr)
    modStr.textContent = calcMod(totalStr)
});

bonusDex.addEventListener("input", function() {
    totalDex.textContent = calcTotal(basicDex,bonusDex)
    modDex.textContent = calcMod(totalDex)
});

bonusCon.addEventListener("input", function() {
    totalCon.textContent = calcTotal(basicCon,bonusCon)
    modCon.textContent = calcMod(totalCon)
});

bonusInt.addEventListener("input", function() {
    totalInt.textContent = calcTotal(basicInt,bonusInt)
    modInt.textContent = calcMod(totalInt)
});

bonusWis.addEventListener("input", function() {
    totalWis.textContent = calcTotal(basicWis,bonusWis)
    modWis.textContent = calcMod(totalWis)
});

bonusCha.addEventListener("input", function() {
    totalCha.textContent = calcTotal(basicCha,bonusCha)
    modCha.textContent = calcMod(totalCha)
});
