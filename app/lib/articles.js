import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html'

export function getPost(slug) {
  const fullPath = path.join(process.cwd(), "app/articles", `${slug}.md`);
  const source = fs.readFileSync(fullPath, "utf8");

  const { content, data } = matter(source);

  return {
    content, // MDX content
    frontmatter: data, // { title, date, ... }
  };
}

const postsDirectory = path.join(process.cwd(), 'app', 'articles');
 
export function getSortedPostsData() {

  // Get file names under /articles
  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });
  const fileNames = entries
    .filter((entry) => entry.isFile() && (entry.name.endsWith(".md")))
    .map((entry) => entry.name);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');
 
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
 
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
 
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const blogPostWithHTML = {
        id,
        title: matterResult.data.title,
        category: matterResult.data.category,
        date: matterResult.data.date,
        contentHtml,
    }
    return blogPostWithHTML

    // Combine the data with the id
    // return blogPostWithHTML
}