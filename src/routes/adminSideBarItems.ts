import AddTour from "@/pages/admin/AddTour";
import Analytics from "@/pages/admin/Analytics";

export const adminSideBarItems =  [
    {
      title: "Admin Dashboard",
      url: "#",
      items: [
        {
          title: "Analytics",
          url: "/admin/analytics",
          component : Analytics
        }
      ],
    },
    {
      title: "Tour Managment",
      url: "#",
      items: [
        {
          title: "Add Tour",
          url: "/admin/add-tour",
          component : AddTour
        },
        {
          title: "Add Tour Type",
          url: "/admin/add-tour-type",
          component : AddTour
        }
      ],
    }
  ]