document.addEventListener('click', function(e) {
  if (e.target.className.indexOf('when') !== -1) {
    console.log('clicked!');
    var date = document.querySelector('.date')
    zenscroll.to(date, 1000)
  }

  if (e.target.className.indexOf('where') !== -1) {
    var santaAna = document.querySelector('.santaana')
    zenscroll.to(santaAna, 1000)
  }

  if (e.target.className.indexOf('huh') !== -1) {
    var embassy = document.querySelector('.embassy')
    zenscroll.to(embassy, 1000)
  }

  if (e.target.className.indexOf('it') !== -1) {
    var list = document.querySelector('.list')
    zenscroll.to(list, 1000)
  }

  if (e.target.className.indexOf('how') !== -1) {
    var final = document.querySelector('.final')
    zenscroll.to(final, 1000)
  }

  if (e.target.className.indexOf('no') !== -1) {
    var restart = document.querySelector('.restart')
    zenscroll.to(restart, 1000)
  }

  if (e.target.className.indexOf('ok') !== -1) {
    var header = document.querySelector('.final')
    zenscroll.to(header, 1000)
  }

  //End of adventure choice
  if (e.target.className.indexOf('yes') !== -1) {
    var contact = document.querySelector('.steps')
    contact.parentNode.removeChild(contact)

    var header = document.querySelector('.header')
    header.textContent = ''

    var yes = document.createElement('div')
    yes.textContent = 'YES!!'
    yes.setAttribute('id', 'confirm')

    var love = document.createElement('div')
    love.textContent = "I love you so much!"
    love.setAttribute('id', 'love')

    var title = document.querySelector('.title')
    title.appendChild(yes)

    yes.appendChild(love)
  }
})
