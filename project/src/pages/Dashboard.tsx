import React from 'react';
// import { ArrowRight, Rocket, Users, Target } from 'lucide-react';

import { HiArrowRight as ArrowRight } from 'react-icons/hi2'
import { IoRocket as Rocket } from 'react-icons/io5'
import { HiUsers as Users } from 'react-icons/hi'
import { BiTargetLock as Target } from 'react-icons/bi'

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Active Projects', value: '12', icon: Rocket },
    { label: 'Total Users', value: '148', icon: Users },
    { label: 'Completed Tasks', value: '1,234', icon: Target },
  ];

  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {stat.label}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {stat.value}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Projects */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-medium text-gray-900">Recent Projects</h2>
          <div className="mt-4 divide-y divide-gray-200">
            {[1, 2, 3].map((i) => (
              <div key={i} className="py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      Project {i}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <button className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;