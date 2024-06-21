import listModel from "../../models/listModel";

export const getTodos = async () => {
  try {
    const list = await listModel.find({});
    console.log(list);
    return list;
  } catch (err) {
    console.log(err);
  }
};
