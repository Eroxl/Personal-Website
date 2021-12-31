import React from 'react';

interface Props {
  id?: string,
}

const defaultProps: Props = {
  id: 'spacer',
};

const AboutMessage: React.SFC<Props> = (props) => {
  const { id } = props;

  return (
    <div
      id={id ?? undefined}
      style={{ scrollMargin: 25 }}
      className="w-full h-4 my-10 border-dashed border-gray-800 dark:border-gray-50 border-4 transition-colors"
    />
  );
};

AboutMessage.defaultProps = defaultProps;

export default AboutMessage;
