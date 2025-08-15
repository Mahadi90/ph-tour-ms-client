
import Bookings from "@/pages/user/Bookings";

export const userSideBarItems =  [
    {
      title: "User Dashboard",
      url: "#",
      items: [
        {
          title: "Bookings",
          url: "/user/bookings",
          component : Bookings
        }
      ],
    }
  ]