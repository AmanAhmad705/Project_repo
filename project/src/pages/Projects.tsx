import React, { useState, useMemo } from 'react';
// import { Plus, ArrowUpRight, Users as UsersIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { HiPlus as Plus } from 'react-icons/hi2'
import { HiArrowUpRight as ArrowUpRight } from 'react-icons/hi2'
import { HiUsers as UsersIcon } from 'react-icons/hi'
import { HiChevronDown as ChevronDown } from 'react-icons/hi2'
import { HiChevronUp as ChevronUp } from 'react-icons/hi2'
import SearchBar from '../components/SearchBar';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

interface Task {
  id: number;
  title: string;
  status: 'todo' | 'in-progress' | 'completed';
  assignee: string;
  dueDate: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
  progress: number;
  team: TeamMember[];
  tasks: Task[];
}

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI-Powered Task Manager',
      description: 'Building an intelligent task management system that learns from user behavior.',
      status: 'In Progress',
      progress: 65,
      team: [
        {
          id: 1,
          name: 'Sarah Chen',
          role: 'Lead Developer',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        },
        {
          id: 2,
          name: 'Alex Kim',
          role: 'UI Designer',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        },
      ],
      tasks: [
        {
          id: 1,
          title: 'Implement AI recommendation engine',
          status: 'in-progress',
          assignee: 'Sarah Chen',
          dueDate: '2024-03-25',
        },
        {
          id: 2,
          title: 'Design user dashboard',
          status: 'completed',
          assignee: 'Alex Kim',
          dueDate: '2024-03-20',
        },
      ],
    },
    {
      id: 2,
      title: 'Sustainable Energy Platform',
      description: 'Marketplace connecting renewable energy providers with consumers.',
      status: 'Planning',
      progress: 25,
      team: [
        {
          id: 3,
          name: 'Emma Watson',
          role: 'Product Manager',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        },
      ],
      tasks: [
        {
          id: 3,
          title: 'Market research analysis',
          status: 'completed',
          assignee: 'Emma Watson',
          dueDate: '2024-03-18',
        },
        {
          id: 4,
          title: 'Provider onboarding flow',
          status: 'todo',
          assignee: 'Emma Watson',
          dueDate: '2024-03-30',
        },
      ],
    },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [projects, searchQuery]);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'todo':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    }
  };

  const calculateProjectProgress = (tasks: Task[]) => {
    if (tasks.length === 0) return 0;
    const completed = tasks.filter(task => task.status === 'completed').length;
    return Math.round((completed / tasks.length) * 100);
  };

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Projects</h1>
        <button className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          <Plus className="h-5 w-5 mr-2" />
          New Project
        </button>
      </div>

      <SearchBar
        placeholder="Search projects..."
        value={searchQuery}
        onChange={setSearchQuery}
      />

      <div className="grid grid-cols-1 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{project.title}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
              
              {/* Team Members */}
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Team Members</h4>
                <div className="flex -space-x-2 overflow-hidden">
                  {project.team.map((member) => (
                    <img
                      key={member.id}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                      src={member.avatar}
                      alt={member.name}
                      title={`${member.name} - ${member.role}`}
                    />
                  ))}
                  <button className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-indigo-600 dark:text-indigo-400">
                        Progress
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-indigo-600 dark:text-indigo-400">
                        {calculateProjectProgress(project.tasks)}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200 dark:bg-gray-700">
                    <div
                      style={{ width: `${calculateProjectProgress(project.tasks)}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                    ></div>
                  </div>
                </div>
              </div>

              {/* Tasks Section */}
              <div className="mt-4">
                <button
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className="flex items-center justify-between w-full text-sm font-medium text-gray-900 dark:text-white"
                >
                  <span>Tasks ({project.tasks.length})</span>
                  {expandedProject === project.id ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                
                {expandedProject === project.id && (
                  <div className="mt-2 space-y-2">
                    {project.tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md"
                      >
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                            {task.title}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Assigned to {task.assignee} • Due {new Date(task.dueDate).toLocaleDateString()}
                          </p>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(task.status)}`}>
                          {task.status}
                        </span>
                      </div>
                    ))}
                    <button className="mt-2 w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Task
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <button className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500">
                  View Details
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;