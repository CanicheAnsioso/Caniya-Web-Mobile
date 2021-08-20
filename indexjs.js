$(function () {
	$('.toggler').on('click', function () {
		$('nav').slideToggle(500);
	});
});

// SELECTORES DE FORMAS DE PAGO
const debitSelector = document.getElementById('debitSelector');
const cashSelector = document.getElementById('cashSelector');
const depositSelector = document.getElementById('depositSelector');

const debitForm = document.querySelectorAll('[id=debitForm]');
const transferMessage = document.getElementById('transferMessage');

//ON HOVER FORMAS DE PAGO
debitSelector.addEventListener('mouseover', () => {
	debitSelector.src = 'SVG-Mobile/debit-selected.svg ';
});
cashSelector.addEventListener('mouseover', () => {
	cashSelector.src = 'SVG-Mobile/cash-pay-selected.svg';
});
depositSelector.addEventListener('mouseover', () => {
	depositSelector.src = 'SVG-Mobile/deposit-transf-selected.svg';
});

debitSelector.addEventListener('mouseleave', () => {
	debitSelector.src = 'SVG-Mobile/credit-debit.svg';
});
cashSelector.addEventListener('mouseleave', () => {
	cashSelector.src = 'SVG-Mobile/cash-pay.svg';
});
depositSelector.addEventListener('mouseleave', () => {
	depositSelector.src = 'SVG-Mobile/deposit-transf.svg';
});
//

//ON CLICK FORMAS DE PAGO
debitSelector.addEventListener('click', () => {
 
	transferMessage.style.display = 'none';
  debitForm.forEach(form => (form.style.display = 'block'));

});

depositSelector.addEventListener('click', () => {
	debitForm.forEach(form => (form.style.display = 'none'));
	transferMessage.style.display = 'block';
});

//
