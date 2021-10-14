var $btnStart = document.querySelector('#btn-start')
var $btnStop = document.querySelector('#btn-stop')
var $timerInput = document.querySelector('#timer-input')
var $headerTimer = document.querySelector('#header-timer')

var isTimerStarted = false

function show($el) {
    $el.classList.remove('hide')
}

function hide($el) {
    $el.classList.add('hide')
}

$btnStart.addEventListener('click', timerStart)
$btnStop.addEventListener('click', timerStop)

var interval = setInterval(function() {
    var time = $headerTimer.textContent
    if (time <= 0) {
        clearInterval(interval)
        timerStop()
    } else {
        $headerTimer.textContent = time - 1
    }
}, 1000);

function timerStart() {

    setTime()

    $timerInput.setAttribute('disabled', true)

    isTimerStarted = true

    if (isTimerStarted) {
    let interval = setInterval(function() {
        var time = $headerTimer.textContent
        if (time <= 0) {
            clearInterval(interval)
            timerStop()
        } else {
            $headerTimer.textContent = time - 1
        }
    }, 1000);
    }
}

function setTime() {
    var time = +$timerInput.value
    $headerTimer.textContent = time
    show($btnStop)
    hide($btnStart)
}


function timerStop() {
    isTimerStarted = false
    $headerTimer.textContent = 0
    $timerInput.removeAttribute('disabled')
    show($btnStart)
    hide($btnStop) 
}