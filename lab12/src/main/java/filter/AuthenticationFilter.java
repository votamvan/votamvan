package filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebFilter("/*")
public class AuthenticationFilter implements Filter {
    String LOGIN_PAGE = "login.jsp";
    String HOME_PAGE = "index.jsp";

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        System.out.println("AuthenticationFilter");
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        HttpSession session = httpRequest.getSession(false);
        boolean isLoggedIn = (session != null && session.getAttribute("user") != null);
        boolean isLoginRequest = httpRequest.getRequestURI().endsWith("/login");
        boolean isLoginPage = httpRequest.getRequestURI().endsWith(LOGIN_PAGE);

        if (isLoggedIn && (isLoginRequest || isLoginPage)) {
            ((HttpServletResponse)response).sendRedirect(LOGIN_PAGE);
        }else if (isLoggedIn || isLoginRequest) {
            chain.doFilter(request, response);
        }else {
            RequestDispatcher dispatcher = request.getRequestDispatcher("login.jsp");
            dispatcher.forward(request, response);
        }
    }

    public void init(FilterConfig filterConfig) throws ServletException {}

    public void destroy() {}
}