package Util;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnect {
	
	public Connection connect()
	 {
	 Connection con = null;
	
	 try
	 {
	 Class.forName("com.mysql.cj.jdbc.Driver");
   //Connection new
	 con = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/paf_project?useTimezone=true&serverTimezone=UTC", "root", "");
	 }
	 catch (Exception e)
	 {
		 System.out.println("errrrror - "+e);
		 e.printStackTrace();}
	 return con;
	 } 
}

