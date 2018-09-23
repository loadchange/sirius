const Router = require('koa-router');
const jwt = require('koa-jwt');
const router = new Router({ prefix: '/users' });
const {
  find,
  findById,
  create,
  update,
  del,
  login,
  checkOwner,
  listFollowers,
  listFollowing,
  follow,
  unfollow,
  checkUserExist,
  listFollowingTopics,
  followTopic,
  unfollowTopic,
} = require('../controllers/users');
const { checkTopicExist } = require('../controllers/topics');
const { secret } = require('../config.js');

const auth = jwt({ secret });

router.get('/', find);
router.post('/', create);
router.get('/:id', findById);
router.patch('/:id', auth, checkOwner, update);
router.delete('/:id', auth, checkOwner, del);
router.post('/login', login);

router.get('/:id/followers', listFollowers);
router.get('/:id/following', listFollowing);
router.put('/following/:id', auth, checkUserExist, follow);
router.delete('/following/:id', auth, checkUserExist, unfollow);
router.get('/:id/followingTopics', listFollowingTopics);
router.put('/followingTopics/:id', auth, checkTopicExist, followTopic);
router.delete('/followingTopics/:id', auth, checkTopicExist, unfollowTopic);

module.exports = router;
