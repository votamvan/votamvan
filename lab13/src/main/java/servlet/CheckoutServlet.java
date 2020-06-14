package servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

// internal import
import model.*;

@WebServlet(
    name = "CheckoutServlet",
    urlPatterns = {"/checkout"}
)
public class CheckoutServlet extends HttpServlet{
    private static final long serialVersionUID = 1L;
    String JSP_PAGE = "checkout.jsp";
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
        throws ServletException, IOException{
        req.getRequestDispatcher(JSP_PAGE).forward(req, resp);
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
        throws ServletException, IOException{
        HttpSession session = req.getSession(false);
        if (session != null) {
            System.out.println("destroy cart");
            session.setAttribute("cart", null);
        }
        JSP_PAGE = "thankyou.jsp";
        resp.sendRedirect(JSP_PAGE);
    }
}