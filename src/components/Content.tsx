interface ContentProps {
  children: Array<any>;
}

export function Content(props: ContentProps) {
  return (
    <main>
      <div className="movies-list">
        {props.children}
      </div>
    </main>
  );
}
