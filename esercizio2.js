let counter = sessionStorage.getItem("counter")
  ? parseInt(sessionStorage.getItem("counter"))
  : 0;

function timer() {
  counter++;
  document.getElementById("counter").innerText = counter;
  sessionStorage.setItem("counter", counter);
}

setInterval(timer, 1000);
