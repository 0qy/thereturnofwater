var speed = 1

var currentpos = 0; var alt = 1; var curpos1 = 0; var curpos2 = -1

function initialize () {
  startit()
}

function scrollwindow (temp) {
  if (document.all && !document.getElementById) {
    temp = document.body.scrollTop
  } else { temp = window.pageYOffset }

  if (alt === 0) {
    alt = 2
  } else { alt = 1 }

  if (alt === 0) {
    curpos1 = temp
  } else { curpos2 = temp }

  if (curpos1 !== curpos2) {
    if (document.all) {
      currentpos = document.body.scrollTop + speed
    } else { currentpos = window.pageYOffset + speed }

    window.scroll(0, currentpos)
  } else {
    currentpos = 0

    window.scroll(0, currentpos)
  }
}

function startit () {
  console.log('started')
  setInterval(scrollwindow(), 50)
}

window.onload = initialize
