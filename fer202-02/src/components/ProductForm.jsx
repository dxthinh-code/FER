import React, { useState } from "react";

function ProductForm({ initial, onSubmit }) {
  const [form, setForm] = useState(initial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="form-control mb-2" required />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="form-control mb-2" />
      <input name="price" placeholder="Price" value={form.price} onChange={handleChange} className="form-control mb-2" />
      <input name="currentPrice" placeholder="Current Price" value={form.currentPrice} onChange={handleChange} className="form-control mb-2" />
      <input name="image" placeholder="Image (e.g. laptop1.png)" value={form.image} onChange={handleChange} className="form-control mb-2" />
      <button className="btn btn-success">Save</button>
    </form>
  );
}

export default ProductForm;
