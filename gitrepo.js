	$.ajax({
		url: "https://api.github.com/users/jbbpatel94/repos",
		jsonp: true,
		method: "GET",
		dataType: "json",
		success: function(res) {
			res.forEach(function(one){
				var p =document.createElement('p');
					//console.log(one.name);
					var t = document.createTextNode('name : ');       
					p.appendChild(t);
					var namespan =document.createElement('span');
					var name = document.createTextNode(one.name);   
					namespan.appendChild(name);
					p.appendChild(namespan);                           
					document.body.appendChild(p);  
				});
		}
	});
