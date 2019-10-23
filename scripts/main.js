const openNav = () => {
  if (document.getElementById("mySidenav").style.width && document.getElementById("mySidenav").style.width !== "0px") 
    return closeNav()
  if (document.getElementById("contactsButton").getAttribute("aria-expanded") === "true") 
    closeContacts()
  document
    .getElementById("mySidenav")
    .style
    .width = "12rem";
  document
    .getElementById("main")
    .style
    .marginLeft = "12rem";
  document.body.style.backgroundColor = "#6d8487";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
const closeNav = () => {
  document
    .getElementById("mySidenav")
    .style
    .width = "0";
  document
    .getElementById("main")
    .style
    .marginLeft = "0";
  document.body.style.backgroundColor = "#cbf1f6";
}

const closeContacts = () => {
  document
    .getElementById("contactsButton")
    .classList
    .add("collapsed")
  document
    .getElementById("contactsButton")
    .setAttribute("aria-expanded", "false")
  document
    .getElementById("contactsToggler")
    .classList
    .remove("show")
}

const scrollHandler = (elementId) => {
  const elmnt = document.getElementById(elementId)
  elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' })
  closeNav()
}

$(function() {
  $(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();
    $('.section').each(function() {
      var topDistance = $(this).offset().top;
      if ( (topDistance) < scrollTop ) {
        $('.top-nav button').css('color',$(this).attr('data-color'))
        $('.top-nav a').css('color',$(this).attr('data-color'))
        $('.side-nav button').css('color',$(this).attr('data-color'))
        $('.side-nav hr').css('background-color',$(this).attr('data-color'))
        $('.carousel-caption h2').css('color',$(this).attr('data-color'))
      }
    });
  });
})