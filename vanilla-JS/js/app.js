/**************************************************************
 *
 *             Project Name  : Exam2 | Javascript Template
 *             Theme Owner   : Route Academy
 *             Theme Coder   : Wael Mohamed
 *             Version       : 1.0.0
 *
 ************************************************************/

// Full TODO  ;)
let addTodoBtn, todoInput, list;

addTodoBtn = document.getElementById('add-btn');
todoInput = document.getElementById('todo-input');
list = document.getElementById('list');

let addTodo = function () {
	if (todoInput.value == '') {
		alert('Please add some text first !!');
	} else {
		let todo = todoInput.value,
			item = document.createElement('div');
		list.classList.remove('hide');
		item.classList.add(
			'item',
			'd-flex',
			'px-3',
			'py-2',
			'flex-wrap',
			'ml-lg-5',
			'ml-0'
		);

		let itemText = document.createElement('div');
		itemText.classList.add('item-text', 'form-control', 'col-12', 'col-lg-8');
		itemText.textContent = todo;

		let editInput = document.createElement('input');
		editInput.classList.add('editInput', 'col-12', 'col-lg-8');
		editInput.classList.add('hide', 'form-control');
		editInput.name = 'editInput';
		editInput.type = 'text';
		editInput.value = todo;

		let editInput_btn = document.createElement('BUTTON');
		editInput_btn.textContent = 'UPDATE';
		editInput_btn.classList.add('action-btn');
		editInput_btn.classList.add(
			'btn',
			'btn-warning',
			'mx-1',
			'my-1',
			'my-lg-0'
		);
		editInput_btn.classList.add('hide');
		editInput_btn.type = 'button';

		let action_btns = document.createElement('DIV');
		action_btns.classList.add(
			'action-btns',
			'col-12',
			'col-lg-4',
			'text-center'
		);

		let edit_btn = document.createElement('BUTTON');
		edit_btn.classList.add('action-button');
		edit_btn.classList.add(
			'edit-btn',
			'btn',
			'btn-info',
			'mx-1',
			'my-1',
			'my-lg-0'
		);
		edit_btn.textContent = 'EDIT';

		edit_btn.addEventListener('click', function () {
			editInput.classList.remove('hide');
			itemText.classList.add('hide');
			edit_btn.classList.add('hide');
			editInput_btn.classList.remove('hide');
			editInput_btn.addEventListener('click', function () {
				itemText.textContent = editInput.value;
				editInput.classList.add('hide');
				itemText.classList.remove('hide');
				editInput_btn.classList.add('hide');
				edit_btn.classList.remove('hide');
			});
		});

		let remove_btn = document.createElement('BUTTON');
		remove_btn.classList.add('action-button');
		remove_btn.classList.add(
			'remove-btn',
			'btn',
			'btn-danger',
			'mx-1',
			'my-1',
			'my-lg-0'
		);
		remove_btn.textContent = 'REMOVE';

		remove_btn.addEventListener('click', function () {
			item.parentNode.removeChild(item);
			if (list.hasChildNodes() == false) {
				list.classList.add('hide');
			}
		});
		action_btns.append(editInput_btn);
		action_btns.append(edit_btn);
		action_btns.append(remove_btn);
		item.append(itemText);
		item.append(editInput);
		item.append(action_btns);
		list.append(item);

		todoInput.value = '';
	}
};

addTodoBtn.addEventListener('click', function () {
	addTodo();
});

document.addEventListener('keypress', function (e) {
	if (e.keyCode == 13) {
		addTodo();
	}
});

// HUSTLIN section
let audioObj = new Audio('./notme.mp3'), // https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
	hustlin = document.getElementById('not__me');

hustlin.addEventListener('mouseover', () => {
	audioObj.loop = true;
	// play sound with a callback function  --- > https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
	audioObj.play(
		hustlin.addEventListener('mouseout', () => {
			audioObj.pause();
		})
	);
});

// countdown section

// Part of The Code from W3school

// Set the date we're counting down to
let countDownDate = new Date('Sep 20, 2021 18:00:00').getTime();

// Update the count down every 1 second
let x = setInterval(function () {
	// Get today's date and time
	let now = new Date().getTime();

	// Find the distance between now and the count down date
	let distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Output the results
	document.getElementById('js__days').innerHTML = days;
	document.getElementById('js__hours').innerHTML = hours;
	document.getElementById('js__mins').innerHTML = minutes;
	document.getElementById('js__secs').innerHTML = seconds;

	// If the count down is over.
	if (distance < 0) {
		clearInterval(x);
		document.getElementById('js__days').innerHTML = 'EXPIRED';
		document.getElementById('js__hours').innerHTML = 'EXPIRED';
		document.getElementById('js__mins').innerHTML = 'EXPIRED';
		document.getElementById('js__secs').innerHTML = 'EXPIRED';
	}

	// adding 's' to day
	days > 1
		? (document.getElementById('js__days__text').innerHTML = 'Days')
		: (document.getElementById('js__days__text').innerHTML = 'Day');

	//to Hour
	hours > 1
		? (document.getElementById('js__hours__text').innerHTML = 'Hours')
		: (document.getElementById('js__hours__text').innerHTML = 'Hour');

	//to Min
	minutes > 1
		? (document.getElementById('js__mins__text').innerHTML = 'Minutes')
		: (document.getElementById('js__mins__text').innerHTML = 'Minute');

	// to Secneds
	seconds > 1
		? (document.getElementById('js__secs__text').innerHTML = 'seconds')
		: (document.getElementById('js__secs__text').innerHTML = 'second');
}, 1000);

