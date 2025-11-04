import React, { useState } from 'react';
import { User, Shield } from 'lucide-react';

function TextInput({ label, type = 'text', value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="text-sm text-slate-600">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10"
      />
    </label>
  );
}

export default function AuthTabs() {
  const [tab, setTab] = useState('user');
  const [userCreds, setUserCreds] = useState({ username: '', password: '' });
  const [adminCreds, setAdminCreds] = useState({ username: '', password: '' });

  const onSubmit = (role) => (e) => {
    e.preventDefault();
    const payload = role === 'admin' ? adminCreds : userCreds;
    // Placeholder submit handler for template purposes
    alert(`${role.toUpperCase()} login submitted for: ${payload.username}`);
  };

  return (
    <section id="login" className="w-full">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-slate-900/90 text-white flex items-center justify-center">
              <User size={18} />
            </div>
            <div>
              <h3 className="font-medium">User Login</h3>
              <p className="text-sm text-slate-500">Shop staff access</p>
            </div>
          </div>
          <form className="mt-4 space-y-3" onSubmit={onSubmit('user')}>
            <TextInput
              label="Username"
              value={userCreds.username}
              onChange={(v) => setUserCreds((s) => ({ ...s, username: v }))}
              placeholder="e.g., staff01"
            />
            <TextInput
              label="Password"
              type="password"
              value={userCreds.password}
              onChange={(v) => setUserCreds((s) => ({ ...s, password: v }))}
              placeholder="••••••••"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-slate-900 text-white py-2.5 font-medium hover:opacity-90"
            >
              Sign in as User
            </button>
          </form>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-amber-500 text-white flex items-center justify-center">
              <Shield size={18} />
            </div>
            <div>
              <h3 className="font-medium">Admin Login</h3>
              <p className="text-sm text-slate-500">Owner/manager access</p>
            </div>
          </div>
          <form className="mt-4 space-y-3" onSubmit={onSubmit('admin')}>
            <TextInput
              label="Username"
              value={adminCreds.username}
              onChange={(v) => setAdminCreds((s) => ({ ...s, username: v }))}
              placeholder="e.g., admin"
            />
            <TextInput
              label="Password"
              type="password"
              value={adminCreds.password}
              onChange={(v) => setAdminCreds((s) => ({ ...s, password: v }))}
              placeholder="••••••••"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-amber-600 text-white py-2.5 font-medium hover:opacity-95"
            >
              Sign in as Admin
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
