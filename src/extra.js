function returndata(){

 const expenses = [
        {
          id: Math.random(),
          title: 'Toilet Paper',
          amount:  400,
          date: new Date(2020, 7, 14),
        },
        { id: Math.random(), title: 'New TV', amount:  600, date: new Date(2021, 2, 12) },
        {
          id: Math.random(),
          title: 'Car Insurance',
          amount:  500,
          date: new Date(2021, 2, 28),
        },
        {
          id: Math.random(),
          title: 'New Desk (Wooden)',
          amount:  550,
          date: new Date(2021, 5, 12),
        },
      ];

return expenses;
}

export default returndata;