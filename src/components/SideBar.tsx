interface SideBarProps {
  fisrtTitle: string;
  secondTitle: string;
  children: Array<any>;
}

export function SideBar(props: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        {props.fisrtTitle}
        <p>{props.secondTitle}</p>
      </span>

      <div className="buttons-container">{props.children}</div>
    </nav>
  );
}
