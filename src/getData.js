
import axios from "axios";
import cons from "./constants/cons.js";
import changeData from "./App.js"



function getData(apoDate) {
    axios
      .get(`${cons.BASE_URL}?api_key=${cons.API_KEY}&date=${apoDate}`)
      .then((res) => {
        let data=res.data
        console.log(data)
        return(changeData(data))
      })
      .catch((err) => {
        console.log(err);
        return(null)
    });
  }
  export default getData