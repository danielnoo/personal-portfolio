

const app = {}


// declarations for buttons and hover effects

app.projectParents = [];
app.projectDetails = [];

app.projectParents[0] = document.querySelector('#projectOneParent');
app.projectDetails[0] = document.querySelector('#projectOneDetails');
app.projectParents[1] = document.querySelector('#projectTwoParent');
app.projectDetails[1] = document.querySelector('#projectTwoDetails');
app.projectParents[2] = document.querySelector('#projectThreeParent');
app.projectDetails[2] = document.querySelector('#projectThreeDetails');
app.projectParents[3] = document.querySelector('#projectFourParent');
app.projectDetails[3] = document.querySelector('#projectFourDetails');
app.projectParents[4] = document.querySelector('#projectFiveParent');
app.projectDetails[4] = document.querySelector('#projectFiveDetails');
app.projectParents[5] = document.querySelector('#projectSixParent');
app.projectDetails[5] = document.querySelector('#projectSixDetails');


/////project type selection buttons
app.allButton = document.querySelector('#allButton');
app.reactButton = document.querySelector('#reactButton');
app.jsButton = document.querySelector('#jsButton');

///// home nav button declarations

app.homeButton = document.querySelector('.homeButton');
app.workButton = document.querySelector('.workButton');
app.aboutButton = document.querySelector('.aboutButton');


//////come back to finish with add/remove visibility to about page
// also see about adding removing smooth scroll during function

