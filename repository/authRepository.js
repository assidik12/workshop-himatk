const db = require("../utils/koneksi");

/* 📝 METHOD/FUNGSI UNTUK MENDAFTARKAN USER BARU 📝 */

exports.registerRepository = (email, password) => {
  const query = "INSERT INTO user (email, password) VALUES (?, ?)";
  return db.query(query, [email, password]);
};

/* 📝 METHOD/FUNGSI UNTUK MELIHAT USER BERDASARKAN EMAIL DAN PASSWORD 📝 */
exports.loginRepository = async (email, password) => {};
