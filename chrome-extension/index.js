const myLeads = [];
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

console.log(localStorage.getItem(myLeads));

document.querySelector("#input-btn").addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
      <li>
        <a target="_blank" href="${myLeads[i]}">
          ${myLeads[i]}
        </a>
      </li>`;
  }
  ulEl.innerHTML = listItems;
}
