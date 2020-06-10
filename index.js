export function mussolini() {
  const head = document.head
  document.head.remove()
  document.body.parentNode.appendChild(head)
}