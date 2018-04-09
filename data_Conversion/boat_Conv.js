
let plasticModel, aluminModel = [];


module.exports = {

    // функция распределяет лодки в зависимости от модельного ряда к которому они пренадлежат
    name_model_conv: function (boats) {

        let data = [
            {nameModel: "dayCruiser",      modelBoats: []},
            {nameModel: "plasticConsole",  modelBoats: []},
            {nameModel: "plasticCabin",    modelBoats: []},
            {nameModel: "plasticBowRider", modelBoats: []},
            {nameModel: "hardTop",         modelBoats: []},
            {nameModel: "aluminCabin",     modelBoats: []},
            {nameModel: "centerConsole",   modelBoats: []},
            {nameModel: "aluminBowRider",  modelBoats: []}
        ];

        let plasticData = [
            {nameModel: "Day Cruiser", modelBoats: []},
            {nameModel: "Console",     modelBoats: []},
            {nameModel: "Cabin",       modelBoats: []},
            {nameModel: "Bow Rider",   modelBoats: []},
            {nameModel: "Hard Top",    modelBoats: []}
        ];

        let aluminData = [
            {nameModel: "Cross Cabin",         modelBoats: []},
            {nameModel: "Center Console",      modelBoats: []},
            {nameModel: "Cross Bow Rider",     modelBoats: []}
        ];


        for(let i in boats){

            switch (boats[i].model) {

                case "Day Cruiser":{
                    plasticData[0].modelBoats.push(boats[i]); 
                    data[0].modelBoats.push(boats[i]);
                } 
                    break;
                case "Console": {
                    plasticData[1].modelBoats.push(boats[i]);
                    data[1].modelBoats.push(boats[i]);
                } 
                    break;
                case "Cabin":{
                    plasticData[2].modelBoats.push(boats[i]); 
                    data[2].modelBoats.push(boats[i]);
                } 
                    break;
                case "Bow Rider": {
                    plasticData[3].modelBoats.push(boats[i]);
                    data[3].modelBoats.push(boats[i]);
                } 
                    break;
                case "Hard Top": {
                    plasticData[4].modelBoats.push(boats[i]);
                    data[4].modelBoats.push(boats[i]);
                } 
                    break;
                case "Cross Cabin": {
                    aluminData[0].modelBoats.push(boats[i]);
                    data[5].modelBoats.push(boats[i]);
                } 
                    break;
                case "Center Console": {
                    aluminData[1].modelBoats.push(boats[i]);
                    data[6].modelBoats.push(boats[i]);
                } 
                    break;                
                case "Cross Bow Rider": {
                    aluminData[2].modelBoats.push(boats[i]);
                    data[7].modelBoats.push(boats[i]);
                } 
                    break;

                default:
                    break;
            }
        }
        plasticModel = plasticData;
        aluminModel = aluminData;

        return data;
    },

    // возвращает пластиковые катера
    plastic_data_conv: function(){
        return plasticModel;
    },
    
    // возвращает алюминиевые катера
    alumin_data_conv: function(){
        return aluminModel;
    },

    // ф-ция обрабатывает данные о лодке из БД
    one_boat_conv: function(boat){

        let boatReturn = {};

        boatReturn.id = boat._id;
        boatReturn.imgFolder = boat.img;
        boatReturn.name = boat.name;
        boatReturn.cterLength = boat.length;
        boatReturn.width = boat.width;
        boatReturn.weight = boat.weight;
        boatReturn.spaciousness = boat.spaciousness;
        
        boatReturn.info = boat.description.split("/");

        const cloudinary = require('cloudinary');

        boatReturn.imgs = boat.col_img;

        return boatReturn;
    }
}