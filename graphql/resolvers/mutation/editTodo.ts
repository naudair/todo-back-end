import listModel from "../../models/listModel";

export const editTodo = async (_: any, { id, item }: any) => {
  const {  title, status } = item;
  console.log(item);
  try {
    const updated = await listModel.findByIdAndUpdate(
      id,
      { title, status },
      { new: true }
    );
    console.log("Successfully EDITED list!");
    return updated;
  } catch (error) {
    console.log(error);
  }
};
