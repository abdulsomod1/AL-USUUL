var form = document.getElementById('usuul');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("usuul")),
  }).then(
    response => response.json()
  ).then((html) => {
    alert('submitted || Thank you' + document.getElementById('usuul-name').value)
    window.location.href = '';
    location.reload();
  })
})