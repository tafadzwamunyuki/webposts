import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showPopular, setShowPopular] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then(res => setBlogs(res.data))
      .catch(err => console.error('Error fetching blogs:', err));
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setSearchResults(blogs);
      return;
    }

    const results = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, blogs]);

  return (
    <div className="card-content">
      {/* Affiliate Products Section */}
      <div className="affiliate-section mt-1">
        <h3 className="mb-3">🛍️ Recommended Products</h3>
        <div className="d-flex justify-content-center flex-wrap gap-3">
          <a 
            href="https://www.amazon.co.uk/HP-Processor-Graphics-Microsoft-14s-dq0000sa/dp/B0DFQ4FD35/ref=sr_1_4?crid=2PI5R8A5JQJG8&dib=eyJ2IjoiMSJ9.WhMDTx4fy0MRv5cvN_rVpm7Dwszrd3nXrMxcYmfbuQ35bojG4W785APDTkJEAxGq9JgNfm5ZwESusJA4ciUpQFxONf-COpkXxoZmLugXSGr9XYffWJpTccdW5yor5wVj_vQBuLGROtl0s-eFBC_pxk-6OPCU6PjKrZYrFm4u67mfePdTk4BRuZaiq-DWPoAMYpAtVWC1OlIs-LVKNboKOpNm2MjJVEaL4Szal54HRyg.cHFLwAPAbKDsLkH1DosgCJR7l_q5BB4et_Pgze1WPC4&dib_tag=se&keywords=HP%2BStream%2B14%22%2BLaptop&qid=1745692072&sprefix=hp%2Bstream%2B14%2Blaptop%2Caps%2C186&sr=8-4&th=1&tag=tafadzwamunyu-21" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-warning"
          >
            💻 Get Your Laptop
          </a>
          <a 
            href="https://www.amazon.co.uk/Samsung-Galaxy-Black-Unlocked-Smartphone-Schwarz/dp/B0CR773B14/ref=sr_1_5?crid=3RYLG0HKKXH2F&dib=eyJ2IjoiMSJ9.lTe8wYCiOG86ApUi49akuuK96zxC_lrGk-1w8tdqH7XCOKW-NvbhqpUy0eoCctAfyMJu737tr5GgF7xcMSm7R4Gm3H3rpLvSMEw66Dtk7hTR5Quk1Kj8wPyKd5Sn1pCDYHaGVMt8qxsvB-JZRSmIGjVBKK_nBHyYZjkcNZbyEp78MrNBaRrPslDn-y2eBjoty4QMXs_pg3CGOfIQRqB1OXaDxuJgvx8OBjDJewRYtaU.S1dlxtFN50ubPkch-qmzFf9wZinMVOUWLOU_xsColHs&dib_tag=se&keywords=samsung+galaxy+a15&qid=1745692340&sprefix=samsung+galaxy+a15%2Caps%2C239&sr=8-5&tag=tafadzwamunyu-21" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            📱 Samsung Galaxy A15
          </a>
          <a 
            href="https://www.amazon.co.uk/PlayStation-5-DualSense-Wireless-Controller/dp/B08H99BPJN/ref=sr_1_11?crid=2051T8589YUQB&dib=eyJ2IjoiMSJ9._gAWRS_YggqAvS5YKeZxzMtKZqW3rATQXlpWu8z8WzamT25K_-5VEx1db7haB-zFAVVW0qf7PADam9bV6jNcuSc2_-DtFx0ZIgpYpl-oaTsbjNAmNWx5-VrCHqJgZ8ZplKHsW6cZnRL__B5lRI_mP7mzCjlDdOEUHzXmji_Yukb5OsFo17eJGch7xqbIYG75wERqCgq89bIOXv3pmjktX1JxOjtfnBS20o4M0Miz2bc.gTjNRYkpd9LLX4zFWJiOsCQ6TlSwT9tjdplTXbSbNfc&dib_tag=se&keywords=playstation%2B5&qid=1745692612&sprefix=play%2Caps%2C346&sr=8-11&th=1&tag=tafadzwamunyu-21" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-success"
          >
             🎮 PlayStation Controller
          </a>
        </div>
        <p className="small text-muted mt-2">
          *These are affiliate links. I may earn a commission at no extra cost to you.
        </p>
      </div>
      {/* End Affiliate Products Section */}

      <h2 className="mb-4">📚 Articles</h2>
      <Link to="/create" className="btn btn-success mb-3">Create New Article</Link>

      <div className='card-content'>
        <input
          type='text'
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          className='card-content'
          placeholder='Search by Author or title...'
        />
      </div>

      <div className='card-container'>
        {searchResults.map(blog => (
          <div className="card mb-4" key={blog._id}>
            {blog.image && (
              <img src={`http://localhost:5000${blog.image}`} alt={blog.title} />
            )}
            <div className="card-body">
              <h4 className="card-title">{blog.title}</h4>
              <p className="card-text"><strong>Author:</strong> {blog.author}</p>
              <p><strong>Published:</strong> {new Date(blog.createdAt).toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>

      
              <Link to={`/blog/${blog._id}`} className="card-title">View</Link>
              <Link to={`/blog/${blog._id}/description`} className="btn btn-secondary">View Article</Link>
            </div>
          </div>
        ))}
        {searchTerm && searchResults.length === 0 && (
          <p>Sorry, the search reaturned no articles matching your search criteria.</p>
        )}
      </div>

      {/* Affiliate Products Section */}
      <div className="affiliate-section mt-5">
        <h3 className="mb-3">🛍️ Recommended Products</h3>
        <div className="d-flex justify-content-center flex-wrap gap-3">
          <a 
            href="https://www.amazon.co.uk/Extension-POWSAF-Protector-Socket-Black/dp/B09V2ZV98M/ref=sr_1_12_sspa?crid=18Q4I2W8K9NRE&dib=eyJ2IjoiMSJ9.1kneKi5kNABD-Towvbhz31GO3SOd9GewlfV_e67BTb0zyNrw3Bf9cuWJvTQGkkps77cr-RkHbE5PDvOY0rsrxMzGemuhHhqzYyekAneeg3bHbhhCXeYv0cXzMA4dAejqouqjQBllUCQgoI68dRvCJWAWwMRAj8FeT-ykVUih85aOZAONW-VrqAa0NJ2xGZVsWbeKKmFwe89lm3CUZtfp4dTTMC2oUO6-Xq4McQoaNruag9dsyUQv_nQSZeEuyVnnaFP3ZdigLR-kcgDs-DirHaDIUOME0n9tUAyyD8SXHOI.h28qT94OhyYDCsvbPnBkF6n9SmgemitsHSZXBZAvC-Y&dib_tag=se&keywords=Surge+Protector+Power+Strip&qid=1745690126&sprefix=surge+protector+power+strip%2Caps%2C294&sr=8-12-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1&tag=tafadzwamunyu-21" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-warning"
          >
            🔌⚡ Bestselling Surge Protector
          </a>
          <a 
            href="https://www.amazon.co.uk/Apple-AirTag-Bluetooth-Item-Finder/dp/B0935JRJ59/ref=sr_1_1?crid=3B10F9PQDP66B&dib=eyJ2IjoiMSJ9.zW8yoYNQHlmMyHyj68HRhS6BO32Dps5oHuBGVXHxhYL-o9CsB14f7DWm0E-ZZUR80ih7in4eZJTpUqpSm7JULecjt0wVFgW7FpIzlgCjulGSVWESxrea7e4JnpmxYXVe3CYmSO22eHsWX2pnJR8fLiBjrntg03IAqSb-n59_oEgzvJTMpndll-WOANHWq3iEjLzHjhZ9qiw6ysvr8FKHy9pjbR1wanis6yRQrpYtsc0.wKqu_2lwvH9uCamhp_YCzm9HNo9ITMH2ivR1U_qVMmk&dib_tag=se&keywords=Apple%2BAirTag&qid=1745690467&sprefix=apple%2Bairtag%2Caps%2C184&sr=8-1&th=1&tag=tafadzwamunyu-21" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            🎯📍 Apple AirTag
          </a>
          <a 
            href="https://www.amazon.co.uk/ring-battery-video-doorbell-diy-wireless-video-doorbell-camera-with-head-to-toe-view-hd-video-easy-to-install-5-min-30-day-free-trial-of-ring-protect/dp/B0BZWQP9Z1/ref=sr_1_6?crid=1JP6MXD7L91Q4&dib=eyJ2IjoiMSJ9.5Zy2NJ7eXhnsPjmocLFjFe8HKjqxohOazBxytig5vmY8klaJEzL6DFXSg1WsGa7Is7wsXI-GkOvLFVoilsxkH3vEFdZJ6WgiaZCrQ4j7cz8Q-TboZhXiuy4ueno5JO9U6BEsYzy9eXBemT8LXTuerAO0H62siSs8rI13u5VhcH3L1-33hTqA9VFlN7K8OS5KXoXfP0gilOstJ-lhPxRoEyIzsHnfyLqgiwPfGPaqpuI.c8DC-bsuD0Pxz37FJcTDk3kMiwrSWW1mRHdNY-e_8-w&dib_tag=se&keywords=Ring%2BVideo%2BDoorbells%2Band%2BBlink%2BSecurity%2BCameras&qid=1745691033&sprefix=ring%2Bvideo%2Bdoorbells%2Band%2Bblink%2Bsecurity%2Bcameras%2Caps%2C132&sr=8-6&ufe=app_do%3Aamzn1.fos.a12bb8b2-f685-427b-97d8-8421de4b1945&th=1&tag=tafadzwamunyu-21" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-success"
          >
             🎥 Video Doorbell 
          </a>
        </div>
        <p className="small text-muted mt-2">
          *These are affiliate links. I may earn a commission at no extra cost to you.
        </p>
      </div>
      {/* End Affiliate Products Section */}
    </div>
  );
}
