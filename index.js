export function mussoliniHidden() {
  const head = document.head
  document.head.remove()
  document.body.parentNode.appendChild(head)
}

export function mussoliniVisible() {
  const body = document.body
  const oldTransition = body.style.transition
  body.style.transition = 'all 1s ease-in-out'
  body.style.transform = 'rotate(180deg)'
  setTimeout(() => {
    body.style.transition = oldTransition
  }, 1000)
}