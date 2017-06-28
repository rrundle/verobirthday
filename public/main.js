document.addEventListener('click', function(e) {
  if (e.target.className.indexOf('about') !== -1) {
    var about = document.querySelector('.about')
    zenscroll.to(about, 1000)
  }
  if (e.target.className.indexOf('projects') !== -1) {
    var projects = document.querySelector('.projects')
    zenscroll.to(projects, 1000)
  }
  if (e.target.className.indexOf('contact') !== -1) {
    var contact = document.querySelector('.contact')
    zenscroll.to(contact, 1000)
  }


  //End of adventure choice
  if (e.target.className.indexOf('yes') !== -1) {
    var contact = document.querySelector('.steps')
    contact.parent.removeChild(contact)

    var yes = document.createElement('div')
    yes.textContent = 'YES!!'
  }

  if (e.target.className.indexOf('no') !== -1) {
    var contact = document.querySelector('.steps')
    contact.parent.removeChild(contact)

    var no = document.createElement('div')
    no.textContent = 'NO!!'
  }
})
