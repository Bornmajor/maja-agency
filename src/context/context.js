import { createContext,useEffect,useState } from "react";
import { message } from "antd";

const MyContext = createContext();

export const MyContextProvider  = (props) =>{
    const [uiTheme,setUiTheme] = useState('#198754');
    const [textColor,setTextColor] = useState('black');
    const [messageApi, contextHolder] = message.useMessage();
    const [navBarIsOpen,setNavBarIsOpen] = useState(false);
    const [isAppLoading,setIsAppLoading] = useState(true)


    const successFeedback = (msg) => {
      messageApi.open({
        type: 'success',
        content: msg,
      });
    };
    const errorFeedback = (msg) => {
      messageApi.open({
        type: 'error',
        content: msg,
      });
    };

    const warningFeedback = (msg) => {
      messageApi.open({
        type: 'warning',
        content: msg,
      });
    };

   
  const toggleNavbar = () => setNavBarIsOpen(!navBarIsOpen);


    return(
      <MyContext.Provider value={{
        uiTheme,setUiTheme,
        textColor,setTextColor,
        successFeedback,errorFeedback,contextHolder,
        warningFeedback,
        navBarIsOpen,setNavBarIsOpen,
        toggleNavbar,isAppLoading,setIsAppLoading
  
       
      }}>
        {props.children}
      </MyContext.Provider>
    )
}

export default MyContext;