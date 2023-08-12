import {createContext, useState} from "react";

// is_authenticated should be null 'true' 'false'
// null means checking token and wait response from server
const AuthContext = createContext({
    isAuthenticated: null,
    user: {
        user_id: null,
        username: null,
        firstname: null,
        lastname: null,
        role: null,
    },
    authHandler: ({isAuthenticated, user})=>{},
});

export function AuthContextProvider(props) {
    const [auth, setAuth] = useState(
        {
            isAuthenticated:null,
            user: {
                user_id: null,
                username: null,
                firstname: null,
                lastname: null,
                role: null,
            }
        }
    )

    const authHandler = ({isAuthenticated, user}) => {
        console.log("in authHandler")
        console.log(isAuthenticated, user)
        if (isAuthenticated!=null && user!=null) {
            setAuth(
                {
                    isAuthenticated: isAuthenticated,
                    user: user
                }
            )
        }
        else if (isAuthenticated!=null) {
            setAuth( (prevAuth) => {return {
                isAuthenticated: isAuthenticated,
                user: prevAuth.user
            }})
        }
        else if (user!=null) {
            setAuth( (prevAuth) => {return {
                isAuthenticated: prevAuth.isAuthenticated,
                user: user
            }})
        }
    }

    const context = {
        ...auth,
        authHandler: authHandler
    };

    return <AuthContext.Provider value={context}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;