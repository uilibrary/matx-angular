export class Todo {
  static todoList = [
    {
      id: 1,
      title: "API problem",
      note: "API is malfunctioning. kindly fix it",
      important: true,
      starred: true,
      done: false,
      read: false,
      selected: false,
      startDate: new Date().toISOString(),
      dueDate: new Date().toISOString(),

      tag: [1, 2]
    },
    {
      id: 2,
      title: "Mobile problem",
      note: "Mobile is malfunctioning. fix it",
      important: false,
      starred: false,
      done: true,
      read: true,
      selected: false,
      startDate: new Date().toISOString(),
      dueDate: new Date().toISOString(),

      tag: [2]
    },
    {
      id: 3,
      title: "API problem",
      note: "API is malfunctioning. fix it",
      important: false,
      starred: false,
      done: true,
      read: false,
      selected: false,
      startDate: new Date().toISOString(),
      dueDate: new Date().toISOString(),

      tag: [1]
    },
    {
      id: 4,
      title: "API problem",
      note: "API is malfunctioning. fix it",
      important: false,
      starred: false,
      done: false,
      read: true,
      selected: false,
      startDate: new Date().toISOString(),
      dueDate: new Date().toISOString(),

      tag: [1, 2, 3]
    }
  ];
  read: any;
}

// ============================================
export class TodoTag {
  static tag = [
    {
      id: 1,
      name: "frontend"
    },
    {
      id: 2,
      name: "backend"
    },
    {
      id: 3,
      name: "API"
    },
    {
      id: 4,
      name: "issue"
    },
    {
      id: 5,
      name: "mobile"
    }
  ];
}
