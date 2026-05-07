export default function FileDropzone({
  title,
  subtitle,
  accept,
  multiple = false,
  onFilesSelected
}) {
  return (
    <label
      className="drop-area"
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => {
        event.preventDefault();
        onFilesSelected(event.dataTransfer.files);
      }}
    >
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(event) => onFilesSelected(event.target.files)}
      />

      <strong>{title}</strong>
      <span>{subtitle}</span>
    </label>
  );
}
