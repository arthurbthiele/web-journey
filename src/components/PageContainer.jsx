export const PageContainer = ({ children }) => (
  <div
    style={{
      width: window.innerWidth,
      height: window.innerHeight,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
      }}
    >
      {children}
    </div>
  </div>
);
