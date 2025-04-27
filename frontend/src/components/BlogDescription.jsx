import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // ensure Bootstrap is imported

export default function BlogDescription() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blogs/${id}`)
      .then(res => setBlog(res.data))
      .catch(err => console.error('Error fetching blog description:', err));
  }, [id]);

  if (!blog) return <div className="container mt-4">Loading description...</div>;

  return (
    <div className="container-fluid mt-4 px-4">
      <Link to={`/blog/${id}`} className="btn btn-secondary mb-3">← Back to Article</Link>
       {/* --- Affiliate Section --- */}
       
          <h2 className="d-flex justify-content-center align-items-center">Recommended Tools & Gadgets</h2>
          <div className="d-flex justify-content-center flex-wrap gap-2">
            <a 
              href="https://www.amazon.co.uk/MAXLEGEN-15-6-Inch-Laptop-Windows/dp/B0D3TMJBT6/ref=sr_1_3_sspa?crid=3V338VJAJJL2Q&dib=eyJ2IjoiMSJ9.YlMdX28zxOyi9DIyKTp5KbJo2r7yvXKqTw-oAmuoO1PWLvUBTlz3PDF0YGAwwWMjWiIGru3KsnlqmlWGzWYq2dKl7zEML6zXQ7mGdq_mRB4FPZSGX92WKQMNDgJu9eUkxOFfMh2ipLAmIXZ7CtkZK8Kqw8BFKs70XSheSkl7JkKTYK3woFjkJtAJTCSO_PEMy-L1o0Hwzsn8ATgM-EzTr6mdz5HD70cMvaM1TVniIKE.RAIAchIOrctSt2T9Lcox177Z8aeCL7Q3gVSSbJZgoYY&dib_tag=se&keywords=laptop&qid=1745684326&sprefix=laptop%2Caps%2C264&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&tag=tafadzwamunyu-21
              "  
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              💻 Get Laptop
            </a>
            <a 
              href="https://www.amazon.co.uk/Apple-AirPods-generation-MagSafe-USB%E2%80%91C/dp/B0CHWZ9TZS/ref=sr_1_1_sspa?crid=2S3FTNR60JVN5&dib=eyJ2IjoiMSJ9.GAB6sZrQezgGN1pP1Cy_SZ8M50oc5qb6qLwtymD-3A4sCJ0iWLgpRLea0lf9ab9sRUsZXeDjraUayYL-Crcy9XCgYZfqX0dSGa0wwt2eSmVYcp6klpBcElPGePE_92hkqrKhNW6QbMEiAXjuUv_R8dIx1KFnIB8WoYfy8ZRx5V44ySauHpk-ho8Jl4nLIXGIA1fDIh-PrcWkHlZFSbEoaoG5Lob05kPQJkIxLPb_nbg.zxV6YZUatc1joNHfK222PMd4Q4x19_ngCCrbPcoO4m4&dib_tag=se&keywords=airpods+pro+2&qid=1745683411&sprefix=airpods+%2Caps%2C120&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&tag=tafadzwamunyu-21" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-info"
            >
              🎧 Grab Airpods
            </a>
            <a 
              href="https://www.amazon.co.uk/echo-dot-2022/dp/B09B9615X2/ref=sr_1_2?crid=3BN5RSSDD0Y7S&dib=eyJ2IjoiMSJ9.O-04vQ5msPI9faTJgRKy0SdUsoT04ANaSghLmM-lQOuk8LyFXmTjlEff_clxRmZqaXU4RXQdMiJpNTBjQz7ue6KrVcN14x6-ejev7wvfhuzxYioAz_uiCemK7jbtWpYUDidG_TK_B2pxSOarM0fOxjnlii_w_MwgQ-sSVNTvabixZ3VLAkAkuc2cGrqBnoo3p2sQrVSUtA6LQlSqME9la51rOflsu6gfyr6P_LotTrQ.t01XQEBLVHpvY9nUHjuN8fXH2Lil_hM8Xk3XdZGd_ww&dib_tag=se&keywords=Amazon%2BEcho%2BDevices%2B(with%2BAlexa)&qid=1745684787&sprefix=amazon%2Becho%2Bdevices%2Bwith%2Balexa%2B%2Caps%2C119&sr=8-2&ufe=app_do%3Aamzn1.fos.a12bb8b2-f685-427b-97d8-8421de4b1945&th=1&tag=tafadzwamunyu-21" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-dark"
            >
              🎙️ Buy Echo Dot with Alexa
            </a>
            <a 
              href="https://www.amazon.co.uk/Amazon-Stick-Remote-controls-streaming/dp/B0CQN8PP9G/ref=sr_1_1?crid=2IC5AEF4H12IV&dib=eyJ2IjoiMSJ9.fY8Gn_50D1_eOZPQS0K30KrT1WXIxfl2tQ9Wd2Tcr-3jMOsUnWDrmDLQ2Wqj9aN-JwtRbbjH6jwh9Vi4gpNxxwWtm13u691CknHOWbz2VOBRal4YHh2-4qaj7y0Xu8cBH921m_QrFACvfWJwv-9PpnYyXusmGQTF8fmRYmXaxwRE232tc7TPaJlflDzQovOcktG11O7KC4VhEwaCkXumbGgcevXgJ_DtinUShabPDGM.vsAslM4fAzvq2H439qx5IZVUVcPvZO-HGLrUgqDLJ6s&dib_tag=se&keywords=amazon+fire+stick+hd&qid=1745685667&sprefix=amazon+fire+stick+hd%2Caps%2C129&sr=8-1&tag=tafadzwamunyu-21" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-warning"
            >
              🔥📺 Buy Amazon Fire TV Stick HD
            </a>
            <a 
              href="https://www.amazon.co.uk/Apple-Bluetooth-Headphones-Personalised-Effortless/dp/B0DGHWD7CT/ref=sr_1_1_sspa?crid=3MY5H0FV62HO9&dib=eyJ2IjoiMSJ9.ue6R5fBAfgAgaEtRJJ0xRPorFHy7YqYcMXXqdjf42VPBr7Iv80t4F-P5HXazXCIh05UQYPfOfc0iG8igxKgJpWPC7gZWg_UTMlXbOfbifXOvYqUoTNef3uPJud7CpU8YQXbdiTuqXbNWdVAPwrqa8gTKHfVA3uucrXRhYiXj8rFTen1k1Hmdo6Cm669pVlzePRii1V4t7L4xPgAMg1V8FVTDgkeQJn1lKQ4Tf57ZWjU.rIt6uA1wfAHio6QjodlgjYF6nl70kpz8Bz-Le8D7Q3k&dib_tag=se&keywords=Apple+AirPods+4&qid=1745685898&sprefix=apple+airpods+4%2Caps%2C173&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&tag=tafadzwamunyu-21" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-success"
            >
              🎧👂 Grab Apple AirPods 4
            </a>
          </div>
          <p className="d-flex justify-content-center align-items-center small text-muted mt-2">
            *These are affiliate links. I may earn a commission at no extra cost to you!
          </p>
   
        {/* --- End Affiliate Section --- */}


      <div className="card w-100 shadow-lg">
        {blog.image && (
          <img 
            src={`http://localhost:5000${blog.image}`} 
            alt={blog.title} 
            className="card-img-top" 
          />
        )}
        <div className="card-body">
          <h4 className="card-title mb-3">{blog.title}</h4>
          <p className="card-text">{blog.description}</p>
        </div>
      </div>
    </div>
  );
}
