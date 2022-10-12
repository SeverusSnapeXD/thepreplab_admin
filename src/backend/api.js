import { Token } from "@mui/icons-material";
import axios from "axios";
import Url from "./Url";

const token = 'eyJhbGciOiJIUzI1NiJ9.YWRtaW4xMDBAZ21haWwuY29t.6hNEs2kmPbjSqUUySWlUn0zeB7ZcyzM9msb05fWyffE';

axios.defaults.baseURL = Url.adminURL;
axios.defaults.headers.common.Authorization = 'Bearer '+Token;

export const Api = () => {
    function addFoodApi() {
        console.log('Adasd ')
    }
}