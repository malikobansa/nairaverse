// function payWithPaystack() {
//     let handler = PaystackPop.setup({
//       key: 'pk_live_c5240f3c34199d9da0832cec2734c2ce138007a4', // Replace with your own public key
//       email: 'customer@email.com', // Replace with customer's email
//       amount: document.getElementById('amount').value * 100, // the amount value is multiplied by 100 to convert to the smallest currency unit
//       ref: ''+Math.floor((Math.random()*1000000000)+1), // generates a pseudo-random reference number
//       onClose: function(){
//         alert('Transaction was not completed, window closed.');
//       },
//       callback: function(response){
//         alert('Successful! transaction ref is ' + response.reference);
//       }
//     });
//     handler.openIframe();
//   }
  