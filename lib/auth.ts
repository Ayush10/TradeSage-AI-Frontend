import { jwtVerify, SignJWT } from 'jose';

export interface UserData {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  user_type: 'ADMIN' | 'USER';
  token?: string;
}

const JWT_SECRET = new TextEncoder().encode(
  process.env.NEXT_PUBLIC_JWT_SECRET || 'your-secret-key'
);

export async function validateToken(token: string): Promise<UserData | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as UserData;
  } catch (error) {
    return null;
  }
}

export async function createToken(userData: Omit<UserData, 'token'>): Promise<string> {
  return new SignJWT({ ...userData })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(JWT_SECRET);
}

// Mock authentication for demo purposes
const MOCK_USERS = [
  {
    id: '1',
    email: 'demo@example.com',
    password: 'demo123',
    first_name: 'Demo',
    last_name: 'User',
    user_type: 'USER' as const,
  },
];

export async function login(email: string, password: string) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = MOCK_USERS.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error('Invalid credentials');
  }

  const { password: _, ...userData } = user;
  const token = await createToken(userData);

  return {
    user: userData,
    token,
  };
}

export async function register(userData: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  user_type: 'ADMIN' | 'USER';
}) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Check if user already exists
  if (MOCK_USERS.some((u) => u.email === userData.email)) {
    throw new Error('User already exists');
  }

  // In a real application, you would hash the password and save to a database
  const newUser = {
    id: String(MOCK_USERS.length + 1),
    email: userData.email,
    password: userData.password,
    first_name: userData.first_name,
    last_name: userData.last_name,
    user_type: userData.user_type,
  };

  MOCK_USERS.push(newUser);

  const { password: _, ...registeredUser } = newUser;
  const token = await createToken(registeredUser);

  return {
    user: registeredUser,
    token,
  };
}