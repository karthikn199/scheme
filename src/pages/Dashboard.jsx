import { AiOutlineAudit } from "react-icons/ai";
import { BsGraphUpArrow, BsPieChart } from "react-icons/bs";
import {
  FiAlertTriangle,
  FiBarChart2,
  FiCheckCircle,
  FiDollarSign,
  FiDownload,
  FiFileText,
  FiRefreshCw,
  FiSearch,
  FiTruck,
} from "react-icons/fi";
import { RiCalendarEventLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.user.user);

  console.log("User==>", user);
  // Enhanced stats data
  const stats = [
    {
      title: "e-Invoices Generated",
      value: "1,248",
      change: "+12%",
      icon: <FiFileText className="text-white" />,
      trend: "up",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      action: "Generate New",
      link: "/e-invoice/new",
    },
    {
      title: "e-Way Bills",
      value: "892",
      change: "+5%",
      icon: <FiTruck className="text-white" />,
      trend: "up",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      action: "Create Bill",
      link: "/eway-bill/new",
    },
    {
      title: "Pending Approvals",
      value: "24",
      change: "-3%",
      icon: <FiAlertTriangle className="text-white" />,
      trend: "down",
      color: "bg-gradient-to-br from-amber-500 to-amber-600",
      action: "Review Now",
      link: "/approvals",
    },
    {
      title: "Total Revenue",
      value: "₹84,920",
      change: "+18%",
      icon: <FiDollarSign className="text-white" />,
      trend: "up",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      action: "View Reports",
      link: "/reports",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "e-Invoice",
      action: "Generated",
      by: "You",
      for: "ABC Traders",
      time: "2 mins ago",
      status: "success",
    },
    {
      id: 2,
      type: "e-Way Bill",
      action: "Created",
      by: "Team Member",
      for: "XYZ Logistics",
      time: "15 mins ago",
      status: "success",
    },
    {
      id: 3,
      type: "Payment",
      action: "Received",
      by: "Delhi Mart",
      for: "INV-2023-0456",
      time: "1 hour ago",
      status: "success",
    },
    {
      id: 4,
      type: "Approval",
      action: "Required",
      by: "System",
      for: "INV-2023-0457",
      time: "3 hours ago",
      status: "pending",
    },
  ];

  const upcomingTasks = [
    { id: 1, task: "GST Filing Due", date: "15 Nov 2023", priority: "high" },
    {
      id: 2,
      task: "Monthly Reconciliation",
      date: "20 Nov 2023",
      priority: "medium",
    },
    { id: 3, task: "Vendor Payments", date: "25 Nov 2023", priority: "low" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20 px-4 sm:px-6 lg:px-8 pb-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Dashboard Overview
            </h1>
            <p className="text-gray-500">
              Welcome back! {user.name} Here's what's happening with your e-Invoices today.
            </p>
          </div>
          {/* <div className="flex gap-3">
            <button className="flex items-center bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 gap-2">
              <FiDownload /> Export
            </button>
            <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 gap-2">
              <FiRefreshCw /> Refresh
            </button>
          </div> */}
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.color} rounded-xl shadow-lg p-6 text-white transform hover:scale-[1.02] transition-transform duration-200`}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 mb-4">
                  {stat.icon}
                </div>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    stat.trend === "up"
                      ? "bg-green-400/30 text-green-100"
                      : "bg-red-400/30 text-red-100"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <h3 className="text-sm font-medium opacity-90">{stat.title}</h3>
              <p className="mt-1 text-2xl font-bold">{stat.value}</p>
              <a
                href={stat.link}
                className="mt-4 inline-block text-xs font-medium bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors"
              >
                {stat.action} →
              </a>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Recent Activities */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <BsGraphUpArrow /> Recent Activities
              </h2>
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search activities..."
                  className="pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full mr-4 ${
                      activity.status === "success"
                        ? "bg-green-100 text-green-600"
                        : "bg-amber-100 text-amber-600"
                    }`}
                  >
                    {activity.status === "success" ? (
                      <FiCheckCircle />
                    ) : (
                      <FiAlertTriangle />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium text-gray-800">
                        {activity.type} {activity.action}
                      </h3>
                      <span className="text-xs text-gray-500">
                        {activity.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      By {activity.by} • For {activity.for}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
              View All Activity <span>→</span>
            </button>
          </div>

          {/* Quick Reports */}
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl shadow-lg p-6 text-white">
            <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <BsPieChart /> Quick Reports
            </h2>
            <div className="space-y-5">
              <div className="bg-white/10 p-4 rounded-lg hover:bg-white/15 transition-colors cursor-pointer">
                <h3 className="font-medium">Monthly e-Invoice Report</h3>
                <p className="text-sm opacity-80 mt-1">November 2023 Summary</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg hover:bg-white/15 transition-colors cursor-pointer">
                <h3 className="font-medium">GST Compliance</h3>
                <p className="text-sm opacity-80 mt-1">
                  Quarterly Filing Status
                </p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg hover:bg-white/15 transition-colors cursor-pointer">
                <h3 className="font-medium">Client Billing</h3>
                <p className="text-sm opacity-80 mt-1">Top 10 Clients</p>
              </div>
            </div>
            <button className="mt-6 w-full bg-white text-indigo-600 hover:bg-gray-100 py-2 rounded-lg font-medium flex items-center justify-center gap-2">
              <FiBarChart2 /> Generate Custom Report
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Tasks */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <RiCalendarEventLine /> Upcoming Tasks
            </h2>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div
                    className={`w-3 h-3 rounded-full mr-3 ${
                      task.priority === "high"
                        ? "bg-red-500"
                        : task.priority === "medium"
                        ? "bg-amber-500"
                        : "bg-green-500"
                    }`}
                  ></div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{task.task}</h3>
                    <p className="text-sm text-gray-500">{task.date}</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Remind Me
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Audit Log */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <AiOutlineAudit /> Recent Audits
            </h2>
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-blue-50/50 border border-blue-100">
                <div className="flex justify-between">
                  <h3 className="font-medium text-blue-800">System Update</h3>
                  <span className="text-xs text-blue-600">5 Nov 2023</span>
                </div>
                <p className="text-sm text-blue-600 mt-1">
                  Updated to v2.3.1 with new GST rules
                </p>
              </div>
              <div className="p-3 rounded-lg bg-purple-50/50 border border-purple-100">
                <div className="flex justify-between">
                  <h3 className="font-medium text-purple-800">
                    User Permission
                  </h3>
                  <span className="text-xs text-purple-600">3 Nov 2023</span>
                </div>
                <p className="text-sm text-purple-600 mt-1">
                  Added new team member (Accounts)
                </p>
              </div>
            </div>
          </div>

          {/* Performance Meter */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl shadow-lg p-6 text-white">
            <h2 className="text-lg font-semibold mb-4">System Performance</h2>
            <div className="flex items-center justify-center my-6">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#ffffff30"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="white"
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset="70"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-3xl font-bold">85%</span>
                  <span className="text-sm opacity-80">Efficiency</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm opacity-90">
                Your system is performing optimally
              </p>
              <button className="mt-4 text-xs font-medium bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
