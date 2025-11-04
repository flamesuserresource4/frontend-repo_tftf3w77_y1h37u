import React from 'react';
import { BarChart3, CalendarRange, ClipboardList, Database, FileSpreadsheet, IndianRupee, Package, Wallet2 } from 'lucide-react';

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
    </div>
  );
}

export default function AdminDashboardMock() {
  return (
    <section className="w-full" aria-label="Admin dashboard preview">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Admin Dashboard</h3>
          <span className="text-xs rounded-full bg-amber-50 text-amber-700 px-2 py-1 border border-amber-100">
            Owner View
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat label="Today's Sales" value={<span className="inline-flex items-center gap-1"><IndianRupee size={16}/> 24,760</span>} />
          <Stat label="Week's Sales" value={<span className="inline-flex items-center gap-1"><IndianRupee size={16}/> 1,54,230</span>} />
          <Stat label="Monthly Total" value={<span className="inline-flex items-center gap-1"><IndianRupee size={16}/> 6,82,910</span>} />
          <Stat label="Expenses" value={<span className="inline-flex items-center gap-1 text-rose-600"><IndianRupee size={16}/> 1,18,400</span>} />
        </div>

        <div className="mt-4 grid lg:grid-cols-3 gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:col-span-2">
            <div className="flex items-center gap-2 text-slate-700">
              <BarChart3 size={18} />
              <h4 className="font-medium">Sales Overview</h4>
            </div>
            <div className="mt-4 h-48 w-full rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 grid grid-cols-12 items-end gap-1 p-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-slate-300/80 rounded" style={{ height: `${20 + Math.abs(Math.sin(i)) * 70}%` }} />
              ))}
            </div>
            <div className="mt-2 text-xs text-slate-500 flex items-center gap-2"><CalendarRange size={14}/> Last 30 days</div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-3">
            <h4 className="font-medium text-slate-700">Quick Actions</h4>
            <button className="w-full inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50">
              <Package size={16}/> Inventory Management
            </button>
            <button className="w-full inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50">
              <Wallet2 size={16}/> Add Expense
            </button>
            <button className="w-full inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50">
              <FileSpreadsheet size={16}/> Download Reports (Excel)
            </button>
            <button className="w-full inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50">
              <Database size={16}/> B2B Invoice (AZB series)
            </button>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-center gap-2 text-slate-700">
            <ClipboardList size={18} />
            <h4 className="font-medium">Admin Features Summary</h4>
          </div>
          <ul className="mt-2 text-sm text-slate-600 list-disc list-inside space-y-1">
            <li>Add/Edit/Remove products, set fixed rate and GST (5% or 18%).</li>
            <li>Download sales report in Excel with product/category/B2B vs B2C breakdown.</li>
            <li>Record business expenses and view totals in dashboard.</li>
            <li>Generate B2B invoices with <span className="font-mono">AZBMMYYNN</span> series and GSTIN capture.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
