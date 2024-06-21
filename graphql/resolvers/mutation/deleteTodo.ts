import listModel from "../../models/listModel";

export const deleteTodo = async (_: any, { id }: any) => {
  try {
    const updated = await listModel.findByIdAndDelete(id, { new: true });
    console.log("Successfully DELETED list!");
    return updated;
  } catch (error) {
    console.log(error);
  }
};
