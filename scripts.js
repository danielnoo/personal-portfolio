

const app = {}

app.projectParents = []
app.projectDetails = []

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


  
  
  
}

app.init();