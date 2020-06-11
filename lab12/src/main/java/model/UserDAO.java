package model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDAO {
    public User checkLogin(String username, String password) throws SQLException{
        String url = "jdbc:sqlite:test.db";
        String sql = "SELECT * FROM users WHERE username = ? and password = ?";
        Connection conn = DriverManager.getConnection(url);
        PreparedStatement stmt = conn.prepareStatement(sql);
        stmt.setString(1, username);
        stmt.setString(2, password);
        ResultSet result = stmt.executeQuery();
        User user = null;
        if (result.next()) {
            user = new User();
            user.setId(result.getInt("id"));
            user.setUsername(username);
            user.setPassword(password);
        };
        stmt.close();
        conn.close();
        return user;
    }
}