// RGB section
let rgbSec = document.getElementById('js--rgb'),
	rColor = document.getElementById('r--section'),
	gColor = document.getElementById('g--section'),
	bColor = document.getElementById('b--section');

rColor.addEventListener('mouseover', () => {
	let svgR = document.getElementById('svg_r');
	svgR.style.fill = 'white';
	rgbSec.style.backgroundColor = 'red';
});

rColor.addEventListener('mouseout', () => {
	let svgR = document.getElementById('svg_r');
	rgbSec.style.backgroundColor = 'white';
	svgR.style.fill = 'red';
});

//G settings
gColor.addEventListener('mouseover', () => {
	let svgG = document.getElementById('svg_g');
	svgG.style.fill = 'white';
	rgbSec.style.backgroundColor = 'green';
});

gColor.addEventListener('mouseout', () => {
	let svgG = document.getElementById('svg_g');
	rgbSec.style.backgroundColor = 'white';
	svgG.style.fill = 'green';
});

//b settings
bColor.addEventListener('mouseover', () => {
	let svgB = document.getElementById('svg_b');
	svgB.style.fill = 'white';
	rgbSec.style.backgroundColor = 'blue';
});

bColor.addEventListener('mouseout', () => {
	let svgB = document.getElementById('svg_b');
	rgbSec.style.backgroundColor = 'white';
	svgB.style.fill = 'blue';
});

// Validation
let userName, userMail, userPhone, userMsg;

userName = document.getElementById('js--username');
userMail = document.getElementById('js--email');
userPhone = document.getElementById('js--phone');
userMsg = document.getElementById('js--msg');

userName.addEventListener('keyup', function () {
	let regex, userNameAlert;
	regex = /^[a-zA-Z][a-zA-Z0-9_]{3,14}$/;
	userNameAlert = document.getElementById('js--username--alert');
	if (regex.test(userName.value)) {
		userName.classList.remove('is-invalid');
		userName.classList.add('is-valid');
		userNameAlert.classList.add('hide');
	} else {
		userName.classList.remove('is-valid');
		userName.classList.add('is-invalid');
		userNameAlert.classList.remove('hide');
	}
	submitBtn();
});

// User Email validation
userMail.addEventListener('keyup', function () {
	let regex, userEmailAlert;
	regex = /^[a-zA-Z0-9_\-\.]{3,25}@[a-z]{4,10}.([a-z]{2,6})$/;
	userEmailAlert = document.getElementById('js--email--alert');
	if (regex.test(userMail.value)) {
		userMail.classList.remove('is-invalid');
		userMail.classList.add('is-valid');
		userEmailAlert.classList.add('hide');
	} else {
		userMail.classList.remove('is-valid');
		userMail.classList.add('is-invalid');
		userEmailAlert.classList.remove('hide');
	}
	submitBtn();
});

// User Phone validation [Egypt Only]

userPhone.addEventListener('keyup', function () {
	let regex, userPhoneAlert;
	regex = /^(002|\+2)?01[0125][0-9]{8}$/;
	userPhoneAlert = document.getElementById('js--phone--alert');
	if (regex.test(userPhone.value)) {
		userPhone.classList.remove('is-invalid');
		userPhone.classList.add('is-valid');
		userPhoneAlert.classList.add('hide');
	} else {
		userPhone.classList.remove('is-valid');
		userPhone.classList.add('is-invalid');
		userPhoneAlert.classList.remove('hide');
	}
	submitBtn();
});

// User Text Area validation
userMsg.addEventListener('keyup', function () {
	let userMsgAlert;
	userMsgAlert = document.getElementById('js--textarea--alert');
	userMsgLength = userMsg.value.length;
	console.log(userMsgLength);
	if (userMsgLength >= 30) {
		userMsg.classList.remove('is-invalid');
		userMsg.classList.add('is-valid');
		userMsgAlert.classList.add('hide');
	} else {
		let resChars = document.getElementById('rest--letters');
		userMsg.classList.remove('is-valid');
		userMsg.classList.add('is-invalid');
		userMsgAlert.classList.remove('hide');
		resChars.textContent = 30 - userMsgLength;
	}
	submitBtn();
});

// Enable submit button

function submitBtn() {
	if (
		userName.classList.contains('is-valid') &&
		userMail.classList.contains('is-valid') &&
		userPhone.classList.contains('is-valid') &&
		userMsg.classList.contains('is-valid')
	) {
		let submit = document.getElementById('submitForm');
		submit.removeAttribute('disabled');
	} else {
		let submit = document.getElementById('submitForm');
		submit.setAttribute('disabled', '');
	}
}

// Scroll plugin
new fullpage('#fullpage', {
	//options
	autoScrolling: true,
	navigation: true,
	anchors: ['ToDO', 'HUSTLIN', 'countDown', 'RGB', 'validation'],
	showActiveTooltip: true,
});

//methods from fullPage Plugin
fullpage_api.setAllowScrolling(true);
