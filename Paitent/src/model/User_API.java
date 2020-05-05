package model;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class User_API
 */
@WebServlet("/User_API")
public class User_API extends HttpServlet {
	private static final long serialVersionUID = 1L;
	Users userObj = new Users();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public User_API() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		String output = userObj.addUserDetails(request.getParameter("User_Name"),
				request.getParameter("U_NIC"),
				request.getParameter("U_Age"),
				request.getParameter("U_Contact_Number"),
				request.getParameter("U_Email"),
				request.getParameter("U_Address"));
		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map<String, String> paras = getParasMap(request);
		String output = userObj.updateUserDetails(paras.get("hidUserIDSave").toString(),
				paras.get("User_Name").toString(),
				paras.get("U_NIC").toString(), 
				paras.get("U_Age").toString(), 
				paras.get("U_Contact_Number").toString(), 
				paras.get("U_Email").toString().replace("%40", "@"), 
				paras.get("U_Address").toString());
		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map<String, String> paras = getParasMap(request);
		 String output = userObj.deleteUsers(paras.get("User_ID").toString());
		response.getWriter().write(output);
	}
	
	private static Map<String, String> getParasMap(HttpServletRequest request) {
		Map<String, String> map = new HashMap<String, String>();
		try {
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
			scanner.close();
			String[] params = queryString.split("&");
			for (String param : params) {
				String[] p = param.split("=");
				map.put(p[0], p[1]);
			}
		} catch (Exception e) {
		}
		return map;
	}

}
