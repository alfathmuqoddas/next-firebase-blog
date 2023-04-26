export default function NewBlogForm({ onSubmit, onChange }) {
  return (
    <div className="container">
      <div className="card mx-auto card-compact w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title">Add New Product</h3>
          <form onSubmit={onSubmit}>
            <label htmlFor="product-name">Product Name</label>
            <input
              name="name"
              onChange={onChange}
              className="input input-bordered w-full my-2"
              placeholder="Input Product Name"
              type="text"
            />
            <label htmlFor="shortdesc">Short Description</label>
            <input
              name="shortdesc"
              className="input input-bordered w-full my-2"
              onChange={onChange}
              placeholder="Input Short Description"
              type="text"
            />
            <label htmlFor="longdesc">Long Description</label>
            <textarea
              name="longdesc"
              className="input input-bordered w-full my-2"
              onChange={onChange}
              placeholder="Input Long Description"
              rows="7"
              cols="50"
            ></textarea>
            <label htmlFor="thumbnail">Thumbnail Link</label>
            <input
              name="thumbnail"
              className="input input-bordered w-full my-2"
              onChange={onChange}
              placeholder="Input Thumbnail Link"
              type="text"
            />
            <label htmlFor="category">Product Category</label>
            <input
              name="category"
              className="input input-bordered w-full my-2"
              onChange={onChange}
              placeholder="Input Product Category"
              type="number"
              max="10"
            />
            <label htmlFor="type">Product Type</label>
            <input
              name="type"
              className="input input-bordered w-full my-2"
              onChange={onChange}
              placeholder="Input Product Type"
              type="number"
              max="10"
            />
            <div className="d-grid">
              <input type="submit" className="btn btn-primary" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
