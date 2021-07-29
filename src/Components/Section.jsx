import "../CSS/section.css";

const Section = ({ Icon, title, color, selected }) => {
  return (
    <div
      className={`section ${selected && "section--selected"}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h5>{title}</h5>
    </div>
  );
};

export default Section;
