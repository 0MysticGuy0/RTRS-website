import Appeals from "../pages/Appeals";
import FAQ from "../pages/FAQ";
import Login from "../pages/Login";
import ObjectsInfo from "../pages/ObjectsInfo";
import PasswordRestore from "../pages/PasswordRestore";
import PersonalFAQ from "../pages/PersonalFAQ";
import Programs from "../pages/Programs";
import UserAgreement from "../pages/UserAgreement";
import UserSettings from "../pages/UserSettings";

export const publicRoutes = [
    {path:'/login', component:<Login/>},
    {path:'/agreement', component:<UserAgreement/>},
    {path:'/faq', component:<FAQ/>},
    {path:'/passwd-restore', component:<PasswordRestore/>},
    {path:'*', component:<Login/>},
]
export const privateRoutes = [
    {path:'/personal/objects-info', component:<ObjectsInfo/>},
    {path:'/personal/appeals', component:<Appeals/>},
    {path:'/personal/faq', component:<PersonalFAQ/>},
    {path:'/personal/programs', component:<Programs/>},
    {path:'/agreement', component:<UserAgreement/>},
    {path:'/personal/settings', component:<UserSettings/>},
    {path:'*', component:<Appeals/>},
]