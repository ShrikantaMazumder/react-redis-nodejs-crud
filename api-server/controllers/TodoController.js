"use strict";
import mysql from "mysql2/promise";

// db Config
const sqlHost = process.env.DB_HOST || "";
const sqlUser = process.env.DB_USER || "";
const sqlPassword = process.env.DB_PASSWORD || "";
const sqlDatabase = process.env.DB_DATABASE || "";
const sqlTable = "todos";

const dbConfig = {
  host: sqlHost,
  user: sqlUser,
  password: sqlPassword,
  database: sqlDatabase,
};

export const createTodo = async (req, res) => {
  const { title } = req.body;

  try {
    const insertQuery = `INSERT INTO ${sqlTable} (title) VALUES ('${title}')`;
    const sqlConnection = await mysql.createConnection(dbConfig);
    sqlConnection.execute(insertQuery);

    res.status(201).json({
      code: "success",
      message: "Todo created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: "error",
      message: "Internal server error",
    });
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const getQuery = `SELECT * FROM ${sqlTable}`;
    const sqlConnection = await mysql.createConnection(dbConfig);
    const [data, _] = await sqlConnection.execute(getQuery);

    res.status(200).json({
      code: "success",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: "error",
      message: "Internal server error",
    });
  }
};

export const deleteTodoById = async (req, res) => {
  const id = req.params.id;
  const deleteQuery = `DELETE FROM ${sqlTable} WHERE id = ${Number(id)}`;
  const sqlConnection = await mysql.createConnection(dbConfig);
  const [response] = await sqlConnection.execute(deleteQuery);

  try {
    if (response.affectedRows) {
      res.status(200).json({
        code: "success",
        message: "Todo removed successfully!",
      });
    } else {
      res.status(404).json({
        code: "success",
        message: "Resource not found.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: "error",
      message: "Internal server error",
    });
  }
};

export const updataTodoById = async (req, res) => {
    const id = Number(req.params.id)
    const {title} = req.body

    if (!title) {
        res.status(400).json({
            code: "error",
            message: "Title field is missing"
        })
    }

    try {
        const updateQuery = `UPDATE ${sqlTable} SET title = '${title}' WHERE id = ${id}`;
        const sqlConnection = await mysql.createConnection(dbConfig);
        const [response] = await sqlConnection.execute(updateQuery);

        if (response.affectedRows) {
          res.status(200).json({
            code: "success",
            message: "Todo updated successfully!",
          });
        } else {
          res.status(404).json({
            code: "success",
            message: "Resource not found.",
          });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
          code: "error",
          message: "Internal server error",
        });
    }
}

export const getTodoById = async (req, res) => {
    const id = Number(req.params.id);

    try {
        const getQuery = `SELECT * FROM ${sqlTable} WHERE id = ${id}`;
        const sqlConnection = await mysql.createConnection(dbConfig);
        const [data, _] = (await sqlConnection.execute(getQuery))[0]

        if (data) {
          res.status(200).json({
            code: "success",
            data: data,
          });
        } else {
          res.status(404).json({
            code: "success",
            message: "Resource not found.",
          });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
          code: "error",
          message: "Internal server error",
        });
    }
}
