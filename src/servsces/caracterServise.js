import axios from "axios";

const caracterServise={
    getAll:(char)=>axios.get(char)
}
export {
    caracterServise
}