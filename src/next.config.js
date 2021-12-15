const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  handleImages: ['jpeg', 'png', 'svg'],
});

module.exports = {
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'repository-images.githubusercontent.com',
      'github.com',
    ],
  },
};
