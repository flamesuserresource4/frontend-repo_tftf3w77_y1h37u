import React from 'react';
import { Receipt, CalendarDays, PlusCircle, TrendingUp } from 'lucide-react';

function StatCard({ icon: Icon, label, value, accent = 'bg-emerald-500' }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-lg ${accent} text-white flex items-center justify-center`}>
          <Icon size={18} />
        </div>
        <div>
          <div className="text-sm text-slate-500">{label}</div>
          <div className="text-xl font-semibold">{value}</div>
        </div>
      </div>
    </div>
  );
}

export default function UserDashboardMock() {
  return (
    <section className="w-full" aria-label="User dashboard preview">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">User Dashboard</h3>
          <span className="text-xs rounded-full bg-emerald-50 text-emerald-700 px-2 py-1 border border-emerald-100">
            Staff View
          </span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard icon={TrendingUp} label="Today's Sales" value="₹12,450" />
          <StatCard icon={CalendarDays} label="Last 7 Days" value="₹86,320" accent="bg-sky-500" />
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm flex items-center justify-between">
            <div>
              <div className="text-sm text-slate-500">Invoicing</div>
              <div className="text-xl font-semibold">Create new bill</div>
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:opacity-90">
              <PlusCircle size={16} /> New Invoice
            </button>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-center gap-2 text-slate-700">
            <Receipt size={18} />
            <h4 className="font-medium">Invoice Highlights</h4>
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Auto-generated invoice series: <span className="font-mono">AZMMYYNN</span> for B2C and <span className="font-mono">AZBMMYYNN</span> for B2B. Choose 5% or 18% GST. Cash includes GST in total, Online adds GST on top.
          </p>
        </div>
      </div>
    </section>
  );
}
