import Review from "../models/Review.js";

export const createReview = async(req,res)=>{
    const review = await Review.create(req.body);
    res.json(review);
};

export const getReviews = async(req,res)=>{
    const reviews = await Review.find().populate("student").populate("course");
    res.json(reviews);
};

export const deleteReview = async(req,res)=>{
    await Review.findByIdAndDelete(req.params.id);
    res.json({message:"Review deleted"});
};

