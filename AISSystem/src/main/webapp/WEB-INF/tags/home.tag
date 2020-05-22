<%@tag description="User Page template" pageEncoding="UTF-8"%>
<%@taglib prefix="t" tagdir="/WEB-INF/tags" %>

<t:genericpage>
    <jsp:attribute name="header">
      	<div class="header">
			<div class="icon"><i class="fas fa-server"></i></div>
			<div class="title">DASHBOARD</div>
			<input type="text" class="search" name="search" placeholder="Search...">
			
			<div class="icon icon-search"><i class="fas fa-search"></i></div>
			<div class="icon"><i class="far fa-user-circle"></i></div>
		</div>
    </jsp:attribute>
    <jsp:attribute name="menu">
	    <div class="menu_div">
	    	<ul>
	        <li id = "true"><div class="icon-in-list"><i class="fas fa-users"></i></div><a href="${pageContext.request.contextPath}/home">EMPLOYEE</a></li>
	        <li><div class="icon-in-list"><i class="fas fa-user-clock"></i></div><a href="${pageContext.request.contextPath}/worktime">WORD TIME</a></li>
	        <li><div class="icon-in-list"><i class="far fa-chart-bar"></i></div><a href="${pageContext.request.contextPath}/benefit">BENEFIT</a></li>
	        <li><div class="icon-in-list"><i class="far fa-bell"></i></div><a href="${pageContext.request.contextPath}/notification">NOTIFICATION</a></li>
	       	</ul>
	       	<div class="logout"><a href="${pageContext.request.contextPath}/logout">log out</a></div>
		</div>
    </jsp:attribute>
    <jsp:body>
        <jsp:doBody/>
    </jsp:body>
</t:genericpage>