import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = (props) => {
  const { href, children } = props;

  return (
    <a href={href} className="text-blue-400 hover:underline">
      {children}
    </a>
  );
};

export type { LinkProps };
export default Link;
