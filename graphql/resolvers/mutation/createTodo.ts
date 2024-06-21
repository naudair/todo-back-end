import listModel from "../../models/listModel";

export const createTodo = async (_: any, { item }: any) => {
  const { title, status } = item;
  console.log(item);
  try {
    const data = await listModel.create({ title, status });
    console.log("Successfully CREATED list!");
    return data;
  } catch (error) {
    console.log(error);
  }
};
