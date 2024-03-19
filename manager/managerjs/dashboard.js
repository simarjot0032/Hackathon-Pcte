let menubtn = document.querySelector(".mobilemenu");
let siderbarcontainer = document.querySelector(".sidebar-container");
menubtn.addEventListener("click", () => {
  siderbarcontainer.classList.toggle("active-sidebar");
});
function updateTimeAndDate() {
  // Get current time and date
  const now = new Date();
  const timeElement = document.querySelector(".function-time .time");
  const dateElement = document.querySelector(".function-time .date");

  // Format time (hours, minutes, seconds)
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timeString = ` ${hours}:${minutes}:${seconds}`;

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const dateString = `    ${day}-${month}-${year}`;

  timeElement.textContent = timeString;
  dateElement.textContent = dateString;
}

setInterval(updateTimeAndDate, 1000);

updateTimeAndDate();
