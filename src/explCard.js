// import React, { Component, useState, useEffect } from 'react'
// import axios from "axios"
// import cons from "./constants/cons"

// export default function explCard() {
//     let apoDay = new Date().toISOString().slice(0, 10)
//     // const [date, setDate] = useState(apoDay)

//     class Card extends React.Component{
        
//         constructor(props) {
        
//             super(props);
//             this.state = { date: apoDay };
//             this.state = this.state.bind(this)
//         }
//             setDate(event) {
//                 // this.setState = this.setState.bind(this);
//                 event.preventDefault();
//                 this.setState ({date: event.target.value})
                
//                 useEffect(function () {
//                     axios
//                     .get(`${cons.BASE_URL}?api_key=${cons.API_KEY}&date=${this.date}`)
//                     .then((res) => {
//                             console.log(res.data)
//                             let newData = res.data
//                             return newData
//                         })
//                         .catch((err) => {
//                             console.log(err)
//                         })
//                         return () => {}
//                     }, [])
                    
//                 }}
//             debugger
//                 return (
                    
//                     <div classList= "apodCard">
//                 <p>{this.explanation}</p>
//                 <br /><br />
//                 <form onSubmit={this.setDate}>
//                 <h3>See Another Day</h3>
//                 <input type = "date" />
//                 <br /><input type= "submit" />
//                 </form>
//                 </div>
//     )
// }    