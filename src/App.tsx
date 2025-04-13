import React from 'react';
import { Newspaper, TrendingUp, Microscope, BookOpen, ArrowRight } from 'lucide-react';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import { BlogPost } from './components/BlogPost';
import { BlogCarousel } from './components/BlogCarousel';
import { blogPosts, latestNews } from './data/posts';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Latest Health Insights</h1>
          <p className="text-gray-300 text-lg">Expert-backed articles and research on health and wellness</p>
        </div>
      </div>

      {/* Featured Articles Carousel */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
        <BlogCarousel posts={blogPosts} />
      </div>

      {/* Regular Articles Grid */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-black mb-3">
                    {post.icon}
                    <span className="text-sm font-semibold">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gray-700">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">Written by {post.author}</p>
                  <span className="text-black font-semibold group-hover:text-gray-700">Read More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Latest News Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-black">Latest News</h2>
            <Link to="/news" className="text-black font-semibold hover:text-gray-700">View all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((news, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold mb-2 hover:text-gray-700">{news.title}</h3>
                <p className="text-gray-600 text-sm mb-2">Written by {news.author}</p>
                <p className="text-gray-500 text-sm">{news.date}</p>
                <p className="text-gray-600 mt-2">{news.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;