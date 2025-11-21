import {useNavigate} from "react-router";
import {Outlet} from "react-router";
import {MobileDateTimePicker} from "@mui/x-date-pickers";
import './App.css'
// import {useState} from "react";






export function Navbar(){
    const navigate = useNavigate();
    const gotoProduct = () => {
        navigate('/products')
    }
    const gotoHome = () =>
    {
        navigate('/');
    }
    const gotoCart = () =>{
        navigate('/cart')
    }
    return (<>
        <div className={"NavBar"}>
            <button id = "goHome" onClick = {gotoHome}>Home</button>
            <button id = "goToCart" onClick = {gotoCart}>Cart</button>
            <button id = "goToProduct" onClick = {gotoProduct}>Confirmation</button>
        </div>
        <div id={"mainScreen"}>
            <Outlet/>
        </div>
        </>)
}

export function Services(){
    return (
        <div>
            <h1 id="products"> Services</h1>
            <p id="whatWeDo"> We help people with dirty cars and maje them clean again</p>
            <h3 id = "targetTitle"> Target Audience</h3>
            <div className = "targetAudience">
                <div className = {"everyone"}>
                    <h5>Everyone</h5>
                    <p>We want to help all people who have dirty cars. We want everyone to have a clean car to use so we are happy to help anyone that needs it</p>
                </div>
            </div>
            <div className = "calander">
                <h5>Book when you want your car to be cleaned here</h5>
                <MobileDateTimePicker onAccept={(value)=>{let dates = [];
                    if(localStorage.getItem("timesBooked") != null){
                        dates = JSON.parse(localStorage.getItem("timesBooked") as string);
                    }
                    dates.push(value);
                    localStorage.setItem("timesBooked", JSON.stringify(dates));
                }} />
            </div>
        </div>
    )
}

export function Home(){
            return (
                <div>
                    <h1 id="home">Home</h1>
                    <p id="Welcome">Welcome to Making Cars greener</p>
                </div>
            )
}

export function Confirmation(){
            // function getItems(key:string):string[]{
            //     const item = localStorage.getItem(key);
            //     return item ? JSON.parse(item) as string[] : [];
            // }
    //         const [items] = useState(getItems("daysBooked"));
    //
    //         function dayOfWeek(dayOfWeek: number){
    //             if(dayOfWeek == 0){
    //                 return "Sunday"
    //             }
    // }
    // function month(monthNumber: number){
    //
    // }
     return(
         <div className = {"confirmation"}>

         </div>

    )
}
export default Navbar;