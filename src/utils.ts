const size = {
  mobile: "300px",
  tablet: "768px",
  desktop: "992px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};
