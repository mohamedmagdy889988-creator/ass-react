import { useLocation } from "react-router-dom"

function Heading({ text }) {
  const { pathname } = useLocation();
  return (
    <header className={`${pathname === "/" || pathname === "/about" ? 'text-white' : "text-black"} my-3 font-bold text-4xl uppercase`}>
      {text}
    </header>
  )
}

export default Heading  