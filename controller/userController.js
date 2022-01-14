
import userModel from "../modules/user.js"
class UserController{
     static home=(req,res)=>{
          res.render('index')
     }

     static registraction=(req,res)=>{
          res.render('Registraction')
     }

     static createuserDoc=async (req,res)=>{
         try {
          console.log(req.body.name);
               const doc=new userModel({
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password,
               })
               await doc.save();
               res.redirect('/login');
         } catch (error) {
              console.log(error)
         }
     }
        static verifyLogin= async(req,res)=>{
             try {
               const { email,password}=req.body;
               const result=await userModel.findOne({email:email});
               if(result!=null){
                    if(result.email==email && result.password==password ){
                         res.send(`<h1> Dashboard  ${result} </h1>`)
                    }
                    else{
                         res.send("<h1> Email or passworld is not valid </h1>")
                    }
               }
               else{
                    res.send("<h1> You are not a registerd user </h1>")
               }
             } catch (error) {
                  console.log(error)
             }
        }


     static login=(req,res)=>{
          res.render('login')
     }
}
export default UserController;