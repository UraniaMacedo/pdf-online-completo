export default function ToolCards({ tools, activeToolId, onSelectTool }) {
  return (
    <section className="tools-grid" id="ferramentas">
      {tools.map((tool) => {
        const isActive = activeToolId === tool.id;

        return (
          <button
            key={tool.id}
            className={isActive ? "tool-card active" : "tool-card"}
            onClick={() => onSelectTool(tool.id)}
          >
            <span>{tool.icon}</span>
            <h2>{tool.title}</h2>
            <p>{tool.description}</p>
          </button>
        );
      })}
    </section>
  );
}
