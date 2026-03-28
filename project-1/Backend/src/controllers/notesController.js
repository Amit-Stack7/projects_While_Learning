export function getAllNotes (req, res) {
  res.status(200).send('you got 10 notes');
};

export function createNotes (req, res)  {
  res.status(201).json({ message: 'post created successfully' });
};

export function updateNotes (req, res) {
  res.status(200).json({ message: 'post updated successfully ' });
};

export function deleteNotes (req, res)  {
  res.status(200).json({ messae: 'your post deleted successfully' });
}