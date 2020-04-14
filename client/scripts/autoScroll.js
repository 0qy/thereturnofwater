const speed = 10

const scroll = () => {
  console.log('scroll script initialised')
  window.scroll(0, 1000)
}

// const initialise = () => {
//   console.log('autoScroll initialised')
//   setTimeout(scroll(), 50)
// }

window.onload = scroll()
