export const scrollTop = () => {
    setTimeout(()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
}, 50)}

const StylesButton = {
    bottom: "20px",
    left: "20px",
    zIndex: 1110,
    position: "fixed",
    padding: "20px",
    fontWeight: 700,
    color: "#7483B0",
    backgroundColor: "#C7D1EF",
    borderRadius: "12px",
    cursor: "pointer",
}

const ToTopButton = ({text}) => {
    return <div style={StylesButton} onClick={scrollTop}>{text}</div>
};
export default ToTopButton;