package servlet;

import java.io.IOException;
import java.util.UUID;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(
        name = "MyServlet",
        urlPatterns = {"/support"}
    )
public class SupportServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String dest = "form.html";
        req.setAttribute("name", "fullName");
        RequestDispatcher requestDispatcher = req.getRequestDispatcher(dest);
        requestDispatcher.forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        
        String dest = "thankyou.jsp";
        req.setAttribute("support_email", "cstech@miu.edu");
        req.setAttribute("support_ticket_id", UUID.randomUUID().toString());
        RequestDispatcher requestDispatcher = req.getRequestDispatcher(dest);
        requestDispatcher.forward(req, resp);
    }
}