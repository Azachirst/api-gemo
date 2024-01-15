import { createPool } from 'mysql2/promise'

const pool = new createPool({
    host: '154.49.247.204',
    port: '3306',
    user: 'u351071735_Nostrvs',
    password: 'Nostrvs314',
    database: 'u351071735_telemtry',
})

export default pool;