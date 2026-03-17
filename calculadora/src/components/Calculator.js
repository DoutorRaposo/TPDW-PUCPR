import { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [valorVisor, setValorVisor] = useState('0');
  const [valorAnterior, setValorAnterior] = useState(null);
  const [operacao, setOperacao] = useState(null);
  const [aguardandoNovoValor, setAguardandoNovoValor] = useState(false);
  const [expressao, setExpressao] = useState('');

  // Adiciona digito ao visor
  const digitarNumero = (digito) => {
    if (aguardandoNovoValor) {
      setValorVisor(digito);
      setAguardandoNovoValor(false);
    } else {
      setValorVisor(valorVisor === '0' ? digito : valorVisor + digito);
    }
  };

  // Adiciona ponto decimal
  const digitarPonto = () => {
    if (aguardandoNovoValor) {
      setValorVisor('0.');
      setAguardandoNovoValor(false);
      return;
    }
    if (!valorVisor.includes('.')) {
      setValorVisor(valorVisor + '.');
    }
  };

  // Formata o resultado limitando casas decimais
  const formatarResultado = (valor) => {
    if (typeof valor === 'string') return valor;
    const texto = String(valor);
    if (texto.includes('.') && texto.split('.')[1].length > 8) {
      return String(parseFloat(valor.toFixed(8)));
    }
    return texto;
  };

  // Executa o calculo entre dois valores
  const calcular = (a, b, op) => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return b !== 0 ? a / b : 'Erro';
      default: return b;
    }
  };

  // Seleciona a operacao (+, -, *, /)
  const selecionarOperacao = (novaOperacao) => {
    const valorAtual = parseFloat(valorVisor);

    if (valorAnterior !== null && !aguardandoNovoValor) {
      const resultado = calcular(valorAnterior, valorAtual, operacao);
      setValorVisor(formatarResultado(resultado));
      setExpressao(expressao + valorVisor + ' ' + novaOperacao + ' ');
      setValorAnterior(resultado);
    } else {
      setExpressao(expressao + valorVisor + ' ' + novaOperacao + ' ');
      setValorAnterior(valorAtual);
    }

    setOperacao(novaOperacao);
    setAguardandoNovoValor(true);
  };

  // Calcula o resultado ao pressionar =
  const calcularResultado = () => {
    if (operacao === null || valorAnterior === null || aguardandoNovoValor) return;

    const valorAtual = parseFloat(valorVisor);
    const resultado = calcular(valorAnterior, valorAtual, operacao);

    setExpressao(expressao + valorVisor + ' =');
    setValorVisor(formatarResultado(resultado));
    setValorAnterior(null);
    setOperacao(null);
    setAguardandoNovoValor(true);
  };

  // Limpa todos os valores
  const limpar = () => {
    setValorVisor('0');
    setValorAnterior(null);
    setOperacao(null);
    setAguardandoNovoValor(false);
    setExpressao('');
  };

  return (
    <div className="calculator">
      <div className="display">
        <span className="display-expression">{expressao}{!aguardandoNovoValor && operacao ? valorVisor : ''}</span>
        <span className="display-value">{valorVisor}</span>
      </div>
      <div className="buttons">
        <button className="btn btn-clear" onClick={limpar}>AC</button>
        <button className="btn btn-operator" onClick={() => selecionarOperacao('/')}>/</button>

        <button className="btn btn-number" onClick={() => digitarNumero('7')}>7</button>
        <button className="btn btn-number" onClick={() => digitarNumero('8')}>8</button>
        <button className="btn btn-number" onClick={() => digitarNumero('9')}>9</button>
        <button className="btn btn-operator" onClick={() => selecionarOperacao('*')}>*</button>

        <button className="btn btn-number" onClick={() => digitarNumero('4')}>4</button>
        <button className="btn btn-number" onClick={() => digitarNumero('5')}>5</button>
        <button className="btn btn-number" onClick={() => digitarNumero('6')}>6</button>
        <button className="btn btn-operator" onClick={() => selecionarOperacao('-')}>-</button>

        <button className="btn btn-number" onClick={() => digitarNumero('1')}>1</button>
        <button className="btn btn-number" onClick={() => digitarNumero('2')}>2</button>
        <button className="btn btn-number" onClick={() => digitarNumero('3')}>3</button>
        <button className="btn btn-operator" onClick={() => selecionarOperacao('+')}>+</button>

        <button className="btn btn-number btn-zero" onClick={() => digitarNumero('0')}>0</button>
        <button className="btn btn-number" onClick={digitarPonto}>.</button>
        <button className="btn btn-operator" onClick={calcularResultado}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
