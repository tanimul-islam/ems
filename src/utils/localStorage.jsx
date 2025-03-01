const employees = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    password: "1234",
    tasks: [
      {
        title: "Complete Project Report",
        description: "Prepare the final project report for the client.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-01-30",
        category: "Documentation",
      },
      {
        title: "Team Meeting",
        description: "Discuss project progress and deadlines.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-01-22",
        category: "Meetings",
      },
      {
        title: "Update Project Plan",
        description: "Revise the project plan based on client feedback.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-01-31",
        category: "Planning",
      },
      {
        title: "Prepare Presentation",
        description: "Create a presentation for the client review.",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2025-02-01",
        category: "Presentation",
      },
      {
        title: "Submit Timesheet",
        description: "Fill out and submit the weekly timesheet.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-01-20",
        category: "Administration",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    password: "1234",
    tasks: [
      {
        title: "Design Mockups",
        description: "Create mockups for the new client dashboard.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-01-28",
        category: "Design",
      },
      {
        title: "Client Feedback",
        description: "Incorporate client feedback into the designs.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-01-20",
        category: "Feedback",
      },
      {
        title: "Prototype Testing",
        description: "Test the prototype with internal teams.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-02-01",
        category: "Testing",
      },
      {
        title: "Prepare Style Guide",
        description: "Document the style guide for the design team.",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2025-01-31",
        category: "Documentation",
      },
      {
        title: "Create Wireframes",
        description: "Develop wireframes for the new application layout.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-01-18",
        category: "Design",
      },
    ],
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    password: "1234",
    tasks: [
      {
        title: "Code Review",
        description: "Review pull requests from team members.",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2025-01-25",
        category: "Development",
      },
      {
        title: "Bug Fixing",
        description: "Fix priority issues in the production environment.",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        date: "2025-01-24",
        category: "Maintenance",
      },
      {
        title: "Write Unit Tests",
        description: "Add unit tests for the new feature module.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-01-30",
        category: "Testing",
      },
      {
        title: "API Integration",
        description: "Integrate third-party APIs into the application.",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2025-01-29",
        category: "Development",
      },
      {
        title: "Deploy Updates",
        description: "Deploy the latest updates to the staging environment.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-01-21",
        category: "Deployment",
      },
    ],
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bobbrown@example.com",
    password: "1234",
    tasks: [
      {
        title: "Database Migration",
        description: "Migrate the database to the new server.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-01-29",
        category: "Infrastructure",
      },
      {
        title: "System Testing",
        description: "Conduct end-to-end testing on the updated system.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-01-23",
        category: "Quality Assurance",
      },
      {
        title: "Optimize Queries",
        description: "Optimize database queries for better performance.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-01-31",
        category: "Optimization",
      },
      {
        title: "Create Backup",
        description: "Set up automated backup for the database.",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2025-02-01",
        category: "Maintenance",
      },
      {
        title: "Configure Server",
        description: "Update server configurations for better security.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-01-20",
        category: "Infrastructure",
      },
    ],
  },
  {
    id: 5,
    name: "Charlie Davis",
    email: "charliedavis@example.com",
    password: "1234",
    tasks: [
      {
        title: "Create User Guide",
        description: "Write the user guide for the new application.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-01-31",
        category: "Documentation",
      },
      {
        title: "Onboarding Session",
        description: "Conduct a training session for new hires.",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        date: "2025-01-15",
        category: "Training",
      },
      {
        title: "Update Knowledge Base",
        description: "Add FAQs to the knowledge base for users.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2025-01-28",
        category: "Documentation",
      },
      {
        title: "Prepare Training Material",
        description: "Create materials for internal training sessions.",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2025-02-02",
        category: "Training",
      },
      {
        title: "Record Tutorials",
        description: "Record video tutorials for end-users.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2025-01-20",
        category: "Training",
      },
    ],
  },
];

const admin = {
  id: 1,
  name: "Admin User",
  email: "admin@example.com",
  password: "1234",
};

export const setLocalStorage = () => {
  if (!localStorage.getItem("Employees")) {
    localStorage.setItem("Employees", JSON.stringify(employees));
  }
  if (!localStorage.getItem("Admin")) {
    localStorage.setItem("Admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  try {
    const employeesData = localStorage.getItem("Employees");
    const adminData = localStorage.getItem("Admin");

    return {
      employees: employeesData ? JSON.parse(employeesData) : employees,
      admin: adminData ? JSON.parse(adminData) : admin,
    };
  } catch (error) {
    console.error("Error retrieving local storage data:", error);
    return { employees, admin };
  }
};

export const updateEmployeeTasks = (email, updatedTasks) => {
  const { employees } = getLocalStorage();

  const updatedEmployees = employees.map((employee) =>
    employee.email === email ? { ...employee, tasks: updatedTasks } : employee
  );

  localStorage.setItem("Employees", JSON.stringify(updatedEmployees));
};
