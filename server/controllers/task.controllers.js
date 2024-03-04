import pool from "../db.js"


export const getTasks = async (req, res) => {
    try {
        const [result] = await pool.query(
          "SELECT * FROM Gemo_secuencias ORDER BY jornada"
        );
        res.json(result);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const getTask = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM Gemo_secuencias WHERE id_secuencia = ?", [
          req.params.id,
        ]);
    
        if (result.length === 0)
          return res.status(404).json({ message: "secuencia no encontrado" });
    
        res.json(result[0]);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const createTask = async (req, res) => {
    try {
        const { dia_semana, estado, inicio, fin, jornada, movil, next, localidad_movil, tipo_movil, base_movil, nro_mes, comentario, cod_estado } = req.body;
        const [result] = await pool.query(
          "INSERT INTO Gemo_secuencias(dia_semana, estado, inicio, fin, jornada, movil, next, localidad_movil, tipo_movil, base_movil, nro_mes, comentario, cod_estado ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [dia_semana, estado, inicio, fin, jornada, movil, next, localidad_movil, tipo_movil, base_movil, nro_mes, comentario, cod_estado ]
        );
        res.json({
          id_secuencia: result.insertId,
          dia_semana,
          estado, 
          inicio,
          fin,
          jornada,
          movil,
          next, 
          localidad_movil, 
          tipo_movil,
          base_movil, 
          nro_mes, 
          comentario,
        });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const updateTask = async (req, res) => {
    try {
        const result = await pool.query("UPDATE Gemo_secuencias SET ? WHERE id_secuencia = ?", [
          req.body,
          req.params.id,
        ]);
        res.json(result);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

export const deleteTask = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM Gemo_secuencias WHERE id_secuencia = ?", [
          req.params.id,
        ]);
    
        if (result.affectedRows === 0)
          return res.status(404).json({ message: "secuencia no encontrado" });
    
        return res.sendStatus(204);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

//moviles

export const getMoviles = async (req, res) => {
  try {
      const [result] = await pool.query(
        "SELECT * FROM Gemo_moviles"
      );
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

export const getMovil = async (req, res) => {
  try {
      const [result] = await pool.query("SELECT * FROM Gemo_moviles WHERE id_movil = ?", [
        req.params.id,
      ]);
  
      if (result.length === 0)
        return res.status(404).json({ message: "movil no encontrado" });
  
      res.json(result[0]);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

export const createMovil = async (req, res) => {
  try {
      const { nro_movil, tipo_movil, localidad_movil, base_movil, secuencia_movil, jornada_movil, franco1, franco2, inicio, fin, estado, ejecutivo, carros, capacidad} = req.body;
      const [result] = await pool.query(
        "INSERT INTO Gemo_moviles(nro_movil, tipo_movil, localidad_movil, base_movil, secuencia_movil, jornada_movil, franco1, franco2, inicio, fin, estado, ejecutivo, carros, capacidad ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [nro_movil, tipo_movil, localidad_movil, base_movil,secuencia_movil, jornada_movil, franco1, franco2, inicio, fin, estado, ejecutivo, carros, capacidad ]
      );
      res.json({
        id_movil: result.insertId,
        nro_movil,
        localidad_movil, 
        base_movil
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

export const updateMovil = async (req, res) => {
  try {
      const result = await pool.query("UPDATE Gemo_moviles SET ? WHERE id_movil = ?", [
        req.body,
        req.params.id,
      ]);
      res.json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}

export const deleteMovil = async (req, res) => {
  try {
      const [result] = await pool.query("DELETE FROM Gemo_moviles WHERE id_movil = ?", [
        req.params.id,
      ]);
  
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "movil no encontrado" });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}


export const deleteMoviles = async (req, res) => {
  try {
      const [result] = await pool.query("TRUNCATE Gemo_moviles");
  
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
}
