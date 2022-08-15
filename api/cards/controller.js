const services = require('./services.js');

const {
  createCard,
  getAllCard,
  findCardById,
  getSingleCard,
  updateCard
} = services;

async function getAllCardHandler(req, res) {
  try {
    const cards = await getAllCard()
    return res.status(200).json(cards)
  } catch (error) {
    return res.status(501).json({ error })
  }
}

async function getSingleCardHandler(req, res) {
  const { id } = req.params
  try {
    const Card = await getSingleCard(id)

    if (!Card) {
      return res.status(404).json({ message: 'Card not found' })
    }

    return res.json(card)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

async function createCardHandler(req, res) {
  const cardData = req.body

  try {
    const card = await createCard(CardData)
    return res.status(201).json(Card)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

async function updateCardHandler(req, res) {
  const { id } = req.params;
  const cardData = req.body;

  try {
    const card = await updateCard(id, cardData);
    return res.status(200).json({ message: 'Card updated' }, card)
  } catch (error) {
    return res.status(500).json({ message: 'Error updating card' })
  }
}

module.exports = {
  getAllCardHandler,
  getSingleCardHandler,
  createCardHandler,
  updateCardHandler
}