const radikantINPUT = document.querySelector("#radikant");
const wurzelSPAN = document.querySelector("#wurzel");
const table = document.querySelector("table");

radikantINPUT.addEventListener("change", function() {
  const radikant = Number(this.value);
  let a = 1;
  let b = radikant;
  let i = 1;
  table.innerHTML = ` <table>
      <tr>
      <th>Schritt</th>
      <th>a</th>
      <th>b</th>
  </tr>
</table>`;
  while (true) {
    if (a === (a + b) / 2) break;
    table.innerHTML += `<tr> <td>${i}</td> <td> ${a}</td><td>${b}</td></tr>`;
    i++;
    a = (a + b) / 2;
    b = radikant / a;
  }
  wurzelSPAN.textContent = b;
});
