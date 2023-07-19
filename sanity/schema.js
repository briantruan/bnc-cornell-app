import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import announcement from "./schemas/announcement";

export const schema = {
  types: [announcement, post, category, blockContent],
};
