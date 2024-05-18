
    
export const getProfileandRepos=async(req,res)=>{

    try {
        const {username}=req.params; //extracting username 
        // console.log(username);
        const url= await fetch(`https://api.github.com/users/${username}`,{
            headers:{
                authorization: `token ${process.env.GITHUB_API_KEY}`
            }
        }); 
        

        if (url.status === 404) {
            return res.status(404).json({ message: "User not found" });
        }

        const userRes=await url.json();



        const repoRes= await fetch(`https://api.github.com/users/${username}/repos`,{
            headers:{
                authorization: `token ${process.env.GITHUB_API_KEY}`
            }
        });

        if (repoRes.status === 404) {
            return res.status(404).json({ message: "User repositories not found" });
        }

        const repos=await repoRes.json();



        res.status(200).json({userRes,repos});
        
        

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

