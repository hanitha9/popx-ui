
export default function MobileWrapper({ children }) {
  return (
    <div className="outer">
      <div className="mobile">{children}</div>
    </div>
  );
}
