import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Blog from './models/Blog.js';

dotenv.config();

// Connect to your MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB Connected');
  patchBlogs();
})
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Function to patch blogs
async function patchBlogs() {
  try {
    // Find blogs where publishedAt is missing
    const blogsWithoutPublishedAt = await Blog.find({ publishedAt: { $exists: false } });

    console.log(`🛠 Found ${blogsWithoutPublishedAt.length} blogs missing publishedAt`);

    for (const blog of blogsWithoutPublishedAt) {
      blog.publishedAt = new Date().toISOString(); // Set current time in UTC
      await blog.save();
      console.log(`✅ Updated blog "${blog.title}" with publishedAt`);
    }

    console.log('🎉 All missing publishedAt fields patched!');
    process.exit();
  } catch (error) {
    console.error('❌ Error patching blogs:', error);
    process.exit(1);
  }
}
