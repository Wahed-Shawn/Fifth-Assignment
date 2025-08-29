// Heart Count Functionality
let heartCount = parseInt(document.getElementById('heartCount').innerText)
function heartIcon(id) {
    document.getElementById(id).addEventListener('click', function () {
        heartCount++
        document.getElementById('heartCount').innerText = heartCount
        document.getElementById(id).classList.add('fa-solid', 'text-red-600')
    })
}
heartIcon('heart-national')
heartIcon('heart-police')
heartIcon('heart-fire')
heartIcon('heart-ambulance')
heartIcon('heart-child')
heartIcon('heart-corruption')
heartIcon('heart-electricity')
heartIcon('heart-brac')
heartIcon('heart-rail')


// Copy Functionality
let copyCount = parseInt(document.getElementById('copyCount').innerText)
function copyIcon(id1, id2) {
    document.getElementById(id1).addEventListener('click', function () {
        copyCount++
        document.getElementById('copyCount').innerText = copyCount

        let msg = document.getElementById(id2).innerText
        alert(`Number copied: ${msg}`)
        console.log(msg);
    })
}
copyIcon('copy-national', 'msg-national')
copyIcon('copy-police')
copyIcon('copy-fire')
copyIcon('copy-ambulance')
copyIcon('copy-child')
copyIcon('copy-corruption')
copyIcon('copy-electricity')
copyIcon('copy-brac')
copyIcon('copy-rail')


// Calling functionality
let coinCount = parseInt(document.getElementById('coinCount').innerText)
function callIcon(id1, id2) {
    document.getElementById(id1).addEventListener('click', function () {
        if (coinCount > 0) {
            coinCount -= 20
            document.getElementById('coinCount').innerText = coinCount
            alert(`Calling to ${document.getElementById(id2).innerText}...`)
        }
        else {

            return (alert('not enough coin!!!'))
        }
    })
}
callIcon('call-national', 'msg-national')
callIcon('call-police', 'msg-police')
callIcon('call-fire', 'msg-fire')
callIcon('call-ambulance', 'msg-ambulance')
callIcon('call-child', 'msg-child')
callIcon('call-corruption', 'msg-corruption')
callIcon('call-electricity', 'msg-electricity')
callIcon('call-brac', 'msg-brac')
callIcon('call-rail', 'msg-rail')

