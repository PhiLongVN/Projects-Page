
/* ============================================ */
/*                    TOGGLE                    */
/* ============================================ */
const toggle = document.querySelector('.circle');

toggle.addEventListener('click', () => {
  let body = document.body.id;

  if (body == 'darkTheme') {
    document.body.setAttribute('id', 'lightTheme');
  } else {
    document.body.setAttribute('id', 'darkTheme');
  }
});
/* ============================================ */
/*                    SCROLL                    */
/* ============================================ */

const title = document.querySelectorAll('.sec-title');

