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
  console.log(timeblocks)
  console.log(JSON.parse(localStorage.getItem('timeblocks')))
  for (let i = 0; i < timeblocks.length; i++) {
    document.getElementById(timeblocks[i].time).children[1].textContent = timeblocks[i].input
    console.log(timeblocks[i].input)
    // let thisID = '#timeblocks[i].time'
    // // let childTwo = $(thisID).children('.description')
    // console.log($(thisID).attr('class'))
    // // console.log(childTwo).attr('class')
  }
}

// initalize local memory
fromMemory()
toMemory()

$(document).click(event => {
  event.preventDefault()
  // if its the blue button OR the icon in the blue button
  if (event.target.classList.contains('saveBtn')) {
    // grab text input
    let txt = $(event.target).siblings('.description').val()
    let pid = $(event.target).parent().attr('id')
    console.log('pid = ' + pid)
    console.log(timeblocks[0].time)
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
    console.log('pid = ' + pid)
    console.log('txt = ')
    console.log(timeblocks[0].time)
    console.log('txt = ' + txt)
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
