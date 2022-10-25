$(document).ready(() => {
  const textarea = $('textarea')
  const result = $('#result')

  $('#submit').click(() => {
    result.html(textarea.val())
  })

  $('#size').change((e) => {
    textarea.css('font-size', e.target.value)
    result.css('font-size', e.target.value)
  })

  $('#color').change((e) => {
    textarea.css('color', e.target.value)
    result.css('color', e.target.value)
  })

  $('#bold').click(() => {
    textarea.toggleClass('bold')
    result.toggleClass('bold')
  })

  $('#italic').click(() => {
    textarea.toggleClass('italic')
    result.toggleClass('italic')
  })

  $('#under').click(() => {
    textarea.toggleClass('under')
    result.toggleClass('under')
  })
})