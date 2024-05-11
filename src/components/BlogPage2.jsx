import React, { useEffect, useState } from 'react'
import blogsData from '../api/blogsData';
import Blogcard from './Blogcard';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import Sidebar from './Sidebar';

const BlogPage2 = () => {
    const[blogs, setBlogs] = useState([]);
    const[currentPage, setCurrentPage] = useState(1);
    const pageSize = 12
    const[selectedCategory, setSelectedCategory] = useState(null);
    const[activeCategory, setActiveCategory] = useState(null);
  
    useEffect(() => {
        // Calculate startIndex and endIndex for pagination
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        
        // Apply pagination to the data
        let filteredBlogs = blogsData.slice(startIndex, endIndex);
      
        // Apply category filtering if selected
        if(selectedCategory){
          filteredBlogs = filteredBlogs.filter(blog => blog.category === selectedCategory);
        }
      
        // Set filtered data to state
        setBlogs(filteredBlogs);
      }, [currentPage, pageSize, selectedCategory]);
  
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

export default BlogPage2
