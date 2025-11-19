// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'paper-jap': `
          radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0),
          radial-gradient(circle at 3px 3px, rgba(0,0,0,0.02) 1px, transparent 0)
        `,
      },
      backgroundSize: {
        'paper-jap': '20px 20px',
      },
    },
  },
};
