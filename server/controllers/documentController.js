import Document from "../models/documentSchema.js";

export const getDocument = async (id) => {
  if (id == null) return;

  const foundDocument = await Document.findById(id);

  if (foundDocument) return foundDocument;

  return await Document.create({ _id: id, data: "" });
};

export const updateDocument = async (id, data) => {
  if (id == null) return;

  return await Document.findByIdAndUpdate(id, { data });
};
