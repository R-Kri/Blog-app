export const getPost = (req, res) => {
    res.status(200).json({message: "Fetching all Post"})
}

export const createPost = (req, res)=>{
    const {title, content} = req.body;
    res.status(201).json({message: "Post is created", data: {title, content}});
}