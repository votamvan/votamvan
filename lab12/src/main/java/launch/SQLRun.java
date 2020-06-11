package launch;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
// internal import
import model.UserDAO;
import model.User;


public class SQLRun {
    public static void createUserDatabase(String fileName) throws SQLException{
        String url = "jdbc:sqlite:" + fileName;
        String sql = "CREATE TABLE IF NOT EXISTS users ("
        + "	id integer PRIMARY KEY,"
        + "	username text NOT NULL,"
        + "	password text NOT NULL);";
        String[] dataSql = {
            "INSERT INTO users VALUES (1, 'admin', '123456');",
            "INSERT INTO users VALUES (2, 'smith', '123456');"
        };

        Connection conn = DriverManager.getConnection(url);
        DatabaseMetaData meta = conn.getMetaData();
        System.out.println("The driver name is " + meta.getDriverName());
        System.out.println("A new database has been created.");
        Statement stmt = conn.createStatement();
        stmt.executeUpdate(sql);
        for (int i = 0; i < dataSql.length; i++) {
            System.out.println(dataSql[i]);
            stmt.executeUpdate(dataSql[i]);
        }
        stmt.close();
        conn.close();
    }

    public static void checkLogin() throws SQLException {
        UserDAO userDao = new UserDAO();
        User user = userDao.checkLogin("admin", "123456");
        if (user != null) {
            System.out.println(user);
        }else {
            System.out.println("user not found");
        }
    }
    public static void main(String[] args) {
        try {
            // createUserDatabase("test.db");
            checkLogin();
        }catch(SQLException e) {
            System.out.println(e.getMessage());
        }
    }
}