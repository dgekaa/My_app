import App from "./components/App/App";
import Auth from "./components/Auth/Auth";
import Main from "./components/App/Main/Main";
import ToDo from "./components/App/Main/ToDo/ToDo";

export default [
    {
        component: App,
        routes: [
            {
                component: Main,
                path: "/",
                exact: true
            },{
                component: Auth,
                path: "/login",
            },{
                component: ToDo,
                path: "/toDo",
            },
            //{
            //     component: NotFound,
            // }
        ]
    }
]