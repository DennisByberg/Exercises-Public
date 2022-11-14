const myLeads = [];
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

document.querySelector("#input-btn").addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // Wrap the lead in an anchor tag (<a>) inside the <li>
    // Can you make the link open in a new tab?
    listItems += `
      <li>
        <a target="_blank" href="${myLeads[i]}">
          ${myLeads[i]}
        </a>
      </li>`;
  }
  ulEl.innerHTML = listItems;
}
