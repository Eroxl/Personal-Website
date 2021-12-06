/* eslint-disable react/no-danger */
import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import { getAllBlogPosts, getBlogPostByName, formatToMarkdown } from '../../lib/blog';
import Spacer from '../../components/home/Spacer';

const PostPage = (props: { data: any, content: any }) => {
  const { data, content } = props;

  return (
    <div className="bg-gray-100 mx-10 pt-24 mainMarkdownContent font-bold">
      <div className="flex flex-col">
        <div className={`bg-${data.colour} mb-10 h-48 w-full rounded-lg`} />
        <h1 id="title" className="sm:text-8xl text-7xl font-black mx-4">
          { data.title }
        </h1>
      </div>

      <div className="mx-4">
        <Spacer />
        <div
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <Spacer />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // @ts-ignore:next-line
  const { post } = params;

  const { data, content } = getBlogPostByName(post);
  const formattedContent = formatToMarkdown(content);

  return {
    props: {
      data,
      content: formattedContent,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPosts = getAllBlogPosts();

  return {
    paths: blogPosts.map((post) => ({
      params: {
        post: post.name.replace(/\s/g, '-'),
      },
    })),
    fallback: false,
  };
};

export default PostPage;
