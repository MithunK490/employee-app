const initialstate = [
  {
    employeeName: 'Vinu',
    employeeId: 'XYZ',
    joiningDate: '20-03-2010',
    role: 'Full Stack',
    experience: '5 Years',
    action: 'Action',
    status: true
  },
  {
    employeeName: 'Anu',
    employeeId: 'ABC',
    joiningDate: '20-03-2010',
    role: 'Full Stack',
    experience: '5 Years',
    action: 'Action',
    status: true
  },
  {
    employeeName: 'Binu',
    employeeId: 'DEF',
    joiningDate: '20-03-2010',
    role: 'Full Stack',
    experience: '5 Years',
    action: 'Action',
    status: false
  }
];

const employeeReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'EMPLOYEE:CREATE': {
      const newState = [...state, action.payload];

      return newState;
    }
    case 'EMPLOYEE:DELETE': {
      return state.filter((obj) => obj.id !== action.payload.employeeId);
    }
    default:
      return state;
  }
};

export default employeeReducer;
