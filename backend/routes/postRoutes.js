const express = require("express")
const router = express.Router()
const Post = require("../models/Post")


router.post("/", async (req, res) => {
    try {
        const newPost = new Post(req.body)
        const saved = await newPost.save()

        res.status(201).json(saved)

    } catch (error) {
        res.status(400).json({message:'작성실패', error})
    }
})

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find().sort({createdAt:-1})

        res.status(201).json(saved)

    } catch (error) {
        res.status(400).json({message:'불러오기 실패', error})
    }
})

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        res.status(201).json(post)

    } catch (error) {
        res.status(400).json({message:'1개 불러오기 실패', error})
    }
})

router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true
            }
        )
        if(!updated) return res.status(404).json({message:'수정할 글 없음'})

        res.status(201).json(updated)

    } catch (error) {
        res.status(400).json({message:'1개 불러오기 실패', error})
    }
})



module.exports = router