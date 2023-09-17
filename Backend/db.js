const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://sandhuarshpreet123:Arsh123@cluster1.smnxgcf.mongodb.net/gofood?retryWrites=true&w=majority";

const mongoDB =async()=>{
   try{ await mongoose.connect(mongoURI);
        console.log('connected');
        const fetched_data =mongoose.connection.db.collection("food_items");
        let data = await fetched_data.find({}).toArray();
        //  console.log();
        global.food_items =data;
        // console.log(global.food_items);
        const foodCategory =await mongoose.connection.db.collection("foodCategory");
        let catData = await foodCategory.find({}).toArray();
        global.foodCategory =catData;


        }catch(error){
            console.log("err:",error);
        }
};
module.exports=mongoDB;