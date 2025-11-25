const fs = require('fs');
const path = require('path');

const blogDataPath = path.join(__dirname, 'src/data/blogData.json');
const blogData = JSON.parse(fs.readFileSync(blogDataPath, 'utf8'));

const phases = blogData.timeline;

// Helper to find phase for an article
const getPhase = (articleId) => {
  return phases.find(p => p.articles.includes(articleId));
};

blogData.articles = blogData.articles.map(article => {
  const phase = getPhase(article.id);
  const phaseTitle = phase ? phase.title : 'Career Development';
  const productLink = phase ? phase.cta.link : '/';
  const productName = phase ? phase.cta.text : 'JobGen Tools';

  const content = [
    `In the rapidly evolving landscape of tech careers, "${article.title}" is more than just a buzzword—it's a critical component of your ${phaseTitle.toLowerCase()} strategy. As we navigate through 2025, understanding the nuances of this topic can significantly impact your trajectory.`,
    
    `${article.excerpt} This article delves deep into the practical applications of this concept. Whether you are a junior developer or a seasoned architect, the principles discussed here are universal. We break down the complex requirements into manageable tasks, ensuring you can implement these changes immediately.`,
    
    `One of the biggest challenges candidates face is lack of structure. By integrating the insights from "${article.title}" into your daily routine, you create a more robust professional profile. It's about moving from a passive candidate to an active architect of your own career path.`,
    
    `Why does this matter for the ${phase ? phase.step : 'next'} phase? Because efficiency is key. Just as we optimize code for performance, you must optimize your career search for results. This is where our tools come in.`,
    
    `Ready to put this into practice? Don't just read about it—execute it. Use our **${productName}** to streamline this process and get feedback in real-time.`
  ];

  return {
    ...article,
    content
  };
});

fs.writeFileSync(blogDataPath, JSON.stringify(blogData, null, 2));
console.log('Updated blogData.json with article content.');

