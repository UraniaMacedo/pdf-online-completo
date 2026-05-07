import { formatFileSize } from "../utils/fileHelpers.js";

export default function FileList({ files, onRemove, onMove }) {
  if (!files || files.length === 0) return null;

  return (
    <div className="file-list">
      <h3>Arquivos selecionados</h3>

      {files.map((file, index) => (
        <div className="file-item" key={`${file.name}-${index}`}>
          <div>
            <strong>
              {index + 1}. {file.name}
            </strong>
            <small>{formatFileSize(file.size)}</small>
          </div>

          <div className="file-actions">
            {onMove && (
              <>
                <button type="button" onClick={() => onMove(index, -1)}>↑</button>
                <button type="button" onClick={() => onMove(index, 1)}>↓</button>
              </>
            )}

            {onRemove && (
              <button type="button" onClick={() => onRemove(index)}>Remover</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
