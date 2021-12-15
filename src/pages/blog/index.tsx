import React from 'react';
import { GetStaticProps } from 'next';

import ProjectsPortion from '../../components/home/ProjectsPortion';
import { getAllBlogPosts } from '../../lib/blog';

const BlogPage = (
  props: {posts: {name: string, title: string, description: string, imageURL: string}[]},
) => {
  const { posts } = props;

  return (
    <div className="bg-gray-100 px-10 pt-24">
      <h1 className="font-bold text-gray-800">
        <h1 className="sm:text-6xl text-5xl">Blog</h1>
        <h1 className="sm:text-2xl text-xl">
          Welcome to my blog where I can show off some of the stuff I am working on
        </h1>
      </h1>
      <div className="font-bold text-gray-800">
        <div className="h-max flex gap-5 justify-evenly sm:justify-between flex-wrap mt-5 mx-5">
          {
            posts.map(
              (post) => (
                <ProjectsPortion
                  name={post.title}
                  key={post.title}
                  description={post.description}
                  imageURL={post.imageURL}
                  projectURL={`/blog/${post.name.replace(/\s/g, '-')}`.toLowerCase()}
                />
              ),
            )
          }
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllBlogPosts();

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
