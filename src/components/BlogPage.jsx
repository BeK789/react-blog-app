import React, { useEffect, useState } from 'react'
import Blogcard from './Blogcard';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import Sidebar from './Sidebar';

const BlogPage = () => {
  const[blogs, setBlogs] = useState([]);
  const[currentPage, setCurrentPage] = useState(1);
  const pageSize = 12
  const[selectedCategory, setSelectedCategory] = useState(null);
  const[activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `https://react-js-blog-server-1.onrender.com/blogs?page=${currentPage}&limit=${pageSize}`

      if(selectedCategory){
        url += `&category = ${selectedCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }

    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory])

  const handlePageChange = (pageNumber) =>{
    setCurrentPage(pageNumber);
  }

  const handleCategoryChange = (category) =>{
    setSelectedCategory(category)
    setCurrentPage(1);
    setActiveCategory(category);
  }

  return (
    <div>
      <div>
        <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
      </div>
      <div className='flex flex-col lg:flex-row gap-12'>
        <Blogcard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
        <div>
          <Sidebar/>
        </div>
      </div>
      <div>
        <Pagination onPageChange={handlePageChange} blogs={blogs} currentPage={currentPage} pageSize={pageSize}/>
      </div>

    </div>
  )
}

export default BlogPage
