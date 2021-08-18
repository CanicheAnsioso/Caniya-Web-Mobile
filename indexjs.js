$(function() {
	$('.toggler').on('click', function() {
		$('nav').slideToggle(500);
  });
});


const debitSelector = document.getElementById("debitSelector");
const cashSelector = document.getElementById("cashSelector");
const depositSelector = document.getElementById("depositSelector");

debitSelector.addEventListener("mouseover", () => {
	debitSelector.src = "SVG-Mobile/debit-selected.svg ";
	
  });
  cashSelector.addEventListener("mouseover", () => {
	cashSelector.src = "SVG-Mobile/cash-pay-selected.svg";
	
  });
  depositSelector.addEventListener("mouseover", () => {
	depositSelector.src = "SVG-Mobile/deposit-transf-selected.svg";
	
  });
  
  debitSelector.addEventListener("mouseleave", () => {
	debitSelector.src = "SVG-Mobile/credit-debit.svg";
	
  });
  cashSelector.addEventListener("mouseleave", () => {
	cashSelector.src = "SVG-Mobile/cash-pay.svg";
	
  });
  depositSelector.addEventListener("mouseleave", () => {
	depositSelector.src = "SVG-Mobile/deposit-transf.svg";
	
  });
