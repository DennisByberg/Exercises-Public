const myLeads = [
  "www.awesomelead.com",
  "www.epiclead.com",
  "www.greatlead.com",
];
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

document.querySelector("#input-btn").addEventListener("click", () => {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

// Render the leads in the unordered list using ulEl.textContent
for (let i = 0; i < myLeads.length; i++) {
  ulEl.textContent += myLeads[i];
}
