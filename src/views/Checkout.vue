<template>
    <main>
        <div class="container custom-container">
			<section class="pgTitle checkoutPg animatable bounceIn">
				<div class="row">
					<div class="col-md-6 col-lg-6">Checkout</div>
					<div class="col-md-6 col-lg-6 text-right">
						<div class="backNav"><img src="@/assets/images/arrow.png"> &nbsp; <a href="#">Back</a></div>
					</div>
				</div>
			</section>
			
		    <section class="evList">
				<div class="row">
					<div class="col-md-2 col-lg-2">
					   <div class="featureImg">
							<a href="#"><img src="@/assets/images/event1.jpg"></a>
						</div>
					</div>
					<div class="col-md-4 col-lg-4">
						<div class="evntTitle">
							<h3>Lightfox Night Party</h3>
							<h4>Newark</h4>
							<div class="postMeta">
									<span class="postDate">5/12/2023</span>
									<span class="postDate"><img src="@/assets/images/time.png"> &nbsp;10:30 PM-2:00AM</span>
								</div>
						</div>
					</div>
					<div class="col-md-3 col-lg-3 text-center pdnumber">
						<input type="number" name="age"><span class="rmText"><a href="#">Remove</a></span><br>
						<span class="subText">48 tickets available</span>
					</div>
					<div class="col-md-2 col-lg-2">
							<div class="evntPrice">Subtotal <br> <span>$20</span></div>
					</div>
					
					
				</div>
			</section>
			
			
		    <section class="evList">
				<div class="row">
					<div class="col-md-2 col-lg-2">
					   <div class="featureImg">
							<a href="#"><img src="@/assets/images/event1.jpg"></a>
						</div>
					</div>
					<div class="col-md-4 col-lg-4">
						<div class="evntTitle">
							<h3>Lightfox Night Party</h3>
							<h4>Newark</h4>
							<div class="postMeta">
									<span class="postDate">5/12/2023</span>
									<span class="postDate"><img src="@/assets/images/time.png"> &nbsp;10:30 PM-2:00AM</span>
								</div>
						</div>
					</div>
					<div class="col-md-3 col-lg-3 text-center pdnumber">
						<input type="number" name="age"><span class="rmText"><a href="#">Remove</a></span><br>
						<span class="subText">48 tickets available</span>
					</div>
					<div class="col-md-2 col-lg-2">
							<div class="evntPrice">Subtotal <br> <span>$40</span></div>
					</div>
					
					
				</div>
			</section>
			
			 <section class="totalCost">
				<div class="row">
					<div class="col-md-12 col-lg-12">Total: $60</div>
				</div>
			</section>
			
            <section class="makePayment">
				<div class="row">
					<div class="col-md-5 col-lg-5">
						<h2>Make a Payment</h2>
						
							<form action="#">
							 <ul class="radioSec">
								<li><input type="radio" id="html" name="fav_language" value="HTML">
								<label for="html">Pay with Debit/Credit/ATM Cards</label>
								<div class="check"></div></li>
								<li><input type="radio" id="css" name="fav_language" value="CSS">
								<label for="css">Paypal</label>
								<div class="check"></div></li>
							 </ul>
							</form>
					</div>
					<div class="col-md-7 col-lg-7">
						<div class="cardDetails">
							<form action="#">
								<div class="row" style="margin-bottom: 15px;">
									<div class="col-md-9 col-lg-9">
										<label for="ccnum">Card Number</label>
										<input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
									</div>
									<div class="col-md-3 col-lg-3">
										<label for="cvv">CVV</label>
										<input type="text" id="cvv" name="cvv" placeholder="352">
									</div>
								</div>
								<div class="row">
									<div class="col-md-9 col-lg-9">
										<label for="ccnum">Name on Card</label>
										<input type="text" id="cname" name="cardname" placeholder="John More Doe">
									</div>
									<div class="col-md-3 col-lg-3">
										<label for="cvv">Expiry</label>
										<input type="text" id="expyear" name="expyear" placeholder="2018">
									</div>
								</div>
								<div class="row" style="margin-top: 10px;">
									<label style="margin-bottom: 20px;">
										<input type="checkbox"  name="sameadr"> Save this card for future transactions
									</label>
								</div>
								<div class="row">
								 <input type="submit" value="Make a Payment" class="btn">
								</div>
							</form>
						</div>
					</div>
				</div>

			</section>			
		
	</div>
  
    </main>
  </template>
  