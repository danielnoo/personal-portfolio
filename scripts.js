const app = {};

// declarations for buttons and hover effects

app.projectParents = [];
app.projectDetails = [];

app.projectParents[0] = document.querySelector("#projectOneParent");
app.projectDetails[0] = document.querySelector("#projectOneDetails");
app.projectParents[1] = document.querySelector("#projectTwoParent");
app.projectDetails[1] = document.querySelector("#projectTwoDetails");
app.projectParents[2] = document.querySelector("#projectThreeParent");
app.projectDetails[2] = document.querySelector("#projectThreeDetails");
app.projectParents[3] = document.querySelector("#projectFourParent");
app.projectDetails[3] = document.querySelector("#projectFourDetails");
app.projectParents[4] = document.querySelector("#projectFiveParent");
app.projectDetails[4] = document.querySelector("#projectFiveDetails");
app.projectParents[5] = document.querySelector("#projectSixParent");
app.projectDetails[5] = document.querySelector("#projectSixDetails");

/////project type selection buttons
app.allButton = document.querySelector("#allButton");
app.reactButton = document.querySelector("#reactButton");
app.jsButton = document.querySelector("#jsButton");

//// project page and about page declarations

app.projectsPage = document.querySelector("#projectPage");
app.aboutPage = document.querySelector("#aboutSection");

///// home nav button declarations

app.homeButton = document.querySelector(".homeButton");
app.workButton = document.querySelector(".workButton");
app.aboutButton = document.querySelector(".aboutButton");

//// a click handle function that manages all three home Nav options

app.handleNavClick = (e) => {
  e.preventDefault();
  const selectedLink = document.querySelector(".navSelected");
  selectedLink.classList.remove("navSelected");
  e.target.classList.add("navSelected");

  if (e.target.innerText === "Work") {
    app.projectsPage.classList.remove("srOnly");
    if (!app.aboutPage.classList.contains("srOnly")) {
      app.aboutPage.classList.add("srOnly");
    }
    window.scroll({
      top: 850,
      left: 0,
      behavior: "smooth",
    });
  } else if (e.target.innerText === "About") {
    app.projectsPage.classList.add("srOnly");
    app.aboutPage.classList.remove("srOnly");
    document.querySelector(".aboutImgContainer").classList.add("imgFadeIn");
  } else {
    app.projectsPage.classList.remove("srOnly");
    if (!app.aboutPage.classList.contains("srOnly")) {
      app.aboutPage.classList.add("srOnly");
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
};

/// code for project selection menu

app.selectProjectStyle = (e) => {
  app.projectParents.forEach((project) => {
    project.classList.remove("srOnly");
  });
  if (e.target.innerText === "All") {
    app.allButton.classList.add("selected");
    app.reactButton.classList.remove("selected");
    app.jsButton.classList.remove("selected");

    app.projectParents.forEach((project) => {
      if (project.classList.contains("srOnly")) {
        project.classList.toggle("srOnly");
      }
    });
  } else if (e.target.innerText === "React") {
    app.allButton.classList.remove("selected");
    app.reactButton.classList.add("selected");
    app.jsButton.classList.remove("selected");

    app.projectParents.forEach((project, index) => {
      if (index > 1) {
        project.classList.toggle("srOnly");
      }
    });
  } else {
    app.allButton.classList.remove("selected");
    app.reactButton.classList.remove("selected");
    app.jsButton.classList.add("selected");

    app.projectParents.forEach((project, index) => {
      if (index === 2 || index === 5) {
        project.classList.remove("srOnly");
      } else {
        project.classList.add("srOnly");
      }
    });
  }
};

/// footer nav declarations
/// the footer work button is left as a link to behave beter on mobile and weird screens

app.footerHomeButton = document.querySelector("#footerHomeButton");
app.footerWorkButton = document.querySelector("#footerWorkButton");
app.footerAboutButton = document.querySelector("#footerAboutButton");

//// two simple callback functions to deal handle clicks in the footer Nav
/// if clicked in the about page, reset the nav selections, otherwise this change
/// is handled by the scroll listener function resetTopNav
app.footerHomeButtonClick = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  if (app.aboutButton.classList.contains("navSelected")) {
    app.aboutButton.classList.remove("navSelected");
    app.homeButton.classList.add("navSelected");
    app.aboutPage.classList.add("srOnly");
    app.projectsPage.classList.remove("srOnly");
  }
};

//// a function that handles clicks for the Work button in
//// the footer section

app.footerWorkButtonClick = (e) => {
  if (app.aboutButton.classList.contains("navSelected")) {
    e.preventDefault();
    app.aboutButton.classList.remove("navSelected");
    app.workButton.classList.add("navSelected");
    app.aboutPage.classList.add("srOnly");
    app.projectsPage.classList.remove("srOnly");
    window.scroll({
      top: 850,
      left: 0,
      behavior: "smooth",
    });
  } else {
    return;
  }
};

//// a function that handles clicks for the About button in
//// the footer section

app.footerAboutButtonClick = (e) => {
  e.preventDefault();
  if (app.aboutButton.classList.contains("navSelected")) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    return;
  } else {
    app.aboutButton.classList.add("navSelected");
    app.homeButton.classList.remove("navSelected");
    app.workButton.classList.remove("navSelected");
    app.projectsPage.classList.add("srOnly");
    app.aboutPage.classList.remove("srOnly");
    document.querySelector(".aboutImgContainer").classList.add("imgFadeIn");
  }
};

