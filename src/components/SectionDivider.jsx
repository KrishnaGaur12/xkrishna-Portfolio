const SectionDivider = ({ className = "" }) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Top border line */}
      <div className="h-px w-full bg-border"></div>

      {/* Empty space instead of grid */}
      <div className="h-10 w-full"></div>

      {/* Bottom border line */}
      <div className="h-px w-full bg-border"></div>
    </div>
  );
};

export default SectionDivider;
