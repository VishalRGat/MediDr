import { createContext ,useState } from "react";
import { doctors } from "../assets/assets";



export const AppContext = createContext()

const AppContextProvider = (props)=>{


    const currencySymbol = '$'
    const [user, setUser] = useState(null);

const value = {
        doctors,
        currencySymbol,
        user, setUser
}

return(
    <AppContext.Provider value={value}>
    {props.children}
    </AppContext.Provider>
)


}

export default AppContextProvider