let y_origin = parseInt($('.game-window').height() / 2) - 25
let width = parseInt($('.game-window').width())
let height = parseInt($('.game-window').height())
const spaceShip = $('#space-ship')
let y_pos = 0
let x_pos = 0
let ang = 90
spaceShip.css('top', `${y_origin}px`)
spaceShip.css('left', `10px`)

setInterval(() => {
  Shoot()
}, 50)

$(window).resize(function () {
  height = parseInt($('.game-window').height())
  width = parseInt($('.game-window').width()) - 10
})
$('body').css({ overflow: 'hidden' })
$(document).bind('scroll', function () {
  window.scrollTo(0, 0)
})

$('.btn-up').click(moveUp)
$('.btn-down').click(moveDown)
$('.btn-left').click(moveLeft)
$('.btn-right').click(moveRight)
$('.btn-rotate-right').click(rotateRight)
$('.btn-rotate-left').click(rotateLeft)
$(document).keydown((e) => {
  if (e.code === 'ArrowUp') moveUp()
  else if (e.code === 'ArrowDown') moveDown()
  else if (e.code === 'ArrowLeft') moveLeft()
  else if (e.code === 'ArrowRight') moveRight()
  else if (e.code === 'KeyQ') rotateLeft()
  else if (e.code === 'KeyE') rotateRight()
})

function rotateRight() {
  ang = ang + 1
  spaceShip.css('transform', `rotate(${ang}deg)`)
}
function rotateLeft() {
  ang = ang - 1
  spaceShip.css('transform', `rotate(${ang}deg)`)
}

function moveLeft() {
  if (x_pos !== 0) {
    x_pos = x_pos - 15
    spaceShip.css('left', `${10 + x_pos}px`)
  }
}
function moveRight() {
  if (x_pos <= width - 60) {
    x_pos = x_pos + 15
    spaceShip.css('left', `${10 + x_pos}px`)
  }
}

function moveUp() {
  if (y_pos > -(height / 2 - 35)) {
    y_pos -= 10
    spaceShip.css('top', `${y_origin + y_pos}px`)
  }
}
function moveDown() {
  if (y_pos < height / 2 - 35) {
    y_pos += 10
    spaceShip.css('top', `${y_origin + y_pos}px`)
  }
}

function Shoot() {
  const pos = spaceShip.position()
  $('.game-window p').text(
    `(x:${(pos.left - 10).toFixed(2)},y:${(pos.top - 5).toFixed(
      2
    )},Θ:${ang}deg)`
  )
}
