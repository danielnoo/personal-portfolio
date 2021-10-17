

const app = {}

app.projOne = document.querySelector('#projectOneParent');
app.projOneDetails = document.querySelector('#projectOneDetails')




app.init = () => {

  app.projOne.addEventListener('mouseover', () => {
    app.projOneDetails.classList.add('mouseOverSlide')
    console.log('mousing over');
  })
  app.projOne.addEventListener('mouseout', () => {
    app.projOneDetails.classList.remove('mouseOverSlide')
  })
}

app.init();