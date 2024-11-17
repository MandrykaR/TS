type UserRole = 'root' | 'editor' | 'guest';

type User = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  isActive: boolean;
};

const users: User[] = [
  {
    id: 1,
    name: 'John',
    email: 'john@example.com',
    role: 'root',
    isActive: true,
  },
  {
    id: 2,
    name: 'Alice',
    email: 'alice@example.com',
    role: 'editor',
    isActive: false,
  },
];

const fetchUserDetails = (userName: string) => {
  const user = users.find(
    (user) => user.name.toLowerCase() === userName.toLowerCase()
  );

  if (user) {
    return user;
  }

  throw new Error(`"${userName}" not found`);
};

const updateUser = (id: number, newUser: User): User => {
  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    throw new Error('User not found');
  }

  users[index] = { ...users[index], ...newUser };
  return users[index];
};

const addNewUser = (user: Omit<User, 'id'>): User => {
  const newUser: User = {
    ...user,
    id: Date.now(),
  };

  return newUser;
};
