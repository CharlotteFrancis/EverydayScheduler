// array of the time blocks
let noTimeblocks = [
  {
    time: 'hour-9',
    input: ''
  },
  {
    time: 'hour-10',
    input: ''
  },
  {
    time: 'hour-11',
    input: ''
  },
  {
    time: 'hour-12',
    input: ''
  },
  {
    time: 'hour-13',
    input: ''
  },
  {
    time: 'hour-14',
    input: ''
  },
  {
    time: 'hour-15',
    input: ''
  },
  {
    time: 'hour-16',
    input: ''
  },
  {
    time: 'hour-17',
    input: ''
  }
]
let timeblocks
// time
const hours = new Date()

// function that sets colors
const myColor = _ => {
  let myPrefix = 'hour-'

  for (let i = 9; i < timeblocks.length + 9; i++) {
    myPrefix = 'hour-'
    myPrefix += i
    if (i < hours.getHours()) {
      document.getElementById(myPrefix).children[1].classList.add('past')
    } else if (i === hours.getHours()) {
      document.getElementById(myPrefix).children[1].classList.add('present')
    } else {
      document.getElementById(myPrefix).children[1].classList.add('future')
    }
  }
}
// function that turns timeblock into local memory
const toMemory = _ => {
  localStorage.setItem('timeblocks', JSON.stringify(timeblocks))
}
// function that saves local memory into timeblock
const fromMemory = _ =>{
  timeblocks = JSON.parse(localStorage.getItem('timeblocks')) || noTimeblocks
}
// function that renders it out the array
const renderMemory = _ =>{
  fromMemory()
  for (let i = 0; i < timeblocks.length; i++) {
    document.getElementById(timeblocks[i].time).children[1].innerHTML = timeblocks[i].input
  }
  myColor()
}

// initalize local memory
fromMemory()
toMemory()
myColor()
// initalize array onto screen
renderMemory()

$(document).click(event => {
  event.preventDefault()
  // if its the blue button OR the icon in the blue button
  if (event.target.classList.contains('saveBtn')) {
    // grab text input
    let txt = $(event.target).siblings('.description').val()
    let pid = $(event.target).parent().attr('id')

    // set txt to the timeblock array
    for (let i = 0; i < timeblocks.length; i++) {
      if (timeblocks[i].time === pid) {
        timeblocks[i].input = txt
      }
    }
    toMemory()
    renderMemory()
  } else if (event.target.classList.contains('fa-save')) { // second catch for the button icon
    // grab text input
    let txt = $(event.target).parent().siblings('.description').val()
    let pid = $(event.target).parent().parent().attr('id')
    // set txt to the timeblock array
    for (let i = 0; i < timeblocks.length; i++) {
      if (timeblocks[i].time === pid) {
        timeblocks[i].input = txt
      }
    }
    toMemory()
    renderMemory()
  }
})
