const d = document;
const $feedback_button = d.querySelector('.feedback-button');
const $feedback_content = d.querySelector('.feedback-content');
const $feedback_message = d.querySelector('.feedback-message');
const $feedback_score = d.querySelectorAll('.feedback-score');

const handleClick = () => {
  $feedback_content.style.display = "none"
  $feedback_message.style.display = "flex"
  setTimeout(()=>{
    $feedback_message.style.transform = "scale(1)"
  }, 10)

}

const cleanScore = () =>{
  $feedback_score.forEach((span) => {
    span.classList.remove('isSelected')
  })
}

$feedback_button.addEventListener('click', handleClick)

$feedback_score.forEach((span, i) => {
  span.addEventListener('click', ()=> {
    cleanScore();
    for(let j = 0; j<=i; j++){
      $feedback_score[j].classList.add('isSelected')
    }
  })
})
