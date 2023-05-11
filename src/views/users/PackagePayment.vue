<template>
    <main>
        <div class="container custom-container">
			<section class="pgTitle animatable bounceIn text-center">Buy your Package</section>
			<section class="pkDetails">
				<div class="row">
					<div class="col-md-4 col-lg-4">
						<div class="pkDetailsVl">
							<h3>Gold</h3>
							<h5>$69</h5>
						</div>
					</div>
					<div class="col-md-4 col-lg-4">
							<ul class="listStyle">
								<li>Aliquet sagittis magna </li>
								<li>Elementum rhoncus. </li>
								<li>Sit in orci condimentum </li>
								<li>Odio augue netus leo. </li>
							</ul>
					</div>
					<div class="col-md-4 col-lg-4">
							<ul class="listStyle">
								<li>Aliquet sagittis magna </li>
								<li>Elementum rhoncus. </li>
								<li>Sit in orci condimentum </li>
							</ul>                  
					</div>
				</div>
			</section>
			
			<section class="pkNotify">
				<div class="row">
					<div class="col-md-12 col-lg-12 text-center">Valid for 30 Days, we will send your reminders 3 days before your package  expires</div>
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
  