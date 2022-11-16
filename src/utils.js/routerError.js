const routeError = async (req, res) => {
res.status(404).json({
    error:-1,
    description:`error en la ruta ${req.url}, chequea que este bien escrita. El metodo ${req.method} no fue implementado`,});
};

module.exports = routeError