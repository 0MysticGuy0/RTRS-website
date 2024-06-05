import FAQ from "../pages/FAQ";
import Login from "../pages/Login";
import PasswordRestore from "../pages/PasswordRestore";
import UserAgreement from "../pages/UserAgreement";

export const publicRoutes = [
    {path:'/login', component:<Login/>},
    {path:'/agreement', component:<UserAgreement/>},
    {path:'/faq', component:<FAQ/>},
    {path:'/passwd-restore', component:<PasswordRestore/>},
    {path:'*', component:<Login/>}
]