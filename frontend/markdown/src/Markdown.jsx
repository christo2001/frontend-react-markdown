import React, { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import textareacss from './markdown.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Markdowns() {
  const [post, setPost] = useState(''); // Declare the post state variable

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleMarkdownChange = (event) => {
    setPost(event.target.value);
  };

  return (
    <div className={textareacss.body} data-aos="fade-up">
      <div id="markdown"></div>
      <div className={textareacss.textarea}>
        <textarea value={post} onChange={handleMarkdownChange} rows={10} cols={50} />
      </div>

      <div className={textareacss.markdownarea}>
        <Markdown>{post}</Markdown> {/* Render the Markdown content from the 'post' state */}
      </div>
    </div>
  );
}

export default Markdowns;
