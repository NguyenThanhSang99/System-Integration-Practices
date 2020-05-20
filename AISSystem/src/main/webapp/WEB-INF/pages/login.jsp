<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Login Page</title>


<!-- Owl-Carousel -->
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
	integrity="sha256-UhQQ4fxEeABh4JrcmAJ1+16id/1dnlOEVCFOxDef9Lw="
	crossorigin="anonymous" />
<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
	integrity="sha256-kksNxjDRxd/5+jGurZUJd1sdR2v+ClrCl3svESBaJqw="
	crossorigin="anonymous" />

<!-- Font Awesome CDN -->
<script src="https://kit.fontawesome.com/23412c6a8d.js"></script>

<!-- Custom Style-->
<link rel="stylesheet" href="css/login.css">
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
	integrity="sha256-pTxD+DSzIwmwhOqTFN+DB+nHjO4iAsbgfyFq5K5bcE0="
	crossorigin="anonymous"></script>
<script src="js/login.js" type="text/javascript"></script>
</body>
</head>

<body>
	<c:if test="${param.error == 'true' }">
		<div id="error">

			Login Failed!!!<br /> Reason :
			${sessionScope["SPRING_SECURITY_LAST_EXCEPTION"].message}

		</div>
	</c:if>

	<div class="container">
		<div class="panel">
			<div class="row">
				<div class="col liquid">
					<h4>
						<i class="fas fa-drafting-compass"></i>T-DevTeam
					</h4>

					<!-- Owl-Carousel -->

					<div class="owl-carousel owl-theme">
						<img src="assets/undraw_double_person.svg" alt=""
							class="login_img"> <img
							src="assets/undraw_power_person.svg" alt="" class="login_img">
						<img src="assets/undraw_personal_data_29co.svg" alt=""
							class="login_img">
					</div>

					<!-- /Owl-Carousel -->

					<div class="follow">
						Follow us <i class="fab fa-facebook-f"></i> <i
							class="fab fa-twitter"></i>
					</div>
				</div>
				<div class="col login">
					<form name='f'
						action="${pageContext.request.contextPath}/loginAction"
						method='POST'>
						<div class="titles">
							<h6>Welcome to ACME Integration System</h6>
							<h3>Ready to Login</h3>
						</div>
						<div class="form-group">
							<input type="text" name="username" placeholder="Username"
								class="form-input" required="required" autofocus="autofocus">
							<div class="input-icon">
								<i class="fas fa-user"></i>
							</div>
						</div>
						<div class="form-group">
							<input type="password" name="password" placeholder="Password"
								class="form-input" required="required" autofocus="autofocus">
							<div class="input-icon">
								<i class="fas fa-user-lock"></i>
							</div>
						</div>
						<div class="button-login">
							<button type="submit" class="btn btn-login">Login</button>
						</div>
					</form>

				</div>
			</div>
		</div>
	</div>
</html>