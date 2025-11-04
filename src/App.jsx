import React from 'react';
import Hero3D from './components/Hero3D';
import AuthTabs from './components/AuthTabs';
import UserDashboardMock from './components/UserDashboardMock';
import AdminDashboardMock from './components/AdminDashboardMock';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold">AZ</div>
          <div className="font-semibold">AZ Billing</div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#login" className="hover:text-slate-900">Login</a>
          <a href="#dashboards" className="hover:text-slate-900">Dashboards</a>
        </nav>
        <a href="#login" className="rounded-lg bg-slate-900 text-white px-3 py-2 text-sm font-medium">
          Sign in
        </a>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-10 pb-16">
        <Hero3D />

        <section id="features" className="grid md:grid-cols-3 gap-4">
          {[{
            title: 'Dual Access',
            desc: 'Separate Admin and User areas with secure authentication.'
          }, {
            title: 'Smart Invoicing',
            desc: 'Auto-series AZ and AZB numbers with GST logic (5% or 18%).'
          }, {
            title: 'Inventory + Reports',
            desc: 'Manage products, track expenses, and export sales to Excel.'
          }].map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </section>

        <AuthTabs />

        <section id="dashboards" className="grid lg:grid-cols-2 gap-6">
          <UserDashboardMock />
          <AdminDashboardMock />
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AZ Billing. All rights reserved.</p>
          <p className="text-xs">This is a UI template ready to hook up with your backend and database.</p>
        </div>
      </footer>
    </div>
  );
}
