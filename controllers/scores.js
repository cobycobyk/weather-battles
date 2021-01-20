const Score = require('../models/score');

module.exports = {
  index,
  create,
  delete: deleteOne,
}

async function index(req, res) {
  try {
    const scores = await Score.find({}).sort({score: -1});
    res.json({scores});
  } catch(err) {
    res.json({err});
  }
}
async function create(req, res) {
  try {
    const scores = await Score.create(req.body)
    res.redirect('/api/scores');
  } catch(err) {
    res.json({err});
  }
}
async function deleteOne(req, res) {
  try {
    const scores = await Score.findByIdAndDelete(req.params.id)
    res.redirect('/api/scores');
  } catch(err) {
    res.json({err});
  }
}

