import { role } from "@/constant/role"
import { adminSideBarItems } from "@/routes/adminSideBarItems"
import { userSideBarItems } from "@/routes/userSideBarItems"
import type { TRole } from "@/types"

export const getSideBarItem = (userRole : TRole) => {
    switch (userRole) {
        case role.superAdmin :
        return [...adminSideBarItems];
        case role.admin :
        return [...adminSideBarItems]; 
        case role.user :
        return [...userSideBarItems]; 
        default : 
        return []
    }
}