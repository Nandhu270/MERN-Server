import Movie from "../model/MovieModel.js";

const saveData = async (req, res) => {
  try {
    const s = new Movie(req.body);
    const r = await s.save();
    res.status(200).json({
      message: "Movie Created SuccessFully!...",
      data: r,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const saveManyData = async (req, res) => {
  try {
    const s = await Movie.insertMany(req.body);
    res.status(200).json({
      message: "Movie Created SuccessFully!...",
      data: s,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getData = async (req, res) => {
  try {
    const data = await Movie.find();
    res.status(200).json({
      message: "Movie Retrieved SuccessFully!...",
      data: data,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getDataByName = async (req, res) => {
  try {
    const data = await Movie.findOne({ name: req.params.name });
    res.status(200).json({
      message: "Movie Retrieved SuccessFully!...",
      data: data,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const updateData = async (req, res) => {
  try {
    const data = await Movie.findOneAndUpdate(
      { name: req.params.name },
      { $set: req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      message: "Movie Updated SuccessFully!...",
      data: data,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const deleteData = async (req, res) => {
  try {
    const data = await Movie.findOneAndDelete({ name: req.params.name });
    res.status(200).json({
      message: "Movie Deleted SuccessFully!...",
      data: data,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export { saveData, getData, getDataByName, updateData, deleteData, saveManyData };
