
export const signup = (user) => {

    // `${process.env.REACT_APP_API_URL}/signup`


    // http://localhost:8080/signup
    return fetch("http://localhost:8080/signup", {     
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)

    }).then(response => {
            return response.json()
        }).catch(err => console.log(err))
      
};


export const sigin = (user) => {

    //  http://localhost:8080/signup
    return fetch("http://localhost:8080/signin", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },

        body: JSON.stringify(user)
    }).then(response => {
            return response.json()
        }).catch(err => console.log(err))
};


export const authetication = (jwt, next) => {  // next is call back method
    if(typeof window != "undefined") {
        localStorage.setItem("jwt" ,JSON.stringify(jwt));
        next();
    }
};



export const signout = (next) => {
    if (typeof window !== "undefined") localStorage.removeItem("jwt");
    next()
    return fetch(`${process.env.REACT_APP_API_URL}/signout`, {
        method: "GET"

    })
        .then(response => {
            console.log('signout', response)
            return response.json()

        })
        .catch(err => console.log(err))
}

export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false
    }

    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"))
    } else {
        return false
    }

}
