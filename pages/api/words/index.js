import words from '../../../data/words';

export default function handler(req, res) {
  res.status(200).json(words);
};

