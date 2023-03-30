const cssStyles = () => ({
  bgBlur: (props) => {
    const blur = props?.blur || 6;
    return {
      WebkitBackdropFilter: `blur(${blur}px)`,
      backdropFilter: `blur(${blur}px)`, // Fix on Mobile
      filter: `blur(${blur}px)`,
    };
  },
});

export default cssStyles;
