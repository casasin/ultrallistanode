let http = new XMLHttpRequest();

http.open('get', 'https://opensheet.elk.sh/16WY0amTBj3YWn-OV5yyYHJZpBuIDYaZYgj4wapCE_9Y/concerts', true);

http.send();

http.onload = function(){
	if(this.readyState == 4 && this.status == 200){
		let events = JSON.parse(this.responseText);
		let output = "";
		for(let item of events){
			output += `
					<div class="container-grid">
						<div class="col col-left">
							<p class="dia_text">${item.dia_text}</p>
							<p class="dia">${item.dia}</p>
							<p class="mes">${item.mes}</p>
						</div>
						<div class="col col-right">
							<p class="banda">${item.banda}</p>
							<p class="sala">${item.sala}</p>
							<p class="poblacio"> ${item.poblacio}</p>
							<p class="hora">${item.hora} h</p>
						</div>
					</div>
			`;
		}

		document.querySelector(".events").innerHTML = output;
	}
} 