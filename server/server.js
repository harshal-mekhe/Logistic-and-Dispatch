const express = require("express");
const cors = require("cors");
const getConnection = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", async (req, res) => {

    const { username, password } = req.body;

    try {

        const conn = await getConnection();

        const result = await conn.execute(
            `SELECT ROLE
             FROM USERS
             WHERE USERNAME = :username
             AND PASSWORD = :password
             AND STATUS = 'ACTIVE'`,
            {
                username,
                password
            }
        );

        await conn.close();

        if (result.rows.length > 0) {

            res.json({
                success: true,
                role: result.rows[0][0]
            });

        } else {

            res.json({
                success: false,
                message:
                "Invalid Username or Password"
            });

        }

    }
    catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }

});

app.listen(3000, () => {
    console.log(
        "Server running on port 3000"
    );
});