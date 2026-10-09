document.getElementById('calculate-change').onclick = function () {
  const amountDue = parseFloat(document.getElementById('amount-due').value);
  const amountReceived = parseFloat(document.getElementById('amount-received').value);

  // Validate inputs
  if (isNaN(amountDue) || isNaN(amountReceived) || amountReceived < amountDue) {
    alert('Please enter valid amounts where cash tendered covers the sale total.');
    return;
  }

  // Convert difference into total integer cents
  let remainingCents = Math.round((amountReceived - amountDue) * 100);

  // Dollars ($1.00 = 100 cents)
  const dollars = Math.floor(remainingCents / 100);
  remainingCents %= 100;

  // Quarters ($0.25 = 25 cents)
  const quarters = Math.floor(remainingCents / 25);
  remainingCents %= 25;

  // Dimes ($0.10 = 10 cents)
  const dimes = Math.floor(remainingCents / 10);
  remainingCents %= 10;

  // Nickels ($0.05 = 5 cents)
  const nickels = Math.floor(remainingCents / 5);
  remainingCents %= 5;

  // Pennies ($0.01 = 1 cent)
  const pennies = remainingCents;

  // Update DOM displays
  document.getElementById('dollars-output').innerText = dollars;
  document.getElementById('quarters-output').innerText = quarters;
  document.getElementById('dimes-output').innerText = dimes;
  document.getElementById('nickels-output').innerText = nickels;
  document.getElementById('pennies-output').innerText = pennies;
};