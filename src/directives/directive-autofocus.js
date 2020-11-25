import { Platform } from 'quasar'

export const autofocus = {
  inserted(el) {
    let input = el.querySelector('.q-field__native')
    let delay = Platform.is.cordova ? 700 : 0
    setTimeout(() => input.focus(), delay)
  }
}
