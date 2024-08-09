<!DOCTYPE html>
<html lang="en">
	 <head>
			<title>HIKARY AUTOMATED BOT</title>
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<link rel="stylesheet" href="styles.css">
	 </head>
	 <body>
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				 <a class="navbar-brand" href="#">🔵📖📝 </a>
				 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				 <span class="navbar-toggler-icon"></span>
				 </button>
				 <div class="collapse navbar-collapse justify-content-end" id="navbarNav" style="margin-right: 70px;">
						<ul class="navbar-nav">
							 <li class="nav-item active">
									<a class="nav-link" href="/">Home <span class="sr-only">(current)</span>
									</a>
							 </li>
							 <li class="nav-item dropdown">
									<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Features </a>
									<div class="dropdown-menu" aria-labelledby="navbarDropdown">
										 <a class="dropdown-item" href="#">Cookies Extractor</a>
										 <div class="dropdown-divider"></div>
										 <a class="dropdown-item" href="/step_by_step_guide">Step-by-Step Guide</a>
									</div>
							 </li>
							 <li class="nav-item">
									<a class="nav-link" href="online_user">Active</a>
							 </li>
              <a class="nav-link" href="https://www.joshuaapostol.site/">ALL IN ONE MUSIC</a>
						</ul>
				 </div>
			</nav>
			<div class="container">
				 <h1 class="col text-center" style="font-size: 20px; padding: 10px;">AUTOMATED MESSENGER BOT BY HIKARY-DEV</h1>
				 <form id="json-form" onsubmit="submitForm(event)">
						<div class="row">
							 <div class="col-md-12">
									<textarea id="json-data" class="form-control centered-textarea center-placeholder" placeholder=""></textarea>
							 </div>
						</div>
				 </form>
				 <p style=" margin-top: 10px">Greetings! Begin by entering your cookie. Scroll down to carefully review our Terms and Privacy.</p>
			</div>
			<div class="container">
				 <h1 class="col text-center" style="font-size: 20px; padding: 10px;">🤖📖📝🎓
				 </h1>
				 <p style="color: #FFF; margin-top: 10px">
				 <p> 🎉 Exciting and Inspiring News! 🚀 Our latest Automated Bot Website is ready to make your day brighter, more engaging, and effortless! 💔 "Just like your ex, it's willing to answer all your questions, even though in the end, it'll leave you too." 🌟 Don't hesitate to give it a try now and experience the unique joy and satisfaction it brings! 💻  #autobots
#exciting </p>
				 <div class="container" id="listOfCommands">
						<h1 style="font-size: 16px; padding: 10px;">Please choose your commands by tapping on the respective options.</h1>
						<button class="btn btn-primary" onclick="selectAllCommands()">Select all commands</button>
				 </div>
				 <div class="container" id="listOfCommandsEvent">
						<h1 style="font-size: 16px; padding: 10px;">Please choose your event commands by tapping on the respective options.</h1>
						<button class="btn btn-primary" onclick="selectAllEvents()">Select all events</button>
				 </div>
				 <div class="container" id="prefixOfCommands">
						<h1 style="font-size: 16px; padding: 10px;">Please provide a prefix (optional)(choose one) .$,  #,  @,  &,  !,  ?,  +,  /,  *,  -,  %,  ✓, •,  ×,  },  {,  ∆, §, ~, |, π, ÷, =, €</h1>
						<input type="text" id="inputOfPrefix">
				 </div>
				 <div class="container" id="adminOfCommands">
						<h1 style="font-size: 16px; padding: 10px;">Please provide an uid (optional). If you choose not to, entering 'default' will be considered as your input</h1>
						<input type="text" id="inputOfAdmin">
				 </div>
				 <label style="font-size: 14px; display: flex; align-items: center; padding: 22px;">
				 <input type="checkbox" id="agreeCheckbox" style="color: #FFF; margin-right: 10px;"> Checking this box certifies that I have read, understood, and agreed to the Terms and Conditions. </label>
				 <div class="col text-center">
						<button class="btn btn-primary" onclick="State()" disabled id="submitButton" style="width: 100%">Submit</button>
				 </div>
			</div>
			<div id="result" class="container text-center" style="display: none;"></div>
			<div class="footer">
				 <p>Time: <span id="time"></span>
				 </p>
				 <p>Ping: <span id="ping"></span>
				 </p>
			</div>
			<script src="script.js"></script>
			<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js"></script>
	 </body>
