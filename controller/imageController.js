const FoodImage = require("../model/ImageModel");

const uploadImage = async (req, res) => {
  try {
    const { foodName, price } = req.body;
    const imageUrl = `/uploads/${req.file.filename}`;
    const data = await FoodImage.create({ foodName, price, imageUrl });
    res.status(200).json({
      msg: "Saved SuccessFully",
      data: data,
    });
  } catch (err) {
    res.status(404).json({
      msg: err.message,
    });
  }
};

const getImage = async (req, res) => {
  try {
    const data = await FoodImage.find();
    res.status(200).json({
      msg: "Saved SuccessFully",
      data: data,
    });
  } catch (err) {
    res.status(404).json({
      msg: err.message,
    });
  }
};

module.exports = { uploadImage, getImage };
