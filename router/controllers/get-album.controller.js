const {pool} = require("../../db/db.pool");
module.exports = async (req, res) => {
    const id = req.params.id;

    const response = await pool.query('SELECT jsonb_agg(album) AS serialized_result\n' +
        'FROM (\n' +
        '    SELECT\n' +
        '        albums.id,\n' +
        '        albums.picture,\n' +
        '        albums.name,\n' +
        '        albums.description,\n' +
        '        (SELECT COUNT(*) FROM "albumMusics" WHERE "albumMusics"."albumId" = albums.id) AS tracksAmount,\n' +
        '        FROM albums\n' +
        '        LEFT JOIN "albumMusics" ON "albumMusics"."albumId" = albums.id\n' +
        '        LEFT JOIN "musicdata" ON "musicdata"."id" = "albumMusics"."musicId"\n' +
        '        GROUP BY albums.id\n' +
        '        having albums.id = $1' +
        ') AS album;', [id]);

}