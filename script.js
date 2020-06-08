const ready = () => {
  const spoilerHeaders = document.querySelectorAll('.spoiler-header');
  const expandSpoiler = (header) => {
    const spoilerContent = header.parentNode.lastElementChild;
    spoilerContent.classList.toggle('visible')
    const spoilerArrow = header.lastElementChild;
    spoilerArrow.classList.toggle('arrow-active')
  }
  spoilerHeaders.forEach(element => element.addEventListener('click', () => expandSpoiler(element)))
}

document.addEventListener('DOMContentLoaded', ready);