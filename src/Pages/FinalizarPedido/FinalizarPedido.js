import React, { useState } from 'react';
import Global from '../../Components/Global';
import { FinalizarPedidoContainer } from './Styled-FinalizarPedido';

import Header from '../../Components/Header/Header';
import { useForm } from 'react-hook-form';

export default function FinalizarPedido() {

  const { register, setValue } = useForm();



  // OPÇÃO PAGAMENTO
  const [formDelivery, setformDelivery] = useState('false');
  const handleChange = () => {
    let radioCheck = document.querySelector('input[name="opcao"]:checked')
    if (radioCheck.value === 'Sim') {
      setformDelivery(!formDelivery)
    } else {
      setformDelivery('false')
    }
  }

  // CONSUMO DA API VIA CEP
  const checkCEP = (e) => {
    const cep = (e).target.value.replace(/\D/g, '');
    console.log(cep)
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json()).then(data => {
        console.log(data);
        setValue('CEP', data.cep);
        setValue('RUA', data.logradouro);
        setValue('CIDADE', data.localidade);
        setValue('BAIRRO', data.bairro);
      });
  }

  // PEGAR O VALOR DO INPUT COMPLEMENTO

  const complementoInput = (e) => {
    const complemento = (e).target.value
    console.log(complemento)
  }

  // PEGAR O VALOR DO INPUT TROCO
  const inputTROCO = (e) => {
    const troco = (e).target.value
    console.log(troco)
  }

  // OPÇÃO PAGAMENTO
  const [formPAGAMENTO, setformPAGAMENTO] = useState('false');
  const handleChangePAGAMENTO = () => {
    let radioCheck = document.querySelector('input[name="opcaoPAGA"]:checked')
    if (radioCheck.value === 'Dinheiro') {
      setformPAGAMENTO(!formPAGAMENTO)
      console.log('Dinheiro')
    } else if (radioCheck.value === 'Pix') {
      console.log('Pix')
      setformPAGAMENTO('false')
    } else {
      console.log('Cartão')
      setformPAGAMENTO('false')
    }
  }

  const [modalAviso, setModalAviso] = useState('false');
  const abrirModal = () => {
    console.log(modalAviso)
    setModalAviso(!modalAviso)
  }


  return (
    <FinalizarPedidoContainer className='flex-class'>
      <Header></Header>
      <div className='mainContainer flex-class'>
        <div className='cardPedido'>
          <h3>Pedido:</h3>
          <hr className='barra'></hr>
          <div className='infoPedido'>
            <span>{Global.newMsg}</span>
          </div>
          <div className='precoPedido'>
            <span>{Global.precoTotal}</span>
          </div>
        </div>
        <form className='formContainer flex-class'>
          {/* Input para inserir o nome */}
          <label for='name'>Digite seu nome:</label>
          <input nome='name' type='text' id='name' placeholder='Digite seu nome aqui...' className='inputText'></input>
          {/* Input para inserir observações */}
          <label for='obsPedido'>Observações do pedido:</label>
          <input nome='obsPedido' type='text' id='obsPedido' placeholder='Ex: sem alface e cebola...' className='inputText'></input>


          {/* Delivery */}
          <div className={`inputRadio ${formDelivery ? '' : 'inputRadioDeliveryOpen'}`}>
            {/* Opcão "Sim" */}
            <input type="radio" name="opcao" value="Sim" id="radio01" className='radio' onChange={handleChange} />
            <label for='opcao'>Delivery</label>
            {/* Opcão "Não" */}
            <input type="radio" name="opcao" value="Nao" id="radio02" className='radio' onChange={handleChange} />
            <label for='opcao'>Retirada</label>

            <div className='enderecoContainer flex-class'>
              <input type='text' {...register('CEP')} placeholder='Digite seu CEP' className='inputTextEnd' onBlur={checkCEP}></input>
              <div className='ruaNum flex-class'>
                <input type='text' {...register('RUA')} placeholder='Digite o nome da sua rua' className='inputTextEnd'></input>
                <input type='number' {...register('NUMERO')} placeholder='N°' className='inputTextEnd3'></input>
              </div>
              <div className='bairroCidade flex-class'>
                <input type='text' {...register('CIDADE')} placeholder='Insira sua cidade' className='inputTextEnd'></input>
                <input type='text' {...register('BAIRRO')} placeholder='Insira seu bairro' className='inputTextEnd'></input>
              </div>
              <input type='text' {...register('COMPLEMENTO')} placeholder='Complemento...' className='inputTextEnd' onBlur={complementoInput}></input>
            </div>
          </div>

          {/* OPC Pagamento */}
          <div className={`opcPagamento ${formPAGAMENTO ? '' : 'opcPagamentoOPEN'}`}>
            {/* Opcão "Sim" */}
            <input type="radio" name="opcaoPAGA" value="Dinheiro" id="radio01" className='radio' onChange={handleChangePAGAMENTO} />
            <label for='opcao'>Dinheiro</label>
            {/* Opcão "Pix" */}
            <input type="radio" name="opcaoPAGA" value="Pix" id="radio02" className='radio' onChange={handleChangePAGAMENTO} />
            <label for='opcao'>Pix</label>
            {/* Opcão "Cartão" */}
            <input type="radio" name="opcaoPAGA" value="Cartão" id="radio03" className='radio' onChange={handleChangePAGAMENTO} />
            <label for='opcao'>Cartão</label>
            <div className='trocoContainer'>
              <label for='troco'>Valor do troco:</label>
              <input type='number' name='troco' placeholder='Insira o valor do troco.' className='inputText' onBlur={inputTROCO}></input>
            </div>
          </div>

          <div className='buttonFinalizar' onClick={abrirModal}>
            <button type='button'><p>Finalizar pedido</p></button>
          </div>
          <div className={modalAviso ? 'avisoModalOn' : 'avisoModalOff'}>
            a
          </div>
        </form>
      </div>

    </FinalizarPedidoContainer >
  )
}
