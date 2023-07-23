export default function SidebarOption({ link, svg, text, options, children }: {
  link: any,
  svg: any,
  text: string,
  options: string
  children: any
}) {
  return (
    <li className={options}>
      <a href={link} className="drawer-button">
        {svg}
        {text}
        {children}
      </a>
    </li>
  );
}
