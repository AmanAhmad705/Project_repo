import React, { useState, useMemo } from 'react';
// import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { IoCheckmarkCircleOutline as CheckCircle2 } from 'react-icons/io5'
import { BiTime as Clock } from 'react-icons/bi'
import { IoAlertCircleOutline as AlertCircle } from 'react-icons/io5'
import SearchBar from '../components/SearchBar';

const Tasks: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const tasks = [
    {
      id: 1,
      title: 'Design System Implementation',
      project: 'AI-Powered Task Manager',
      priority: 'High',
      dueDate: '2024-03-20',
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'User Authentication Flow',
      project: 'Healthcare Analytics',
      priority: 'Medium',
      dueDate: '2024-03-25',
      status: 'Todo',
    },
    {
      id: 3,
      title: 'Database Schema Design',
      project: 'Sustainable Energy Platform',
      priority: 'High',
      dueDate: '2024-03-18',
      status: 'Completed',
    },
  ];

  const filteredTasks = useMemo(() => {
    return tasks.filter(task =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.project.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [tasks, searchQuery]);

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Tasks</h1>
      </div>

      <SearchBar
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={setSearchQuery}
      />

      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredTasks.map((task) => (
            <li key={task.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {task.status === 'Completed' ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    ) : task.status === 'In Progress' ? (
                      <Clock className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-gray-400" />
                    )}
                    <p className="ml-3 text-sm font-medium text-gray-900 dark:text-white">{task.title}</p>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      task.priority === 'High' 
                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' 
                        : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    }`}>
                      {task.priority}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      {task.project}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <p>
                      Due {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;