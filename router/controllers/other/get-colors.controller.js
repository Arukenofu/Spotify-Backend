const getColors = require("get-image-colors")
module.exports = async (req, res) => {
    const {image} = req.body;

    if (!image) {
        return res.status(404).json("Нету изображения")
    }

    const data = await getColors(image)
    res.json(data.map(color => color.hex()))

    // получает ссылку на изображение и возвращает масссив доминирующих цветов в виде hex
}