///// a function that cycles through words repeatedly, but stops for a little over 1
//// second each cycle, then starts again

app.textReplacement = () => {
  const textReplace = document.querySelector("#textReplace");
  const words = [
    "a hacker",
    "a little weird",
    "a joker",
    "a brother",
    "a casual cyclist",
    "a nerd",
    "a developer",
    "a tinkerer",
    "a pretty good Dad",
    "a brunch enthusiast",
    "a partner",
  ];

  setInterval(() => {
    let counter = 0;

    let showBetweenWords = setInterval(() => {
      textReplace.innerText = words[Math.floor(Math.random() * 11)];
      counter++;
      if (counter > 16) {
        clearInterval(showBetweenWords);
        textReplace.innerText = words[Math.floor(Math.random() * 11)];
      }
    }, 100);
  }, 3000);
};

/// a scroll listener callback function that should reset the top nav classes if page is scrolled to the top

app.resetTopNav = () => {
  if (
    window.scrollY === 0 &&
    app.aboutButton.classList.contains("navSelected")
  ) {
    return;
  } else if (
    window.scrollY === 0 &&
    app.workButton.classList.contains("navSelected")
  ) {
    app.homeButton.classList.add("navSelected");
    app.workButton.classList.remove("navSelected");
  }
};

/// a scroll listener callback function that should hide/show a button that scrolls user to top of page

app.checkScrollDown = () => {
  if (window.scrollY > 0) {
    app.scrollHomeButton.style.visibility = "visible";
  } else if (window.scrollY === 0) {
    app.scrollHomeButton.style.visibility = "hidden";
  }
};

/// also the definition of that button which scrolls back to the top of the page :)

app.scrollHomeButton = document.querySelector(".scrollHomeButton");

// used as callback function when the arrow button is clicked to scroll user to top of page
app.scrollHomeButtonClicked = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

//// code for mobile nav menu buttons

/// declarations

app.mobileHomeButton = document.querySelector("#mobileHome");
app.mobileWorkButton = document.querySelector("#mobileWork");
app.mobileAboutButton = document.querySelector("#mobileAbout");

/// the click handlers for these buttons are shared with the footer buttons

/// some code that deals with the expansion and closure of the
/// mobile nav - also toggles the 'aria-expanded' attribute

// define elements

app.hamburgerButton = document.querySelector("#menuToggle");
app.mobileNav = document.querySelector("#mobileNav");

// callback function for button's onclick

app.handleBurgerClick = () => {
  if (mobileNav.classList.contains("srOnly")) {
    mobileNav.setAttribute("aria-expanded", true);
    mobileNav.classList.toggle("srOnly");
    mobileNav.classList.add("swapOpacity");
    document.querySelector(".burgOne").classList.add("srOnly");
    document.querySelector(".burgTwo").classList.add("spinnyBurgerTop");
    document.querySelector(".burgThree").classList.add("spinnyBurgerBottom");
  } else {
    mobileNav.setAttribute("aria-expanded", false);
    mobileNav.classList.toggle("srOnly");
    mobileNav.classList.remove("swapOpacity");
    document.querySelector(".burgOne").classList.remove("srOnly");
    document.querySelector(".burgTwo").classList.remove("spinnyBurgerTop");
    document.querySelector(".burgThree").classList.remove("spinnyBurgerBottom");
  }
};

app.init = () => {
  // loop over the array of projects and add event listeners to
  // apply and remove the slide-over information div on hover
  // added focus event here and tabindex to html

  app.projectParents.forEach((project, index) => {
    project.addEventListener("mouseover", () => {
      app.projectDetails[index].classList.add("mouseOverSlide");
    });
    project.addEventListener("focus", () => {
      app.projectDetails[index].classList.add("mouseOverSlide");
    });
    project.addEventListener("mouseout", () => {
      app.projectDetails[index].classList.remove("mouseOverSlide");
    });
  });

  /// event listeners

  app.allButton.addEventListener("click", app.selectProjectStyle);
  app.reactButton.addEventListener("click", app.selectProjectStyle);
  app.jsButton.addEventListener("click", app.selectProjectStyle);
  app.homeButton.addEventListener("click", app.handleNavClick);
  app.workButton.addEventListener("click", app.handleNavClick);
  app.aboutButton.addEventListener("click", app.handleNavClick);
  window.addEventListener("scroll", app.resetTopNav);
  window.addEventListener("scroll", app.checkScrollDown);
  app.scrollHomeButton.addEventListener("click", app.scrollHomeButtonClicked);
  app.footerHomeButton.addEventListener("click", app.footerHomeButtonClick);
  app.footerWorkButton.addEventListener("click", app.footerWorkButtonClick);
  app.footerAboutButton.addEventListener("click", app.footerAboutButtonClick);
  app.hamburgerButton.addEventListener("click", app.handleBurgerClick);
  app.mobileHomeButton.addEventListener("click", app.footerHomeButtonClick);
  app.mobileWorkButton.addEventListener("click", app.footerWorkButtonClick);
  app.mobileAboutButton.addEventListener("click", app.footerAboutButtonClick);

  // random words function in about section
  app.textReplacement();
};

app.init();
