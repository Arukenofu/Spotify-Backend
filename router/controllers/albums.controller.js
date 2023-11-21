const {pool} = require("../../db/db.pool");
module.exports = async (req, res) => {

    const response = await pool.query('SELECT jsonb_agg(album) AS serialized_result\n' +
        'FROM (\n' +
        '    SELECT\n' +
        '        albums.id,\n' +
        '        albums.picture,\n' +
        '        albums.name,\n' +
        '        albums.description,\n' +
        '        (SELECT COUNT(*) FROM "albumMusics" WHERE "albumMusics"."albumId" = albums.id) AS tracksAmount,\n' +
        '        jsonb_agg(\n' +
        '            jsonb_build_object(\n' +
        '                \'id\', musicdata.id,\n' +
        '                \'image\', musicdata.image,\n' +
        '                \'singer\', musicdata.singer,\n' +
        '                \'name\', musicdata.name,\n' +
        '                \'song\', musicdata.song,\n' +
        '                \'auditions\', musicdata.auditions\n' +
        '            )\n' +
        '        ) AS musics\n' +
        '    FROM albums\n' +
        '    LEFT JOIN "albumMusics" ON "albumMusics"."albumId" = albums.id\n' +
        '    LEFT JOIN "musicdata" ON "musicdata"."id" = "albumMusics"."musicId"\n' +
        '    GROUP BY albums.id\n' +
        ') AS album;');

    response.rows[0].serialized_result.sort((a, b) => a.id - b.id);
    let data = response.rows[0].serialized_result;

    await res.json(data);
}