$input = document.querySelector('#text-input')
$h2 = document.querySelector('#header-text')

// var repText = $input.addEventListener('keyup', function(){
//     setTimeout(() => {
//       $h2.textContent = $input.value;
//     }, 300)
//   })
function delay(fn, ms) {
  let timer = 0
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(fn.bind(this, ...args), ms || 0)
  }
}


$input.addEventListener('keyup', (delay(function (e) {
  $h2.textContent = $input.value
}, 300)));