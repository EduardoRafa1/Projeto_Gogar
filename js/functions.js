$(function(){


//-------------Atualização da tela de cadastro com AJAX-------------------//
	avancarFormulario();
	
	var el = $('.registre-se a');
	var conclusao =$('.contador-conclusao')
	var texto = [];
	texto[0] = 'Registre-se';
	texto[1] = 'Continuar';
	texto[2] = 'Continuar';
	texto[3] = 'Continuar';
	texto[4] = 'Finalizar';
	var textP = 0;
	var registre_cont = 1;
	el.html('<p>'+texto[textP]+'</p>');
	conclusao.html('<p style="display: none;">Conclusão do cadastro: '+registre_cont+'/4</p>');

	function avancarFormulario(){
		$('#registre-se').click(function(){
			
				if(registre_cont <=1){
					$('.botao').css('display','block');
				}
				var href = $(this).attr('href');
				textP += 1;
				if(textP >= 4){
					textP = 4;
				}

				el.html('<p>'+texto[textP]+'</p>');

				conclusao.html('<p style="display: block;">Conclusão do cadastro: '+registre_cont+'/4</p>');
					
					$.ajax({
					'url':href + registre_cont + '.html',
					'success':function(data){
					$('#container').html(data);	
				}
			});
				
					registre_cont+=1;	
					return false;
			
			
			})
			return false;
		}
	
//--verifica os valores corretamente pra poder dar continuidade no preenchimento---/
	
	
		$('section#cadastro #registre-se').click(function(){
			var razaoSocial = $('input[name=razaoSocial]').val();
			console.log(razaoSocial);
			if(verificarRazaoSocial(razaoSocial) == false){

				aplicarCampoInvalido($('input[name=razaoSocial]'));

			
				
				
			}else{
				
			}
			
		});


	//------------------Funcoes que verifica os campos preenchidos---------------//

	function verificarRazaoSocial(razaoSocial){
		if(razaoSocial == ''){
			return false;
		}
	}

	//------Edicao dos campos preenchidos incorretamente-----/////

	function aplicarCampoInvalido(el){

		el.css('border','1px solid #000');

	}

})