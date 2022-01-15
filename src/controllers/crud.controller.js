const getOne = (model, populateParams) => async (req, res) => {
  try {
    const item = await model.findById(req.params.id);
    for (let i = 0; i < populateParams.length; i++) {
      await item.populate(populateParams[i]);
    }
    return res.status(200).send(item);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAll = (model, populateParams) => async (req, res) => {
  try {
    const items = await model.find();
    let result = [];
    for (let i = 0; i < items.length; i++) {
      for (let j = 0; j < populateParams.length; j++) {
        await items[i].populate(populateParams[j]);
      }
      result.push(items[i]);
    }
    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const post = (model, populateParams) => async (req, res) => {
  try {
    const item = await model.create(req.body);
    for (let i = 0; i < populateParams.length; i++) {
      await item.populate(populateParams[i]);
    }
    return res.status(200).send(item);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateItem = (model, populateParams) => async (req, res) => {
  try {
    const item = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    for (let i = 0; i < populateParams.length; i++) {
      await item.populate(populateParams[i]);
    }
    res.status(200).json(item);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteItem = (model, populateParams) => async (req, res) => {
  try {
    const item = await model.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });
    for (let i = 0; i < populateParams.length; i++) {
      await item.populate(populateParams[i]);
    }
    res.status(200).json(item);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = (model, populateParams = []) => ({
  getOne: getOne(model.populateParams),
  getAll: getAll(model, populateParams),
  post: post(model, populateParams),
  updateItem: updateItem(model, populateParams),
  deleteItem: deleteItem(model, populateParams),
});
