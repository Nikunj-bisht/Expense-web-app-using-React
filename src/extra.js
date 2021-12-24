function returndata(){

 const expenses = [
        {
          id: Math.random(),
          title: 'Toilet Paper',
          amount:  Math.random(),
          date: new Date(2020, 7, 14),
        },
        { id: Math.random(), title: 'New TV', amount:  Math.random(), date: new Date(2021, 2, 12) },
        {
          id: Math.random(),
          title: 'Car Insurance',
          amount:  Math.random(),
          date: new Date(2021, 2, 28),
        },
        {
          id: Math.random(),
          title: 'New Desk (Wooden)',
          amount:  Math.random(),
          date: new Date(2021, 5, 12),
        },
      ];

return expenses;
}

export default returndata;