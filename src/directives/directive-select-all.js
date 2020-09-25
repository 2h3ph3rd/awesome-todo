export const selectAll = {
  inserted(el) {
    console.log(el)
    let input = el.querySelector('.q-field__native')
    input.addEventListener('focus', () => {
      if (input.value.length) {
        input.select()
      }
    })
  }
}
