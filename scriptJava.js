const namePeople = document.querySelector("#namePeople");
const altura = document.querySelector("#altura");
const peso =  document.querySelector("#peso");
const resultado = document.querySelector("#resultado");

const imc = () => {


    
    if (altura.value !== '' && peso.value !== '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification =' '
    
        if (imc < 18.5) {
          classification =   ' está abaixo do peso'
        } else if (imc < 25) {
          classification = ' está com o peso normal'
        } else if (imc < 30) {
          classification = ' está acima do peso'
        } else if (imc < 35) {
          classification = ' está com obesidade Grau I'
        } else if (imc < 41) {
          classification = ' está com obesidade Grau II'
        } else {
          classification = 'está com obesidade Grau III'
        }
        
        resultado.innerHTML = `IMC: ${namePeople.value}, seu IMC é ${imc}, você está ${classification}`
      } else {
        resultado.innerHTML = 'Preencha os campos'
      }
}