const Section = ({ title, children }) => (
  <div>
    <h2 className="text">{title}</h2>
    {children}
  </div>
);

export default Section;
