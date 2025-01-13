import userDao from '../models/persistence/user.dao';

/**
 * Get a user from its ID
 * @param {integer} userId
 * @returns
 */
const getUser = (userId) => userDao.get(userId);

/**
 * Gea all users
 * @returns 
 */
const getAllUsers = () => userDao.getAll();

/**
 * Update a user
 * @param {integer} userId
 * @param {Object} details 
 * @returns 
 */
const updateUser = (userId, details) => userDao.update(userId, details);

/**
 * Add a user
 * @param {Object} details 
 * @returns 
 */
const addUser = (details) => userDao.insert(details);

/**
 * Remove a user
 * @param {integer} userId
 * @returns 
 */
const removeUser = (userId) => userDao.remove(userId);

export default { getUser, getAllUsers, updateUser, addUser, removeUser };
