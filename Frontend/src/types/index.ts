export interface User {
  id: string;
  name: string;
  email: string;
  role: 'founder' | 'client';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  founderId: string;
  createdAt: string;
  status: 'open' | 'in-progress' | 'completed';
}

export interface Task {
  id: string;
  projectId: string;
  clientId: string;
  title: string;
  description: string;
  hoursSpent: number;
  creditsEarned: number;
  status: 'todo' | 'in-progress' | 'completed';
  createdAt: string;
}