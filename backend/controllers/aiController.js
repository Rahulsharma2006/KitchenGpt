const { generateRecipe } = require("../services/geminiService");

const generateAIRecipe = async(req,res)=>{
try{

const {prompt}=req.body;

if(!prompt){
return res.status(400).json({
message:"Prompt is required"
});
}

const recipe = await generateRecipe(prompt);

res.status(200).json({

success:true,
recipe

});

}
catch(error){

res.status(500).json({

message:error.message

});

}

}

module.exports={
generateAIRecipe
}