app.handleNavClick = (e) => {
  e.preventDefault();
  
  const aboutPage = document.querySelector('#aboutSection');
  const projectsPage = document.querySelector('#projectPage');
  const selectedLink = document.querySelector('.navSelected');
  selectedLink.classList.remove('navSelected');
  e.target.classList.add('navSelected');

  if(e.target.innerText === 'Work') {
    projectsPage.classList.remove('notVisible');
    if(!aboutPage.classList.contains('notVisible')) {
      aboutPage.classList.add('notVisible');
    }
    window.scroll({
      top: 850,
      left: 0,
      behavior: 'smooth'
    });
  } else if(e.target.innerText === 'About') {
    projectsPage.classList.add('notVisible');
    aboutPage.classList.remove('notVisible');
  } else {
    projectsPage.classList.remove('notVisible');
    if(!aboutPage.classList.contains('notVisible')) {
      aboutPage.classList.add('notVisible');
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}


app.selectProjectStyle = (e) => {
  app.projectParents.forEach(project => {
    project.classList.remove('notVisible');
  })
  if(e.target.innerText === 'All') {
    app.allButton.classList.add('selected');
    app.reactButton.classList.remove('selected');
    app.jsButton.classList.remove('selected');
    
    app.projectParents.forEach(project => {
      if(project.classList.contains('notVisible')) {
         project.classList.toggle('notVisible');
        } 
     
    })
  } else if(e.target.innerText === 'React') {
    app.allButton.classList.remove('selected');
    app.reactButton.classList.add('selected');
    app.jsButton.classList.remove('selected');

    app.projectParents.forEach((project, index) => {
      if(index > 1) {
        project.classList.toggle('notVisible');
      }
    })
  } else {
    app.allButton.classList.remove('selected');
    app.reactButton.classList.remove('selected');
    app.jsButton.classList.add('selected');

    app.projectParents.forEach((project, index) => {
      if(index === 2 || index === 5) {
        project.classList.remove('notVisible');
      } else {
        project.classList.add('notVisible');
      }
    })
  }
}


/// footer nav declarations
/// the footer work button is left as a link to behave beter on mobile and weird screens

app.footerHomeButton = document.querySelector('#footerHomeButton');
app.footerAboutButton = document.querySelector('#footerAboutButton');

//// two simple callback functions to deal handle clicks in the footer Nav
/// if clicked in the about page, reset the nav selections, otherwise this change
/// is handled by the scroll listener function resetTopNav
app.footerHomeButtonClick = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

   if(app.aboutButton.classList.contains('navSelected')) {
    const aboutPage = document.querySelector('#aboutSection');
    const projectsPage = document.querySelector('#projectPage');
    app.aboutButton.classList.remove('navSelected');
    app.homeButton.classList.add('navSelected');
    aboutPage.classList.add('notVisible');
    projectsPage.classList.remove('notVisible');
  }
}

app.footerAboutButtonClick = () => { 
  const aboutPage = document.querySelector('#aboutSection');
  const projectsPage = document.querySelector('#projectPage');
  if(app.aboutButton.classList.contains('navSelected')) {
    window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
    return
  } else {
    app.aboutButton.classList.add('navSelected');
    app.homeButton.classList.remove('navSelected');
    app.workButton.classList.remove('navSelected');
    projectsPage.classList.add('notVisible');
    
  }
};


///// a function that cycles through words repeatedly, but stops for a little over 1 
//// second each cycle, then starts again

app.textReplacement = () => {
  const textReplace = document.querySelector('#textReplace');
  const words = ['a hacker', 'a little weird', 'a joker', 'a brother', 'a casual cyclist', 'a nerd', 'a developer', 'a tinkerer', 'a pretty good Dad', 'a brunch enthusiast', 'a partner'];
  
  setInterval(() => {
    let counter = 0;
    
    let showBetweenWords = setInterval(() => {
      textReplace.innerText = words[Math.floor(Math.random() * 11)]
      counter++;
      if(counter > 16) {
        clearInterval(showBetweenWords);
        textReplace.innerText = words[Math.floor(Math.random() * 11)]
      }
    }, 100)
  },3000)
}

/// a scroll listener callback function that should reset the top nav classes if page is scrolled to the top

app.resetTopNav = () => {
  if(window.scrollY === 0 && app.aboutButton.classList.contains('navSelected')) {
    return
  } else if(window.scrollY === 0 && app.workButton.classList.contains('navSelected')) {
    app.homeButton.classList.add('navSelected');
    app.workButton.classList.remove('navSelected');
  }
}

/// a scroll listener callback function that should hide/show a button that scrolls user to top of page 

app.checkScrollDown = () => {
  if(window.scrollY > 0) {
    app.scrollHomeButton.style.visibility = 'visible';
  } else if(window.scrollY === 0) {
    app.scrollHomeButton.style.visibility = 'hidden';
  }
}

/// also the definition of that button which scrolls back to the top of the page :)

app.scrollHomeButton = document.querySelector('.scrollHomeButton');

// used as callback function when the arrow button is clicked to scroll user to top of page
app.scrollHomeButtonClicked = () => {
  window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
  });
}
  







app.init = () => {

  // loop over the array of projects and add event listeners to 
  // apply and remove the slide-over information div on hover

  app.projectParents.forEach((project, index) => {
    project.addEventListener('mouseover', () => {
      app.projectDetails[index].classList.add('mouseOverSlide');
    })
    project.addEventListener('mouseout', () => {
      app.projectDetails[index].classList.remove('mouseOverSlide');
    })
  })


  /// event listeners

  app.allButton.addEventListener('click', app.selectProjectStyle);
  app.reactButton.addEventListener('click', app.selectProjectStyle);
  app.jsButton.addEventListener('click', app.selectProjectStyle);
  app.homeButton.addEventListener('click', app.handleNavClick);
  app.workButton.addEventListener('click', app.handleNavClick);
  app.aboutButton.addEventListener('click', app.handleNavClick);
  window.addEventListener('scroll', app.resetTopNav);
  window.addEventListener('scroll', app.checkScrollDown);
  app.scrollHomeButton.addEventListener('click', app.scrollHomeButtonClicked);
  app.footerHomeButton.addEventListener('click', app.footerHomeButtonClick);


  // random words in about section
  app.textReplacement();



  



}

app.init();