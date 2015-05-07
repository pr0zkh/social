<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
	<jsp:include page="head.jsp"></jsp:include>
	<body>
		<div class="common-btn" id="facebook-login">login via facebook</div>
		<div class="common-btn" id="facebook-logout">logout via facebook</div>
		<img id="facebook-profile-img" src=""></img>
		
		<div class="common-btn" id="vk-login">login via vk</div>
		<div class="common-btn" id="vk-logout">logout via vk</div>
		<img id="vk-profile-img" src=""></img>
		
		<%@include file="jsinclude.jsp" %>
	</body>
</html>