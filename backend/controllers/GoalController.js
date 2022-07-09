
// @desc  Get goals
// @route  GET api/goals
// @access Public
const getGoals=(req,res)=>{
    res.status(200).json({msg:'All goals'})
}

// @desc  Set goals
// @route  POST api/goals
// @access Private
const setGoal=(req,res)=>{
    if(!req.body.text){
        res.status(404)
        throw new Error('please add a text field')
    }
    res.status(200).json({msg:'Goal created successfully'})
}

module.exports={
    getGoals,setGoal
}