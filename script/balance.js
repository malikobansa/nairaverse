// Function to fetch balance from Paystack API
async function fetchBalance() {
  const secretKey = 'sk_live_f4ce681ecb88677787f9e9e2d548d05582b4d489'; // Replace with your actual secret key

  try {
    const response = await fetch('https://api.paystack.co/balance', {
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    // Display balance on the web page
    const balanceDiv = document.getElementById('balance');
    balanceDiv.textContent = `Balance: ${data.data[0].balance / 100} NGN`; // Assuming the currency is NGN
  } catch (error) {
    console.error('Error fetching balance:', error);
  }
}

// Call fetchBalance function when the page loads
window.addEventListener('load', fetchBalance);


