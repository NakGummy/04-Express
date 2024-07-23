const homeController = (req, res) => {
  const data = {
    name: "Huxn",
  };

  res.render("index", data);
};

export { homeController };
