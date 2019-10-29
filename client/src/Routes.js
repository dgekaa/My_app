import App from "./components/App/App";
import Auth from "./components/Auth/Auth";
import Main from "./components/App/Main/Main";
// import ToDo from "./pages/ToDo";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import NotFound from "./pages/NotFound"

export default [
    {
        component: App,
        routes: [
            {
                component: Auth,
                path: "/login",
                exact: true
            }
            ,{
                component: Main,
                path: "/",
                exact: true
            },
            //{
            //     component: ToDo,
            //     path: "/toDo",
            //     exact: true
            // },{
            //     component: NotFound,
            // }
        ]
    }
]