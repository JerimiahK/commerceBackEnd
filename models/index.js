// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
});

//ProductTag is the junction table that references the foreign keys, product id and tag id.
Product.belongsToMany(Tag, { through: ProductTag, uniqueKey: false });

Tag.belongsToMany(Product, { through: ProductTag, uniqueKey: false });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

