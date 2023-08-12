let data = [
     {
          price: 20,
          quantity: 25,
          option: 'yes',
     },
     {
          price: 12,
          quantity: 25,
          option: 'yes',
     },
     {
          price: 20,
          quantity: 25,
          option: 'no',
     },
     {
          price: 15,
          quantity: 25,
          option: 'yes',
     },
     {
          price: 15,
          quantity: 5,
          option: 'no',
     },
];

let output = [];

data.forEach((item) => {
     let found = false;

     output.forEach((outputItem) => {
          if (
               outputItem.price === item.price &&
               outputItem.option === item.option
          ) {
               if (item.option === 'yes') {
                    outputItem.quantity += item.quantity;
                    found = true;
               }
          }
     });

     if (!found && item.option === 'yes') {
          output.push({ ...item });
     }
});

console.log(output);

/* 


[
  { price: 20, quantity: 25, option: 'yes' },
  { price: 12, quantity: 25, option: 'yes' },
  { price: 15, quantity: 25, option: 'yes' }
]
*/
