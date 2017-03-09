var db = require('./db_base')
var DBBase = db.DBBase
var mongoose = db.mongoose
var Schema = mongoose.Schema

//创建商品分类数据结构
var foodSchema = new Schema({
    img:String,
    name:String,
    type:String,
    description:String,
    price:Number
})
var Food = mongoose.model("food",foodSchema)

/**
 * 分类模型
 */
class FoodDal extends DBBase{
    constructor(){
        super(Food)
    }

}
   
module.exports = {
    Food:Food,
    FoodDal:FoodDal
}