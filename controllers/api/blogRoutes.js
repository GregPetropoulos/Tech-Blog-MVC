const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { route } = require('./userRoutes');
// what is line 5??


// GET ALL USERS BLOGS AND COMMENTS
route.get('/', async (req, res) => {
  try {
    console.log('===+++=====');
    const blogData = await Blog.findAll({
      attributes: ['id', 'title', 'date_created', 'content'],
      order: [['date_created', 'ASC']],
      // The comment model will attach a username to comment
      include: [
        {
          model: Comment,
          attributes: [
            'id',
            'comment_text',
            'blog_id',
            'user_id',
            'date_created',
          ],
          include: {
            model: User,
            attributes: ['username', 'twitter', 'github'],
          },
        },
        {
          model: User,
          attributes: ['username', 'github', 'twitter'],
        },
      ],
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET A USER BLOG AND COMMENT
route.get('/:id', async (req, res) => {
  try {
    console.log('===xoxoxox=====');
    const blogData = await Blog.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'title', 'date_created', 'content'],
      include: [
        {
          model: User,
          attributes: ['username', 'twitter', 'github'],
        },
        {
          model: Comment,
          attributes: [
            'id',
            'comment_text',
            'blog_id',
            'user_id',
            'date_created',
          ],
          include: {
            model: User,
            attributes: ['username', 'twitter', 'github'],
          },
        },
      ],
    });
    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE THE BLOG
router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body, {
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE THE BLOG
router.put('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.update(
      req.body,
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if(!blogData){
      res.status(404).json({message: 'No blog found with this id'})
    }
    res.status(200).json(blogData);
    
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE THE BLOG
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
