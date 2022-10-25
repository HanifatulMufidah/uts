const tombol_submit = document.getElementById('submit')
const div_result = document.getElementById('result')
const textarea = document.querySelector('textarea')
const select_font_size = document.getElementById('size')
const select_color = document.getElementById('color')

const bold = document.getElementById('bold')
const italic = document.getElementById('italic')
const under = document.getElementById('under')

tombol_submit.addEventListener('click', () => {
  div_result.innerHTML = textarea.value
})

select_font_size.addEventListener('change', (e) => {
  textarea.style.fontSize = e.target.value
  div_result.style.fontSize = e.target.value
})

select_color.addEventListener('change', (e) => {
  textarea.style.color = e.target.value
  div_result.style.color = e.target.value
})

bold.addEventListener('click', () => {
  textarea.classList.toggle('bold')
  div_result.classList.toggle('bold')
})

italic.addEventListener('click', () => {
  textarea.classList.toggle('italic')
  div_result.classList.toggle('italic')
})

under.addEventListener('click', () => {
  textarea.classList.toggle('under')
  div_result.classList.toggle('under')
})
