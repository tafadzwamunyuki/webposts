import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: Date,
  },
}, { timestamps: true });

const Blog = mongoose.model("Blog", blogSchema)



export default mongoose.model('Blog', blogSchema);
