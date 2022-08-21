import React from 'react';



const Notification = () => {
    // const [tasks] = useTask();

    return (<div>
        <div class="dropdown dropdown-end bg-slate-200 rounded-full mr-2" >
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>  <span class="badge badge-sm bg-red-600 text-white border-none indicator-item">5</span>
        </div>
      </label>
      <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body">
          <span class="font-bold text-lg">Notification</span>
          <span class="text-info">coming soon...</span>
          <div class="card-actions">
            <button class="btn btn-primary btn-block">View All</button>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
};

export default Notification;