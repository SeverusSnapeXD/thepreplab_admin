const baseURL = 'https://food-app-backend-belgium.herokuapp.com'; 
const adminURL = baseURL + '/auth/admin';


export default class Url {
    static addFoodURL = adminURL + '/food';
}