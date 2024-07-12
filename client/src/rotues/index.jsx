import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RegisterPage from "../Chatpages/RegisterPage";
import CheckEmailPage from "../Chatpages/CheckEmailPage";
import CheckPasswordPage from "../Chatpages/CheckPasswordPage";
import Chathome from "../Chatpages/Chathome";
import MessagePage from "../Chatcomponents/MessagePage";
import AuthLayouts from "../layout";
import Forgotpassword from "../Chatpages/Forgotpassword";

const router = createBrowserRouter([
{
    path : "/",
    element : <App/>,
    children : [
        {
            path : "register",
            element : <AuthLayouts><RegisterPage/></AuthLayouts>
        },
        {
            path : 'email',
            element : <AuthLayouts><CheckEmailPage/></AuthLayouts>
        },
        {
            path : 'password',
            element : <AuthLayouts><CheckPasswordPage/></AuthLayouts>
        },
        {
            path : 'forgot-password',
            element : <AuthLayouts><Forgotpassword/></AuthLayouts>
        },
        {
            path : "",
            element : <Chathome/>,
            children : [
                {
                    path : ':userId',
                    element : <MessagePage/>
                }
            ]
        }
    ]
}
])

export default router