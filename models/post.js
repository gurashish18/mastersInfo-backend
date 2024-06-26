/** @format */

import mongoose from "mongoose";
const { Schema } = mongoose;

const PostSchema = new mongoose.Schema(
	{
		postDescription: String,
		postImage: {
			publicId: { type: String },
			url: { type: String },
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		likes: { type: Number, default: 0 },
		likedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
		comments: [
			{
				type: Schema.Types.ObjectId,
				ref: "Comment",
			},
		],
	},
	{ timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);
export default Post;
