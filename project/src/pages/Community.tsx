import React, { useState, useMemo } from 'react';
// import { MessageSquare, ThumbsUp, Users } from 'lucide-react';
import { BiMessageSquareDetail as MessageSquare } from 'react-icons/bi'
import { BiLike as ThumbsUp } from 'react-icons/bi'
import { HiUsers as Users } from 'react-icons/hi'
import SearchBar from '../components/SearchBar';

const Community: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const discussions = [
    {
      id: 1,
      title: 'Best practices for scaling React applications',
      author: 'Sarah Chen',
      replies: 24,
      likes: 56,
      category: 'Technical',
      lastActive: '2 hours ago',
    },
    {
      id: 2,
      title: 'Looking for co-founder with ML expertise',
      author: 'Michael Rodriguez',
      replies: 15,
      likes: 32,
      category: 'Networking',
      lastActive: '4 hours ago',
    },
    {
      id: 3,
      title: 'Startup funding resources in Europe',
      author: 'Emma Watson',
      replies: 42,
      likes: 89,
      category: 'Resources',
      lastActive: '1 day ago',
    },
  ];

  const filteredDiscussions = useMemo(() => {
    return discussions.filter(discussion =>
      discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [discussions, searchQuery]);

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Community</h1>
        <button className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          <MessageSquare className="h-5 w-5 mr-2" />
          New Discussion
        </button>
      </div>

      <SearchBar
        placeholder="Search discussions..."
        value={searchQuery}
        onChange={setSearchQuery}
      />

      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredDiscussions.map((discussion) => (
            <li key={discussion.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Users className="h-6 w-6 text-gray-400" />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                        {discussion.title}
                      </h2>
                      <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span>Posted by {discussion.author}</span>
                        <span className="mx-2">•</span>
                        <span>{discussion.lastActive}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <MessageSquare className="h-5 w-5 mr-1" />
                      <span>{discussion.replies}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <ThumbsUp className="h-5 w-5 mr-1" />
                      <span>{discussion.likes}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    discussion.category === 'Technical' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                    discussion.category === 'Networking' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                  }`}>
                    {discussion.category}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Community;