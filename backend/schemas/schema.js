import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import user from "./user";
import save from "./save";
import pin from "./pin";
import postedBy from "./postedBy";
import comment from "./comment";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([user, pin, comment, save, postedBy]),
});
