export default function SidebarOption({ link, svg, text, options, children }) {
  return (
    <li className={options}>
      <a href={link} htmlFor="sidebar" className="drawer-button">
        {svg}
        {text}
        {children}
      </a>
    </li>
  );
}
