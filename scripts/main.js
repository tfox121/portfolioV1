// Handles formation and sending of contact form requests and display of responses
const contactSend = () => {
  event.preventDefault()
  const contactName = document.getElementById('contactNamegtyh').value
  const contactEmail = document.getElementById('contactEmailgtyh').value
  const contactMessage = document.getElementById('contactMessagegtyh').value

  const url = 'https://qnfwo92feh.execute-api.eu-west-1.amazonaws.com/prod/contact'
  const data = { name: contactName, email: contactEmail, message: contactMessage }

  const fetchData = {
    method: 'POST',
    body: JSON.stringify(data)
  }

  fetch(url, fetchData)
    .then(function (response) {
      return response.json()
    })
    .then((data) => {
      document.getElementById('contactResponse').innerHTML = data.message
      document.getElementById('contactNamegtyh').value = ''
      document.getElementById('contactEmailgtyh').value = ''
      document.getElementById('contactMessagegtyh').value = ''
    })
    .catch(function (error) {
      document.getElementById('contactResponse').innerHTML = 'Sorry your message could not be sent, please try again!'
      console.error(error)
    })
}

// Opening the side nav
const openNav = () => {
  // Close side nav if open
  if (document
    .getElementById('sideNav')
    .style
    .width &&
    document
      .getElementById('sideNav')
      .style
      .width !== '0px') {
    closeNav()
    return
  }

  // Close contacts dropdown if open before opening side nav
  if (document
    .getElementById('contactsButton')
    .getAttribute('aria-expanded') === 'true') {
    closeContacts()
  }

  document
    .getElementById('sideNav')
    .style
    .width = '12em'
  const sections = document.querySelectorAll('section')
  Array
    .from(sections)
    .forEach((section) => {
      section.style.filter = 'brightness(80%)'
    })
}

// Closing the side nav
const closeNav = () => {
  document
    .getElementById('sideNav')
    .style
    .width = '0'
  document.body.style.backgroundColor = '#cbf1f6'
  const sections = document.querySelectorAll('section')
  Array
    .from(sections)
    .forEach((section) => {
      section.style.filter = 'brightness(100%)'
    })
}

// Close contacts function to simulate Bootstrap collapse
const closeContacts = () => {
  document
    .getElementById('contactsButton')
    .classList
    .add('collapsed')
  document
    .getElementById('contactsButton')
    .setAttribute('aria-expanded', 'false')
  document
    .getElementById('contactsToggler')
    .classList
    .remove('show')
}

// Scroll smoothly to element
const scrollHandler = (elementId) => {
  const elmnt = document.getElementById(elementId)
  elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' })
  closeNav()
  closeContacts()
}

// Change colour of nav elements according to window location
const colorChanger = () => {
  const sections = document.querySelectorAll('section')
  Array
    .from(sections)
    .forEach((section) => {
      if (section.offsetTop <= window.scrollY) {
        Array
          .from(document.querySelectorAll('#topNav button, #topNav a, #topNav a, #sideNav button'))
          .forEach((element) => {
            element.style.color = section.getAttribute('data-color')
          })
        Array
          .from(document.querySelectorAll('#sideNav hr'))
          .forEach((element) => {
            element.style.backgroundColor = section.getAttribute('data-color')
          })
      }
    })
}

// Set all section colours according to respective data-color attribute
const colorSetter = () => {
  const sections = document.querySelectorAll('section')
  Array
    .from(sections)
    .forEach((section) => {
      section.style.backgroundColor = section.getAttribute('data-color')
      section.style.color = section.getAttribute('data-color')
      Array
        .from(section.querySelectorAll('.githubLink, #contactSend, .dropdown-menu'))
        .forEach((element) => {
          element.style.backgroundColor = section.getAttribute('data-color')
        })
      Array
        .from(section.querySelectorAll('input, textarea'))
        .forEach((element) => {
          element.style.borderBottom = `2px solid ${section.getAttribute('data-color')}`
          element.style.color = section.getAttribute('data-color')
        })
      Array
        .from(section.querySelectorAll('h4'))
        .forEach((element) => {
          element.style.color = section.getAttribute('data-color')
        })
    })
}

window.addEventListener('scroll', (event) => {
  colorChanger()
})

const fade = (element) => {
  let opacity = 1
  const timer = setInterval(() => {
    if (opacity <= 0.01) {
      clearInterval(timer)
    }
    element.style.opacity = opacity
    element.style.filter = 'alpha(opacity=' + opacity * 100 + ')'
    opacity -= opacity * 0.05
  }, 3)
}

const unfade = (element) => {
  var opacity = 0.01
  var timer = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(timer)
    }
    element.style.opacity = opacity
    element.style.filter = 'alpha(opacity=' + opacity * 100 + ')'
    opacity += opacity * 0.05
  }, 1)
}

// Temporarily fade down carat to text indicating projects below
const lookHere = () => {
  const button = document.querySelectorAll('#scrollHint')[0]
  fade(button)
  setTimeout(() => {
    button.style.fontSize = '1.5em'
    button.innerHTML = 'Check out some of my projects below.'
    setTimeout(() => {
      unfade(button)
      setTimeout(() => {
        fade(button)
        setTimeout(() => {
          button.style.fontSize = '3em'
          button.innerHTML = "<i class='fas fa-chevron-down'></i>"
          setTimeout(() => {
            unfade(button)
          }, 80)
        }, 1000)
      }, 2000)
    }, 80)
  }, 1000)
}

// Auto peek elements on load
window.onload = () => {
  // Removed nav peek as it doesn't seem necessary. Un-comment below to re-enable
  //  document.querySelectorAll('#sideNav')[0].style.transition = '1s'
  //  openNav()
  //  setTimeout(() => {
  //   closeNav()
  //   document.querySelectorAll('#sideNav')[0].style.transition = '0.5s'
  // }, 2000)
  setTimeout(() => {
    lookHere()
  }, 3000)
}

colorSetter()
colorChanger()
