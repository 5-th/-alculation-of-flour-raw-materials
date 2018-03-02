	
	/*
	Массивы объектов ориентировончого содержания влаги в сырье
												  			*/
	let tabArr1 = [
		{
			id: 0,
			name: 'Мука ржаная обдирная', 
			weight: 20,
			wet: 14.5,
			opara: 0
			
		},
		{
			id: 1,
			name: 'Мука пшеничная высший сорт', 
			weight: 80,
			wet: 14.5,
			opara: 25
		},
		{
			id: 2,
			name: 'Мука пшеничная I сорт', 
			weight: 0,
			wet: 14.5,
			opara: 0
		},
		{
			id: 3,
			name: 'Мука пшеничная II сорт', 
			weight: 0,
			wet: 14.5,
			opara: 0
		},
	];

	
	let tabArr2 = [
		{ id: 0, name: 'Сахарный песок', weight: 3, wet: 0.15, opara: 0},	
		{ id: 1, name: 'Сахарная пудра', weight: 0, wet: 0.15, opara: 0},	
		{ id: 2, name: 'Патока', weight: 0, wet: 22, opara: 0},	
		{ id: 3, name: 'Глюкоза', weight: 0, wet: 9, opara: 0},			
		{ id: 4, name: 'Мед', weight: 0, wet: 22, opara: 0},			
		{ id: 5, name: 'Припасы фруктово-ягодные', weight: 0, wet: 40, opara: 0},			
		{ id: 6, name: 'Подварки фруктово-ягодные', weight: 0, wet: 31, opara: 0},			
		{ id: 7, name: 'Варенье, фрукты из варенья', weight: 0, wet: 28, opara: 0},			
		{ id: 8, name: 'Джем', weight: 0, wet: 28, opara: 0},			
		{ id: 9, name: 'Повидло', weight: 0, wet: 31, opara: 0},			
		{ id: 10, name: 'Изюм', weight: 0, wet: 20, opara: 0},			
		{ id: 11, name: 'Масло сливочное', weight: 0, wet: 16, opara: 0},			
		{ id: 12, name: 'Масло топленое', weight: 0, wet: 1, opara: 0},			
		{ id: 13, name: 'Маргарин', weight: 0, wet: 16, opara: 0},	
		{ id: 14, name: 'Твердый жир', weight: 0, wet: 0.3, opara: 0},	
		{ id: 15, name: 'Фритюрный жир (гидрожир)', weight: 0, wet: 0.3, opara: 0},	
		{ id: 16, name: 'Кондитерский жир', weight: 0, wet: 0.3, opara: 0},	
		{ id: 17, name: 'Масло подсолнечное рафин.', weight: 0, wet: 0.1, opara: 0},	
		{ id: 18, name: 'Масло подсолнечное нерафин.', weight: 0, wet: 0.1, opara: 0},	
		{ id: 19, name: 'Какао масло', weight: 0, wet: 0, opara: 0},
		{ id: 20, name: 'Какао тертое', weight: 0, wet: 2.6, opara: 0},	
		{ id: 21, name: 'Какао порошок', weight: 0, wet: 5, opara: 0},	
		{ id: 22, name: 'Молоко цельное', ver: [{id: 0, name:'свежее', weight: 0, wet:88, opara: 0}, {id: 1, name:'сгущеное с сахаром', weight: 0, wet:26, opara: 0}, {id: 2, name:'сухое', weight: 0, wet:5, opara: 0},]},	
		{ id: 23, name: 'Молоко обезжиренное', ver: [{id: 0, name:'сгущенное с сахаром', weight: 0, wet:30, opara: 0}, {id: 1, name:'сухое', weight: 0, wet:5, opara: 0},]},
		{ id: 24, name: 'Сметана', weight: 0, wet: 63, opara: 0},	
		{ id: 25, name: 'Сливки сухие', weight: 0, wet: 6, opara: 0},	
		{ id: 26, name: 'Сливки', ver: [{id: 0, name:'20%-ной жирности', weight: 0, wet:70, opara: 0}, {id: 1, name:'30%-ной жирности', weight: 0, wet:63, opara: 0}, {id: 2, name:'35%-ной жирности', weight: 0, wet:52.7, opara: 0}, {id: 3, name:'сгущенные с сахаром', weight: 0, wet:26, opara: 0}, {id: 4, name:'сухие с сахаром', weight: 0, wet:6, opara: 0},]},	
		{ id: 27, name: 'Мак', weight: 0, wet: 4.5, opara: 0},	
		{ id: 28, name: 'Сухари панировочные', weight: 0, wet: 4, opara: 0},					   
		{ id: 29, name: 'Мука соевая дезодорированная', ver: [{id: 0, name:'необезжиренная', weight: 0, wet:8, opara: 0}, {id: 1, name:'полуобезжиренная', weight: 0, wet:8, opara: 0}, {id: 2, name:'обезжиренная', weight: 0, wet:8, opara: 0},] },	
		{ id: 30, name: 'Крахмал', ver: [{id: 0, name:'картофельный', weight: 0, wet:20, opara: 0}, {id: 1, name:'маисовый', weight: 0, wet:13, opara: 0},] },
		{ id: 31, name: 'Вафли листовые', weight: 0, wet: 4.5, opara: 0},
		{ id: 32, name: 'Яйца', ver: [{id: 0, name:'куриные', weight: 0, wet:73, opara: 0}, {id: 1, name:'маланж мороженый', weight: 0, wet:73, opara: 0},] },
		{ id: 33, name: 'Яичный белок', weight: 0, wet: 88, opara: 0},
		{ id: 34, name: 'Яичный белок сухой', weight: 0, wet: 7, opara: 0},
		{ id: 35, name: 'Яичный желток', ver: [{id: 0, name:'мороженый', weight: 0, wet:54, opara: 1}, {id: 1, name:'сухой', weight: 0, wet:6, opara: 0},] },
		{ id: 36, name: 'Яичный порошок', weight: 0, wet: 6, opara: 0},
		{ id: 37, name: 'Фосфатидные концентраты', weight: 0, wet: 1.5, opara: 0},
		{ id: 38, name: 'Соль пищевая', weight: 2, wet: 0, opara: 0},
		{ id: 39, name: 'Кислота аскорбиновая', weight: 0, wet: 2, opara: 0},
		{ id: 40, name: 'Экстракт солодовый', weight: 0, wet: 25, opara: 0},
		{ id: 41, name: 'Дрожжи сухие', weight: 0, wet: 7.5, opara: 0},
		{ id: 42, name: 'Дрожжи прессованные', weight: 5, wet: 70, opara: 100},
		{ id: 43, name: 'Эссенция', weight: 0, wet: 100, opara: 0},				   
		{ id: 44, name: 'Мятное масло', weight: 0, wet: 100, opara: 0},
		{ id: 45, name: 'Ванилин, этилванилин, арованилон', weight: 0, wet: 100, opara: 0},
		{ id: 46, name: 'Сухие духи', ver: [{id: 0, name:'для конфет', weight: 0, wet:12, opara: 0}, {id: 1, name:'для мучных изделий', weight: 0, wet:0, opara: 0},] },
		{ id: 47, name: 'Корица', weight: 0, wet: 0, opara: 0},
		{ id: 48, name: 'Тмин', weight: 0, wet: 11, opara: 0},
		{ id: 49, name: 'Двууглекислый аммоний', weight: 0, wet: 100, opara: 0},
		{ id: 50, name: 'Двууглекислая сода', weight: 0, wet: 75, opara: 0},
		{ id: 51, name: 'Солод, отруби', weight: 0, wet: 10, opara: 0},
	];					    
    
	/*
	функция вывода исходных таблиц 1 и 2 на экран 
							   				   */
    function getRawTables() { 
		$('#tab1').append('<tr> <th> Наименование </th> <th> Кол-во, кг. </th> <th> Влажность,% </th> <th class="opara-td"> Доля в опару,% <th> </tr>');
    	$.each(tabArr1, function(){
			$('#tab1').append('<tr> <td width="250px">'+this.name+'</td> <td width="80px" onClick=setIngredientParam() id="1-'+this.id+'">'+this.weight+'</td> <td width="80px" align="center">'+this.wet+'</td> <td onClick=setIngredientParam() class="opara-td" align="center" id="1-'+this.id+'-'+this.id+'">'+this.opara+'</td> </tr>');
    	});

      	$('#tab2').append('<tr> <th> Наименование </th> <th> Кол-во, кг. </th> <th> Влажность,% </th> <th class="opara-td"> Доля в опару,% <th> </tr>');
        $.each(tabArr2, function(){
        	if ('wet' in this) {
        		$('#tab2').append('<tr> <td width="250px">'+this.name+'</td> <td width="80px" onClick=setIngredientParam() id="2-'+this.id+'">'+this.weight+'</td> <td width="80px" align="center">'+this.wet+'</td> <td onClick=setIngredientParam() class="opara-td" align="center" id="2-'+this.id+'-'+this.id+'">'+this.opara+'</td> </tr>');
        	} else {
        		$('#tab2').append('<tr> <td width="250px">'+this.name+'</td> <td width="80px"> </td> <td width="80px" align="center"></td> <td align="center"></td> </tr>');
        		let parentName = this.id;
        		$.each(this.ver, function(){
       				$('#tab2').append('<tr> <td width="250px"> - '+this.name+'</td> <td width="80px" onClick=setIngredientParam() id="2s-'+parentName + '-' + this.id+'">'+this.weight+'</td> <td width="80px" align="center">'+this.wet+'</td> <td class="opara-td" onClick=setIngredientParam() align="center" id="2s-'+parentName+'-'+parentName+'-'+this.id+'">'+this.opara+'</td> </tr>');	 
   				});
        	};
    	});
    };

	/*
	функция изменния ячейки таблицы (вызов инпута)
											    */
	function setIngredientParam() {
		if (!$("input").is("#changeParamInput")) {
			$('#' + event.srcElement.id).html('<input type="text" id="changeParamInput" value="'+$('#' + event.srcElement.id).html()+'" > <p class="button-fix" id="change"> <span id="change"> change </span> </p>');
			$("#changeParamInput").focus().prop('selectionStart', $('#changeParamInput').val().length).on('keypress', setIngredientParam);
		}
		if (event.srcElement.id == 'change' || event.keyCode == 13) {
     		fixNewWeight();
     	}
	}

	/*
	фиксация изменения (руками) данных в таблице и сохранение изменения в массив данных
														  	         	     	     */
	function fixNewWeight() {
		let id = $("#changeParamInput").parent().prop('id').split('-');
		if (id.length == 2) {
			if (id[0] == 1) {
				tabArr1[id[1]].weight = $('#changeParamInput').val();
				for (var i = 0, sum = 0; i < tabArr1.length; sum += Number(tabArr1[i].weight), i++);
					if (sum > 100) {
						tabArr1[id[1]].weight -= (sum - 100);
						$('#changeParamInput').val(tabArr1[id[1]].weight);
						$('.alert').hide();
					} else if (sum < 100) {
						$('.alert').show();
					} else $('.alert').hide();
			} else {
				tabArr2[id[1]].weight = $('#changeParamInput').val();
			}
		} else if (id.length == 3) {
			if (id[0] == 1) {
				$('#changeParamInput').val( dataValidity( $('#changeParamInput').val() ) );
				tabArr1[id[2]].opara = $('#changeParamInput').val();
			} else if (id[0] == 2) {
				$('#changeParamInput').val( dataValidity( $('#changeParamInput').val() ) );
				tabArr2[id[2]].opara = $('#changeParamInput').val();
			} else {
				tabArr2[id[1]].ver[id[2]].weight = $('#changeParamInput').val();
			}
		} else {
				$('#changeParamInput').val( dataValidity( $('#changeParamInput').val() ) );
				tabArr2[id[2]].ver[id[3]].opara = $('#changeParamInput').val();
		}
		$("#changeParamInput").parent().html($('#changeParamInput').val());
	}	


	/*
	получение массива рабочей рецептуры для обоих способов 
													    */

    function getWorkRecipeArr() {
    	$('div[name="output"]').show();
    	let workRecipeArr1 = [], workRecipeArr2_1 = [], workRecipeArr2_2 = []; //массивы выходных данных для каждого способа
    	$.each(tabArr1, function(){
    		if (this.weight != 0) {
    			workRecipeArr1.push(copy(this));
    		}
    	});
    	$.each(tabArr2, function(){
    		if ('wet' in this) {
    			if (this.weight != 0) workRecipeArr1.push(copy(this));
    		} else {
    			let parentName = this.name;
    			$.each(this.ver, function(){
    				if (this.weight != 0) {
    					workRecipeArr1.push(copy(this));
    						workRecipeArr1[workRecipeArr1.length-1].name = parentName + ', ' + workRecipeArr1[workRecipeArr1.length-1].name;
    				}
    			})
    		}
    	});

    	$.each(workRecipeArr1, function(){
    		delete this.id;
    		this.weight = (Number(this.weight)*Number($('#duffWeight').val())/100).toFixed(2); //расчет веса в 1-й рецептуре
    	});
   		
   		if ($('#method1').prop("checked")) {
   			getWorkRecipeTabl1(workRecipeArr1);
   		} else {
   			$.each(workRecipeArr1, function(){
   				if (this.name != "Дрожжи прессованные") workRecipeArr2_2.push(copy(this));
   					workRecipeArr2_2[workRecipeArr2_2.length-1].weight = (Number(workRecipeArr2_2[workRecipeArr2_2.length-1].weight)*(100-Number(workRecipeArr2_2[workRecipeArr2_2.length-1].opara))/100).toFixed(2); //расчет веса во 2-й рецептуре
   				if (this.opara > 0) {
   					workRecipeArr2_1.push(copy(this));
   					workRecipeArr2_1[workRecipeArr2_1.length-1].weight = (Number(workRecipeArr2_1[workRecipeArr2_1.length-1].weight)*Number(workRecipeArr2_1[workRecipeArr2_1.length-1].opara)/100).toFixed(2); //расчет веса в 2-й рецептуре
   				}
   			})
   			getWorkRecipeTabl2(workRecipeArr2_1, workRecipeArr2_2);
   		}
    }


	/*
	вспомогательная функция к предыдущей функции - для копирования объетов массивов tabArr1 и tabArr2
							   											    					   */
    function copy(obj) {
    	return Object.assign({}, obj);
    }


	/*
	вывод массива 1-й рабочей рецептуры на экран 
											  */
    function getWorkRecipeTabl1(workRecipeArr1) {
    	let arrBB = getBB(workRecipeArr1);
    	$('#tab3').html('');
    	$('#tab3').append('<tr> <th> Наименование </th> <th> Кол-во, кг. </th> <th> Влажность,% </th> </tr>');
    	$.each(workRecipeArr1, function(){
    		$('#tab3').append('<tr> <td width="350px">'+this.name+'</td> <td width="95px">'+this.weight+'</td> <td width="80px" align="center">'+this.wet+'</td> </tr>');
    	});
    	$('#tab3').append('<tr> <td> <b> Количество воды </b> </td> <td> ' + arrBB[0].toFixed(1) + ' кг. </td> <td> </td> </tr>');
    	$('#tab3').append('<tr> <td> <b> Выход теста </b> </td> <td> ' + arrBB[1].toFixed(1) + ' кг. </td> <td> </td> </tr>');
    	
    }

    /*
	вывод массива 2-й рабочей рецептуры на экран 
											  */
    function getWorkRecipeTabl2(workRecipeArr2_1, workRecipeArr2_2) {
    	let arrBBY = getBBY(workRecipeArr2_1, workRecipeArr2_2);
    	$('#tab3').html('');
    	$('#tab3').append('<tr> <th> Наименование </th> <th> Кол-во, кг. </th> <th> Влажность,% </th> <th> Доля в опару,% </th> </tr>');
    	$('#tab3').append('<tr> <td> РЕЦЕПТУРА ОПАРЫ </td> <td></td> <td></td> <td></td> </tr>');
    	$.each(workRecipeArr2_1, function(){
    		$('#tab3').append('<tr> <td width="350px">'+this.name+'</td> <td width="100px">'+this.weight+'</td> <td width="80px" align="center">'+this.wet+'</td> <td width="110px" align="center">'+this.opara+'</td> </tr>');
    	});
    	$('#tab3').append('<tr> <td> <b> Вода в опару </b> </td> <td> ' + arrBBY[1].toFixed(1) + ' кг. </td> <td> </td> <td> </td> </tr>');
    	$('#tab3').append('<tr> <td> РЕЦЕПТУРА ТЕСТА </td> <td></td> <td></td> <td></td> </tr>');
    	$('#tab3').append('<tr> <td> Опара </td> <td> '+ arrBBY[0].toFixed(1) +'  кг. </td> <td></td> <td></td> </tr>');
    	$.each(workRecipeArr2_2, function(){
    		$('#tab3').append('<tr> <td width="350px">'+this.name+'</td> <td width="100px">'+this.weight+'</td> <td width="80px" align="center">'+this.wet+'</td> <td width="110px" align="center">'+this.opara+'</td> </tr>');
    	});
 		$('#tab3').append('<tr> <td> <b> Вода в тесто </b> </td> <td> '+ arrBBY[2].toFixed(1) + ' кг. </td> <td> </td> <td> </td> </tr>');
 		$('#tab3').append('<tr> <td> <b> Выход теста </b> </td> <td> ' + arrBBY[3].toFixed(1) + ' кг. </td> <td> </td> <td> </td> </tr>');
    }


 	/*
	получение значений Bb, Bt для первого способа - для функции "вывод массива 1-й рабочей рецептуры на экран"
								 			   															    */

    function getBB(workRecipeArr1) {
    	var a = 0, b = 0;
    	$.each(workRecipeArr1, function(){
    		a += Number(this.weight)*(100-Number(this.wet))/100;
    			b += Number(this.weight);
    	});
    	let Bt = a * ( 100 / ( 100 - Number( $('#duffWet').val() ) ) ), // расчет выхода теста
    		Bb = Bt-b; // расчет воды в тесте
    	return [Bb, Bt];
    }

	/*
	получение значений Yop, Bbop, Bbt, Bt для второго способа - для функции "вывод массива 2-й рабочей рецептуры на экран"
								 			   			   														        */
    function getBBY(workRecipeArr2_1, workRecipeArr2_2) {
    	var a = 0, b = 0, c = 0, d = 0;
    	$.each(workRecipeArr2_1, function(){
    		a += Number(this.weight)*(100-Number(this.wet))/100;
    			b += Number(this.weight);
	   	});

		let Yop = a * ( 100/(100 - Number( $('#oparaWet').val() ) ) ), // расчет веса опары
			Bbop = Yop - b; // расчет воды в опару    	
    	
    	$.each(workRecipeArr2_2, function(){
    		c += Number(this.weight)*(100-Number(this.wet))/100;
    			d += Number(this.weight);
    	});
     	
     	c +=  Yop * ( 100 - Number( $('#oparaWet').val() ) ) / 100;
     	d += Yop;
    	
    	let Bt = c  * ( 100 / ( 100 - Number( $('#duffWet').val() ) ) ), // расчет выхода теста
    		Bbt = c  * ( 100 / ( 100 - Number( $('#duffWet').val() ) ) ) - d; // расчет воды в тесте
    	
    	return [Yop, Bbop, Bbt, Bt];
    }

    // НИЖЕ ДВЕ ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ПО ВСЕМУ ПРИЛОЖЕНИЮ //

	/*
	проверка валидности исходных данных
							   		 */
    function dataValidity(param) { 
		if (!isNaN(param)) { //доля в опару 0-100%
			if (param < 0) param = 0;
			if (param > 100) param = 100;
			return param;
		}
		if (param.target.id == 'duffWet') { //влажность теста 30-70%
			if ($("#duffWet").val() < 30) $("#duffWet").val(30);
			if ($("#duffWet").val() > 70) $("#duffWet").val(70);
			$("#duffWet").blur();
		}
		if (param.target.id == 'duffWeight') { //вес теста > 0 кг
			if ($("#duffWeight").val() < 0) $("#duffWeight").val(0);
			$("#duffWeight").blur();
			
		}
		if (param.target.id == 'oparaWet') {
			if ($("#oparaWet").val() < 0) $("#oparaWet").val(0);
			if ($("#oparaWet").val() > 100) $("#oparaWet").val(100);
			$("#oparaWet").blur();
		}
    }

	/*
	прячем-показываем поля "опары" при смене метода
						 					 	 */

    function setMethod() {
    	if (event.target.id == 'method1') {
    		$('#oparaWetVisibility').hide();
    		$('.opara-td').hide();
    	}
    	else 
    	{
    		$('#oparaWetVisibility').show();
    		$('.opara-td').show();
    	}
    }

	// ЗАГРУЗОЧНАЯ ИНИЦИАЛИЗАЦИЯ СВОЙСТВ И СЛУШАТЕЛЕЙ //

    function init() {
      	getRawTables();
      	$('#oparaWetVisibility').hide();
      	$('.opara-td').hide();
      	$('.alert').hide();
      	$('div[name="output"]').hide();
      	$('.radio').on("change", setMethod);
      	$("#duffWet").on("change", dataValidity);
      	$("#duffWeight").on("change", dataValidity);
      	$("#oparaWet").on("change", dataValidity);
      	$("#getResult").on("click", getWorkRecipeArr);
    }

    window.addEventListener('DOMContentLoaded', init); // вызов функции init по загрузке экрана
    

  
