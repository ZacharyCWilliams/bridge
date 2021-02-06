// export const loginUser = (user) => {
//     localStorage.setItem("user", user);
// }

// export const logout = () => {
//     localStorage.removeItem(TOKEN_KEY);
// }

// import { useHistory } from "react-router-dom";
// let history = useHistory();

// export const logoutUser = () => {
//     localStorage.removeItem('user');
//     history.push("/login")
// }

export const checkAuthStatus = () => {
    if (localStorage.getItem("user")) {
        return true;
    }

    return false;
}