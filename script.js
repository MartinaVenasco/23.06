const fnHour = () => {
  console.clear();
  console.log(
    "Ora:",
    new Date().getHours(),
    "Minuti:",
    new Date().getMinutes()
  );
};
document.body.innerHTML = `
   <h1>${+new Date().getHours() + ":" + new Date().getMinutes()} </h1>
  `;

setTimeout(fnHour, 1000);
setTimeout(fnHour, 5000);
setTimeout(fnHour, 10000);
