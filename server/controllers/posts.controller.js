const postCTRL = {}

const post = require('../models/posts.model');

postCTRL.getPosts = async (req, res) => {
  const info = await post.find();
  res.json(info);
}

postCTRL.getPost = async (req, res) => {
  const getter = await post.findById(req.params.id);
  res.json(getter);
}

postCTRL.newPost = async (req, res) => {
  const nuevo = new post({
    titulo: req.body.titulo,
    contenido: req.body.contenido,
    imgCabecera: req.body.imgCabecera,
    fecha: req.body.fecha,
    autor: req.body.autor
  });
  await nuevo.save()
    .then(() => res.json({ status: '¡Guardado!' }))
    .catch(() => res.json({ status: 'Error al guardar post' }));
}

postCTRL.updatePost = async (req, res) => {
  let { id } = req.params;
  let info = {
    titulo: req.body.titulo,
    contenido: req.body.contenido,
    imgCabecera: req.body.imgCabecera,
    fecha: req.body.fecha,
    autor: req.body.autor,
  }

  await post.findByIdAndUpdate(id, { $set: info }, { new: true })
    .then(() => res.json({ status: '¡Actualizado!' }))
    .catch(() => res.json({ status: 'Error al actualizar post' }));

}

postCTRL.deletePost = async (req, res) => {
  await post.findByIdAndDelete(req.params.id)
    .then(() => res.json({ status: 'Post eliminado' }))
    .catch(() => res.json({ status: 'Error al eliminar post' }));
}

module.exports = postCTRL;