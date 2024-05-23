import User from "../models/user.model.js";

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


export const likeProfile = async (req, res) => {
    try {
        const { username } = req.params; // extracting username from url

        // Find the current user by their ID
        const user = await User.findById(req.user._id.toString());

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Find the user to like by their username
        const userToLike = await User.findOne({ username });

        if (!userToLike) {
            return res.status(404).json({ message: "User not a Member" });
        }

        // Checking if the profile is already liked
        if (user.likedProfiles.includes(userToLike.username)) {
            return res.status(400).json({ message: "Profile already liked" });
        }

        // Add the liking user to the likedBy array of the userToLike
        userToLike.likedBy.push({
            username: user.username,
            avatarUrl: user.avatarUrl,
            likedDate: Date.now()
        });

        // Add the liked user's username to the liking user's likedProfiles array
        user.likedProfiles.push(userToLike.username);

        // Save both documents in parallel
        await Promise.all([userToLike.save(), user.save()]);

        res.status(200).json({ message: "Profile liked" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const getLikes=async(req,res)=>{
    try {
        
        const user = await User.findOne({ _id: req.user._id });

        res.status(200).json({likedBy:user.likedProfiles})


    } catch (error) {
        res.status(500).json({message:error.message})
    }
}