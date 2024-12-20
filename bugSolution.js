const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate userId before parsing
  if (isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }

  try {
    const parsedUserId = parseInt(userId);
    const user = users.find(user => user.id === parsedUserId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error handling user ID:', error);
    res.status(500).send('Internal server error');
  }
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});