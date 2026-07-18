// import React from 'react'

const LeftSideBar = () => {
  const sidebarMenu = [
    {
      title: "Dashboard",
      items: [
        {
          title: "System Overview",
          description: "Performance summary & KPIs",
          path: "/admin/dashboard",
        },
        {
          title: "Drivers Detail Board",
          description: "View drivers, vehicles & orders",
          path: "/admin/drivers-board",
        },
        {
          title: "Staff Accounts",
          description: "Administrators & Dispatchers",
          path: "/admin/staff-board",
        },
      ],
    },

    {
      title: "Master Entry",
      items: [
        {
          title: "Customer Master",
          description: "Customer information & details",
          path: "/customer",
        },
        {
          title: "Vehicle Master",
          description: "Vehicle details & availability",
          path: "/vehicle",
        },
        {
          title: "Driver Master",
          description: "Driver information & license",
          path: "/driver",
        },
      ],
    },

    {
      title: "Transactions",
      items: [
        {
          title: "Dispatch Order",
          description: "Create order with source & destination",
          path: "/dispatch-order",
        },
        {
          title: "Dispatch Assignment",
          description: "Assign vehicle & driver",
          path: "/dispatch-assignment",
        },
        {
          title: "Delivery Confirmation",
          description: "Capture delivery details",
          path: "/delivery",
        },
      ],
    },

    {
      title: "Live Tables Explorer",
      items: [
        {
          title: "Customers Table",
          description: "View customer records",
          path: "/tables/customers",
        },
        {
          title: "Vehicles Table",
          description: "View vehicle records",
          path: "/tables/vehicles",
        },
        {
          title: "Drivers Table",
          description: "View driver records",
          path: "/tables/drivers",
        },
        {
          title: "Dispatch Orders Table",
          description: "View dispatch orders",
          path: "/tables/orders",
        },
        {
          title: "Assignments Table",
          description: "View assignments",
          path: "/tables/assignments",
        },
        {
          title: "Deliveries Table",
          description: "View delivery records",
          path: "/tables/deliveries",
        },
      ],
    },

    {
      title: "Reports",
      items: [
        {
          title: "Dispatch Report",
          description: "Dispatch history",
          path: "/reports/dispatch",
        },
        {
          title: "Delivery Report",
          description: "Completed deliveries",
          path: "/reports/delivery",
        },
        {
          title: "Pending Orders",
          description: "Outstanding orders",
          path: "/reports/pending",
        },
        {
          title: "Vehicle Utilization",
          description: "Fleet usage analysis",
          path: "/reports/vehicle",
        },
        {
          title: "Driver Assignment",
          description: "Driver-wise report",
          path: "/reports/driver",
        },
      ],
    },

    {
      title: "Processing",
      items: [
        {
          title: "Status Update",
          description: "Update dispatch status",
          path: "/processing/status",
        },
        {
          title: "Delivery Processing",
          description: "Finalize deliveries",
          path: "/processing/delivery",
        },
        {
          title: "Auto Assignment",
          description: "Assign drivers automatically",
          path: "/processing/auto-assignment",
        },
        {
          title: "Audit Logs",
          description: "System activity logs",
          path: "/processing/audit",
        },
        {
          title: "Archive Data",
          description: "Archive completed records",
          path: "/processing/archive",
        },
      ],
    },
  ];

  return (
    <div className="max-w-70 max-h-[85vh] m-2 bg-blue-50 border-2 border-blue-200 rounded-2xl overflow-y-auto overflow-x-hidden scrollbar-hide">
      {sidebarMenu.map((menu, idx) => (
        <section key={idx}>
          <div className="bg-blue-300 text-sm font-bold uppercase px-2 py-2">
            <h4>{menu.title}</h4>
          </div>

          {menu.items.map((item, idx) => {
            let bg = "bg-white";
            if (idx % 2 == 0) bg = "bg-blue-50";

            return (
              <a href={item.path} key={idx}>
                <div className={`${bg} px-2 py-2.5 transition-all delay-100 ease-in-out hover:bg-blue-100 hover:ml-2 group`}>
                  <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                  <p className="hidden text-xs text-slate-500 mt-0.5 group-hover:inline-flex">{item.description}</p>
                </div>
              </a>
            );
          })}
        </section>
      ))}
    </div>
  );
};

export default LeftSideBar;
