import React, { useState } from 'react';
import logo from './logo.jpg';
import {
  LayoutDashboard,
  Users,
  Beaker,
  Box,
  GitPullRequest,
  ShieldCheck,
  Key,
  GraduationCap,
  LogOut,
  ChevronRight,
  Moon,
  Sun,
  X,
  Activity,
  Building2,
  TrendingUp,
  Shield,
  Wrench,
  CircleCheck,
  CircleAlert,
} from 'lucide-react';

const SuperAdminDashboard = () => {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  // البيانات (Mock Data)
  const [stats] = useState([
    {
      id: 1,
      label: 'Total Users',
      value: 7,
      icon: Users,
      color: 'text-blue-500',
      bg: '',
      tagText: 'Total',
      tagValue: null,
      tagIcon: null,
      style:
        'border-[0.667px] border-[rgba(43,127,255,0.20)] bg-[linear-gradient(135deg,rgba(43,127,255,0.10)_0%,rgba(21,93,252,0.05)_100%)]',
      status: 'rounded-[22369600px] bg-[rgba(43,127,255,0.20)]',
    },
    {
      id: 2,
      label: 'Laboratories',
      value: 4,
      icon: Building2,
      color: 'text-purple-500',
      bg: '',
      tagText: 'Active',
      tagValue: 3,
      tagIcon: null,
      style:
        'border-[0.667px] border-[rgba(173,70,255,0.20)] bg-[linear-gradient(135deg,rgba(173,70,255,0.10)_0%,rgba(152,16,250,0.05)_100%)]',
      status: 'rounded-[22369600px] bg-[rgba(173,70,255,0.20)]',
    },
    {
      id: 3,
      label: 'Total Materials',
      value: 47,
      icon: Box,
      color: 'text-green-500',
      bg: '',
      tagText: '',
      tagValue: null,
      tagIcon: TrendingUp,
      style:
        'border-[0.667px] border-[rgba(0,201,80,0.20)] bg-[linear-gradient(135deg,rgba(0,201,80,0.10)_0%,rgba(0,166,62,0.05)_100%)]',
      status: 'text-[#05DF72]',
    },
    {
      id: 4,
      label: 'Total Requests',
      value: 3,
      icon: Activity,
      color: 'text-orange-500',
      bg: '',
      tagText: 'Pending',
      tagValue: 3,
      tagIcon: null,
      style:
        'border-[0.667px] border-[rgba(255,105,0,0.20)] bg-[linear-gradient(135deg,rgba(255,105,0,0.10)_0%,rgba(245,73,0,0.05)_100%)]',
      status: 'rounded-[22369600px] bg-[rgba(255,105,0,0.20)]',
    },
  ]);

  const [rolesData] = useState([
    {
      id: 1,
      label: 'Lab Admins',
      count: 4,
      icon: Shield,
      color: 'text-red-500 bg-[rgba(251,44,54,0.10)]',
      managePath: '/manage-lab-admins',
      details: 'Manage Lab Admins →',
    },
    {
      id: 2,
      label: 'Warehouse Managers',
      count: 1,
      icon: Wrench,
      color: 'text-blue-500 bg-[rgba(43,127,255,0.10)]',
      managePath: '/manage-managers',
      details: 'Manage Warehouse Managers →',
    },
    {
      id: 3,
      label: 'Students',
      count: 1,
      icon: GraduationCap,
      color: 'text-green-500 bg-[rgba(0,201,80,0.10)]',
      managePath: '/view-students',
      details: 'View Students →',
    },
  ]);

  const [labs] = useState([
    {
      id: 1,
      name: 'Lab A',
      building: 'Building A ',
      floor: 'Floor 2',
      capacity: 20,
      admin: 'Admin User',
      status: 'active',
    },
    {
      id: 2,
      name: 'Lab B',
      building: 'Building B ',
      floor: 'Floor 1',
      capacity: 25,
      admin: 'Dr. Ahmed Benali',
      status: 'active',
    },
    {
      id: 3,
      name: 'Lab C',
      building: 'Building C',
      floor: 'Floor 3',
      capacity: 15,
      admin: 'Prof. Fatima Zahra',
      status: 'active',
    },
    {
      id: 4,
      name: 'Lab D',
      building: 'Building D',
      floor: '  Floor 1',
      capacity: 40,
      admin: 'Mr. Mohamed Cherif',
      status: 'warning',
    },
  ]);

  return (
    <div
      className={`flex min-h-screen transition-colors duration-300 ${dark ? 'bg-[#020817] text-white' : 'bg-[rgba(255, 255, 255, 0.95)] text-slate-900'}`}
    >
      {/* --- Sidebar (Scrolls with page) --- */}
      <aside
        className={`hidden md:flex md:w-64 h-screen flex-col border-r ${dark ? 'bg-[#020817] border-[#2B4C9F]' : 'bg-[#FFF] border-[#E2E8F0]'}`}
      >
        {/* Logo Section */}
        <div
          className={`flex items-center w-full h-[97px] px-6 border-b ${dark ? 'border-[#2B4C9F]' : 'border-[#E2E8F0]'} flex-shrink-0`}
        >
          <div className="flex-shrink-0 w-[48px] h-[48px] bg-[#2B4C9F] rounded-full flex items-center justify-center text-white font-bold italic">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full rounded-full bg-lightgray bg-center bg-cover bg-no-repeat"
            />
          </div>
          <div className="flex flex-col ml-4">
            <h1
              className={`text-[20px] font-bold leading-tight ${dark ? 'text-[#E8EAF0]' : 'text-[#0F172A]'}`}
            >
              ESI-GM
            </h1>
            <p className={`text-[10px] ${dark ? 'text-[#94A3B8]' : 'text-[#64748B]'}`}>
              ESI 8 Mai 1945
            </p>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="flex flex-col p-4 gap-2 flex-1 min-h-[300px]">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl w-full bg-[#2B4C9F] text-[#FFF] shadow-lg shadow-blue-900/20">
            <LayoutDashboard size={20} />
            <span className="text-sm font-medium">Dashboard</span>
          </button>
        </nav>

        {/* Profile  (In Sidebar) */}
        <div
          className={`flex flex-col p-4 gap-3 border-t ${dark ? 'border-[#2B4C9F]' : 'border-[#E2E8F0]'}`}
        >
          <div className="px-4">
            <p className={`text-sm font-semibold ${dark ? 'text-white' : 'text-slate-900'}`}>
              Sarah Student
            </p>
            <p className={`text-xs ${dark ? 'text-[#94A3B8]' : 'text-gray-500'} tracking-tight`}>
              Student
            </p>
          </div>

          <div className="flex justify-between items-center px-2">
            <button
              className={`flex items-center bg-transparent gap-2 ${dark ? 'text-[#E8EAF0]' : 'text-[#0F172A]'} hover:text-red-500 transition-colors`}
            >
              <LogOut size={18} />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>

        <div
          className={`p-4 border-t flex justify-center items-center ${dark ? 'border-[#2B4C9F]' : 'border-[#E2E8F0]'}`}
        >
          <X size={20} className={`${dark ? 'text-[#94A3B8]' : 'text-gray-400'} cursor-pointer`} />
        </div>
      </aside>

      {/* --- Main Content --- */}
      <main className={`flex-1 p-4 sm:p-6 md:p-8 ${dark ? 'bg-[#020817]' : 'bg-[#F8FAFC]'}`}>
        {/* --- Top Header (The one you mentioned) --- */}
        <header
          className={`flex justify-end border-b ${dark ? 'border-[#2B4C9F]' : 'boder-gray-150'} items-center mb-5 pb-3 gap-4`}
        >
          {/**/}
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 flex items-center justify-center rounded-xl border transition-all ${dark ? 'bg-[#020817] border-[#2B4C9F]' : 'bg-white border-[#E2E8F0] hover:bg-gray-100'}`}
          >
            {dark ? <Moon size={18} stroke="#2B4C9F" /> : <Sun size={18} stroke="#2B4C9F" />}
          </button>
        </header>

        <div className="mb-7">
          <h2 className="text-3xl font-bold tracking-tight">Super Admin Dashboard</h2>
          <p className={`${dark ? 'text-[#94A3B8]' : 'text-gray-500'} text-sm`}>
            System-wide overview and management
          </p>
        </div>

        {/* 1. Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
          {stats.map((s) => (
            <div key={s.id} className={`rounded-2xl border-[0.667px] p-4 ml-2 ${s.style}`}>
              <div className="flex justify-between items-start mb-2">
                <div className={`p-1 rounded-2xl ${s.color} ${s.bg}`}>
                  <s.icon size={22} />
                </div>
                <span
                  className={`text-[9px] font-bold px-2 py-0.5 rounded-full mt-2 uppercase tracking-tighter ${s.status} ${s.color}`}
                >
                  {s.tagIcon ? <s.tagIcon /> : s.tagValue} {s.tagText}
                </span>
              </div>
              <div className="mt-2">
                <p className="text-4xl font-bold pb-2 pl-1">{s.value}</p>
                <h2
                  className={`${dark ? 'text-[#94A3B8]' : 'text-[#64748B]'} pl-1 text-[11px] font-medium text-[10px] leading-[20px] uppercase tracking-wider`}
                >
                  {s.label}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Roles Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {rolesData.map((role) => (
            <RoleCard
              key={role.id}
              icon={role.icon}
              count={role.count}
              label={role.label}
              color={role.color}
              dark={dark}
              details={role.details}
            />
          ))}
        </div>

        {/* 3. Labs Overview */}
        <section
          className={`mb-10 transition-all hover:translate-y-[-2px] rounded-2xl border-[0.667px] ${dark ? 'bg-[#0A1128] border-[#1E293B]' : 'bg-[#F8FAFC] border-[#E2E8F0]'} p-6`}
        >
          <h3
            className={`text-sm font-bold flex items-center gap-2 mb-6 uppercase tracking-wider ${dark ? 'text-[#E8EAF0]' : 'text-[#0F172A]'}`}
          >
            <span className="text-indigo-600">
              <Building2 size={18} />
            </span>{' '}
            Laboratories Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {labs.map((lab) => (
              <div
                key={lab.id}
                className={`p-6 border rounded-[12px] border-[0.667px] relative ${dark ? 'bg-[#0A1128] border-[#1E293B]' : 'border-[#E2E8F0] bg-[rgba(241,245,249,0.05)]'}`}
              >
                <div className="absolute top-6 right-6 w-2.5 h-2.5 rounded-full">
                  {lab.status === 'active' ? (
                    <CircleCheck className="text-[#05DF72]" />
                  ) : (
                    <CircleAlert className="text-[#FDC700]" />
                  )}
                </div>
                <h4
                  className={`text-lg font-bold mb-1 ${dark ? 'text-[#E8EAF0]' : 'text-[#0F172A]'}`}
                >
                  {lab.name}
                </h4>
                <p
                  className={`${dark ? 'text-[#94A3B8]' : 'text-[#64748B]'} text-[11px] font-medium mb-2`}
                >
                  {lab.building} - {lab.floor}
                </p>
                <div className="flex justify-between items-end">
                  <div className="flex">
                    <p
                      className={`text-[11px] ${dark ? 'text-[#94A3B8]' : 'text-[#64748B]'} font-medium`}
                    >
                      Capacity :{' '}
                    </p>
                    <p
                      className={`text-[11px] font-medium ${dark ? 'text-[#E8EAF0]' : 'text-[#0F172A]'}`}
                    >
                      {lab.capacity}
                    </p>
                  </div>
                  <p
                    className={`text-[11px] ${dark ? 'text-[#94A3B8]' : 'text-[#64748B]'} font-medium`}
                  >
                    Admin:{' '}
                    <span className={`font-semibold ${dark ? 'text-[#E8EAF0]' : 'text-[#0F172A]'}`}>
                      {lab.admin}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="text-sm bg-transparent text-[#6366F1] font-medium w-full flex pl-1 items-start group pt-4">
            Manage All Laboratories →
          </button>
        </section>

        {/* 4. The Two Management Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-transparent">
          <ManagementBtn
            icon={Users}
            label="User Management"
            sub="Add admins, manage permissions and roles"
            color="bg-[rgba(43,127,255,0.09)] text-blue-600"
            dark={dark}
            className="bg-[rgba(43,127,255,0.05)]"
          />
          <ManagementBtn
            icon={Beaker}
            label="Laboratory Management"
            sub="Configure locations, assign admins"
            color="bg-[rgba(173,70,255,0.09)] text-purple-600"
            dark={dark}
            className="bg-[rgba(173,70,255,0.04)]"
          />
        </div>
      </main>
    </div>
  );
};

// --- Sub-Components ---
{
  /* } const RoleCard = ({ icon: Icon, count, label, color, dark, className = '' }) => (
  <div
    className={`p-5 rounded-[2.2rem] border flex items-center gap-4 ${dark ? 'bg-[#0f172a] border-[#2B4C9F]' : 'bg-white border-gray-100 shadow-sm'}`}
  >
    <div className={`p-4 rounded-2xl ${dark ? 'bg-slate-800' : 'bg-gray-50'} ${color}`}>
      <Icon size={26} />
    </div>
    <div>
      <p className="text-2xl font-bold leading-none">{count}</p>
      <p className="text-xs text-gray-400 font-medium">{label}</p>
      <button className="text-[10px] text-blue-600 font-bold flex items-center mt-1">
        Manage <ChevronRight size={10} />
      </button>
    </div>
  </div>
);
 */
}
const RoleCard = ({ icon: Icon, count, label, color, dark, details, className = '' }) => (
  <div
    className={`p-5 pb-5 pl-4 rounded-2xl border-[0.667px] transition-all hover:translate-y-[-2px] hover:shadow-md flex flex-col gap-3 ${dark ? 'bg-[#0A1128] border-[#1E293B]' : 'border-[#E2E8F0] bg-[#F8FAFC]'} ${className}`}
  >
    <div className="flex items-start gap-4">
      <div className={`p-2 rounded-xl ${color}`}>
        <Icon size={26} />
      </div>
      <div className="flex flex-col">
        <p className="text-2xl font-bold leading-none">{count}</p>
        <p className={`text-xs ${dark ? 'text-[#94A3B8]' : 'text-[#64748B]'} font-medium mt-1`}>
          {label}
        </p>
      </div>{' '}
    </div>
    <button className="text-xs text-[#6366F1] bg-transparent font-medium w-full flex pl-1 pt-2 items-start group">
      {details}
    </button>
  </div>
);
const ManagementBtn = ({ icon: Icon, label, sub, color, dark, className = '' }) => (
  <div
    className={`p-5 rounded-2xl border flex items-center gap-4 cursor-pointer transition-all hover:translate-y-[-2px] ${dark ? 'bg-[#0A1128] border-[#1E293B]' : 'bg-[#F8FAFC] border-[#E2E8F0]'} ${className}`}
  >
    <div className={`p-3 rounded-xl ${color}`}>
      <Icon size={22} />
    </div>
    <div>
      <h2 className="text-sm font-semibold">{label}</h2>
      <p className={`text-xs ${dark ? 'text-[#94A3B8]' : 'text-gray-500'}`}>{sub}</p>
    </div>
  </div>
);

export default SuperAdminDashboard;
