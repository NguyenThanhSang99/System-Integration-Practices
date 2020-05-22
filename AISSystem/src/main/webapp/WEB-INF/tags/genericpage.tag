<%@tag description="Overall Page template" pageEncoding="UTF-8"%>
<%@attribute name="header" fragment="true" %>
<%@attribute name="menu" fragment="true" %>
<html>
	<header>
		<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
		<link rel="stylesheet" href="css/tag.css">
		<script src='https://kit.fontawesome.com/a076d05399.js'></script>
	</header>
  	<body>
	    <div id="pageheader">
	      <jsp:invoke fragment="header"/>
	    </div>
	    <div id="pagemenu">
	      <jsp:invoke fragment="menu"/>
	    </div>
	    <div id="body">
	      <jsp:doBody/>
	    </div>
  	</body>
</html>