export class InvoiceDB {
  static invoices = [
      {
          id: '5a9ae2106518248b68251fd1',
          orderNo: '232',
          status: 'pending',
          date: (new Date()),
          currency: '$',
          vat: 10,
          buyer: {
              name: 'Schoen, Conn and Mills',
              address: 'rodriguez.trent@senger.com \n 61 Johnson St. Shirley, NY 11967. \n \n +202-555-0170',
          },
          seller: {
              name: 'UI Lib',
              address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
          },
          item: [{
              name: 'Item 1',
              unit: 9,
              price: 200
          }, {
              name: 'Item 2',
              unit: 15,
              price: 300
          }]
      },
      {
          id: '5a9ae2106518248b68251fd2',
          orderNo: '233',
          status: 'processing',
          date: (new Date()),
          currency: '$',
          vat: 10,
          buyer: {
              name: 'New Age Inc.',
              address: 'this is a test address \n 7664 Rockcrest Road. Longview, TX 75604. \n \n +1-202-555-0153',
          },
          seller: {
              name: 'UI Lib',
              address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
          },
          item: [{
              name: 'Item 1',
              unit: 3,
              price: 2000
          }, {
              name: 'Item 2',
              unit: 2,
              price: 4000
          }]
      },
      {
          id: '5a9ae2106518248b68251fd3',
          orderNo: '234',
          status: 'delivered',
          date: (new Date()),
          currency: '$',
          vat: 10,
          buyer: {
              name: 'Predovic, Schowalter and Haag',
              address: 'linwood53@price.com \n 7178 Plumb Branch Dr. South Bend, IN 46614 \n \n +999 9999 9999',
          },
          seller: {
              name: 'UI Lib',
              address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
          },
          item: [{
              name: 'Item 1',
              unit: 5,
              price: 1000
          }, {
              name: 'Item 2',
              unit: 2,
              price: 4000
          }]
      },
      {
          id: '5a9ae2106518248b68251fd4',
          orderNo: '235',
          status: 'delivered',
          date: (new Date()),
          currency: '$',
          vat: 10,
          buyer: {
              name: 'Hane PLC',
              address: 'nader.savanna@lindgren.org \n 858 8th St. Nanuet, NY 10954. \n \n +202-555-0131',
          },
          seller: {
              name: 'UI Lib',
              address: 'sales@ui-lib.com \n 8254 S. Garfield Street. Villa Rica, GA 30180. \n \n +1-202-555-0170',
          },
          item: [{
              name: 'Item 1',
              unit: 3,
              price: 4000
          }, {
              name: 'Item 2',
              unit: 1,
              price: 5000
          }]
      }
  ]
}