</html>
<body>
	</style>
	<div style="font-size: 25px">
	<script type="text/javascript">
	farbbibliothek = new Array();
	farbbibliothek[0] = new Array("#FF0000","#FF1100","#FF2200","#FF3300","#FF4400","#FF5500","#FF6600","#FF7700","#FF8800","#FF9900","#FFaa00","#FFbb00","#FFcc00","#FFdd00","#FFee00","#FFff00","#FFee00","#FFdd00","#FFcc00","#FFbb00","#FFaa00","#FF9900","#FF8800","#FF7700","#FF6600","#FF5500","#FF4400","#FF3300","#FF2200","#FF1100");
	farbbibliothek[1] = new Array("#00FF00","#000000","#00FF00","#00FF00");
	farbbibliothek[2] = new Array("#00FF00","#FF0000","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00","#00FF00");
	farbbibliothek[3] = new Array("#FF0000","#FF4000","#FF8000","#FFC000","#FFFF00","#C0FF00","#80FF00","#40FF00","#00FF00","#00FF40","#00FF80","#00FFC0","#00FFFF","#00C0FF","#0080FF","#0040FF","#0000FF","#4000FF","#8000FF","#C000FF","#FF00FF","#FF00C0","#FF0080","#FF0040");
	farbbibliothek[4] = new Array("#FF0000","#EE0000","#DD0000","#CC0000","#BB0000","#AA0000","#990000","#880000","#770000","#660000","#550000","#440000","#330000","#220000","#110000","#000000","#110000","#220000","#330000","#440000","#550000","#660000","#770000","#880000","#990000","#AA0000","#BB0000","#CC0000","#DD0000","#EE0000");
	farbbibliothek[5] = new Array("#000000","#000000","#000000","#FFFFFF","#FFFFFF","#FFFFFF");
	farbbibliothek[6] = new Array("#0000FF","#FFFF00");
	farben = farbbibliothek[4];
	function farbschrift(){for(var b=0;b<Buchstabe.length;b++){document.all["a"+b].style.color=farben[b]}farbverlauf()}function string2array(b){Buchstabe=new Array();while(farben.length<b.length){farben=farben.concat(farben)}k=0;while(k<=b.length){Buchstabe[k]=b.charAt(k);k++}}function divserzeugen(){for(var b=0;b<Buchstabe.length;b++){document.write("<span id='a"+b+"' class='a"+b+"'>"+Buchstabe[b]+"</span>")}farbschrift()}var a=1;function farbverlauf(){for(var b=0;b<farben.length;b++){farben[b-1]=farben[b]}farben[farben.length-1]=farben[-1];setTimeout("farbschrift()",30)}var farbsatz=1;function farbtauscher(){farben=farbbibliothek[farbsatz];while(farben.length<text.length){farben=farben.concat(farben)}farbsatz=Math.floor(Math.random()*(farbbibliothek.length-0.0001))}setInterval("farbtauscher()",5000);

	text=
	"Join Us\n𝗖𝗵𝗮𝘁𝗕𝗼𝘁 𝗖𝗼𝗺𝗺𝘂𝗻𝗶𝘁𝘆 𝗟𝘁𝗱."
	string2array(text);
	divserzeugen();
	//document.write(text);
	</script></div>
	<p id='name'>
	<script></script>


<video src="https://i.imgur.com/QgcWRIe.mp4" controls></video>
<body>
		<div class="wrapper">
				<div class="display">
						<div id="time"></div>
				</div>
				<span></span>
				<span></span>
		</div>
		<script src="./index.js"></script>
