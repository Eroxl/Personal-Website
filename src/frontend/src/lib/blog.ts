import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const blogPostsDirectory = join(process.cwd(), 'src/_blog');

export const getBlogPostByName = (name: string) => {
  const path = join(blogPostsDirectory, `${name.replace(/-/g, ' ')}.md`);
  const markdownData = fs.readFileSync(path, 'utf8');
  const { data, content } = matter(markdownData);

  return {
    data: {
      ...data,
      name,
      ISODate: new Date(data.date).toISOString(),
      date: data.date,
    },
    content,
  };
};

export const getAllBlogPosts = () => {
  const posts = fs.readdirSync(blogPostsDirectory);
  // Date Formatted Like yyyy.mm.dd
  const allPosts = posts
    .filter((post) => post !== '.obsidian')
    .map((post) => getBlogPostByName(post.replace('.md', '')).data)
    .sort(
      (firstPost, secondPost) => (
        new Date(firstPost.date).getTime() > new Date(secondPost.date).getTime() ? -1 : 1
      ),
    );
  return allPosts;
};

export const formatToMarkdown = (formatableString: string) => marked.parse(formatableString);
