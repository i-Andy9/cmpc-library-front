import React, { useState } from "react";
import type { Book } from "../../types/book";

interface Props {
  initialData?: Partial<Book>;
  onSubmit: (data: FormData) => void;
  loading?: boolean;
}

export const BookForm: React.FC<Props> = ({
  initialData = {},
  onSubmit,
  loading,
}) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [author, setAuthor] = useState(initialData.author || "");
  const [genre, setGenre] = useState(initialData.genre || "");
  const [publisher, setPublisher] = useState(initialData.publisher || "");
  const [available, setAvailable] = useState(initialData.available ?? true);
  const [description, setDescription] = useState(initialData.description || "");
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!title || !author || !genre || !publisher) {
      setError("Todos los campos son obligatorios");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("genre", genre);
    formData.append("publisher", publisher);
    formData.append("available", String(available));
    formData.append("description", description);
    if (image) formData.append("image", image);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        placeholder="Género"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <input
        placeholder="Editorial"
        value={publisher}
        onChange={(e) => setPublisher(e.target.value)}
        required
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>
        Disponible
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />
      <button type="submit" disabled={loading}>
        Guardar
      </button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
};
