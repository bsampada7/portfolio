<?php

$siteKey 	= '6LdGjc8kAAAAACy3ewbRsVGj4xY8-eVan5Atw037';
$secretKey 	= '6LdGjc8kAAAAAHgXNxmVvYQXfikLI_eG_jYegyAP';
// Email configuration
$toEmail = 'services@cnblink.com';
$fromName = 'OneBarrister - Register Form';
$formEmail = 'web-emails@sahisearch.co.uk';

$postData = $valErr = '';
$status = 'error';
$statusMsg = 'Mail couldnot be sent';
// If the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
      // Get the submitted form data
    $postData = $_POST;
	  $name = trim($_POST['name']);
    $email = trim($_POST['email']);
	  $phoneNumber = trim($_POST['phoneNumber']);
	  $streetAddress = trim($_POST['streetAddress']);
	  $city = trim($_POST['city']);
	  $postCode = trim($_POST['postCode']);
	  $message = trim($_POST['message']);

    
    // Validate form fields
	  if(empty($name)){
      $valErr .= 'Please enter your name.<br/>';
    }
    if(empty($email) || (filter_var($email, FILTER_VALIDATE_EMAIL) === false)){
      $valErr .= 'Please enter a valid email.<br/>';
    }
    if(empty($phoneNumber)){
      $valErr .= 'Please enter your phone number.<br/>';
    }
    if(empty($streetAddress)){
      $valErr .= 'Please enter your street address.<br/>';
    }
    if(empty($city)){
      $valErr .= 'Please enter your city.<br/>';
    }
    if(empty($postCode)){
      $valErr .= 'Please enter your postCode.<br/>';
    }
    if(empty($valErr)){

		// Validate reCAPTCHA box
		if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])){

			// Verify the reCAPTCHA response
			$verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secretKey.'&response='.$_POST['g-recaptcha-response']);
			
			// Decode json data
			$responseData = json_decode($verifyResponse);
			
			// If reCAPTCHA response is valid
			if($responseData->success){

				// Send email notification to the site admin
				$emailSubject = 'OneBarrister Barrister Registration';
				$htmlContent = "
          <p>You have received a new enquiry for barrister registration from Jane Doe. The enquiry details are copied below.</p>
					<h2>Registration Details</h2>
					<p><b>Full Name: </b>".$name."</p>
					<p><b>Email Address: </b>".$email."</p>
					<p><b>Phone Number: </b>".$phoneNumber."</p>
					<p><b>Street Address: </b>".$streetAddress."</p>
					<p><b>City: </b>".$city."</p>
					<p><b>Postcode: </b>".$postCode."</p>
					<p><b>Message: </b>".$message."</p>
				";
				
				// Always set content-type when sending HTML email
				$headers = "MIME-Version: 1.0" . "\r\n";
				$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
				// More headers
				$headers .= 'From:'.$fromName.' <'.$formEmail.'>' . "\r\n";
				
				// Send email
				$mailSend = @mail($toEmail, $emailSubject, $htmlContent, $headers);

        if($mailSend){
          $status = 'success';
				  $statusMsg = '<span>Dear, ' . $name . '!</span> Your Registration Request has been successfully sent. Thank you.';
        }

				$postData = '';
			}else{
				$statusMsg = 'Robot verification failed, please try again.';
			}
		}else{
			$statusMsg = 'Please check on the reCAPTCHA box.';
		}
	}else{
		$statusMsg = '<p>Please fill all the mandatory fields:</p>'.trim($valErr, '<br/>');
	}
}