# Caderno virtual - Lógica da Programação e Algoritmos
Boas vindas! Este é meu caderno virtual. Aqui eu documento os conceitos aprendidos e atiuvidades dessa unidade curricular. 


## Conteúdo Técnico

### Variáveis
    
- var (muda tipo e valor)
- let (muda apenas valor)
- const (não pode mudar)
- num
- ```js
      let a = 5       // int: número inteiro
      let b = 6.7    // float: número decimal
      console.log(a + b)    // retorna 11.7
    ```
  
- string (texto)
- ```js
      let nome = "João"
      let idade = 15
      console.log(nome.length)    // certos métodos de arrays podem ser usados
      console.log(`oi! Sou ${nome} e tenho ` + idade + "anos")    // como inserir váriáveis em strings; retorna "oi! Sou João e tenho 15 anos"
  ```
  
- bool (booleano, true ou false)
- ```js
  let maiorDeIdade = false
  let idade = 21

  if(idade >= 18){
        maiorDeIdade = true
  }
    if(maiorDeIdade == true){
        console.log("Você pode dirigir")
  }
    else{
        console.log("Você não pode dirigir")
  }
  // checa se o user pode dirigir baseado na idade
     
  ```
  
- array ("armazem" de vários valores)
- ```js
  let array = ["maçã", "uva", "banana", "morango"]
    for(i = 0; i < array.length; i++){
        console.log(array[i])
  }
  // retorna cada elemento do array separadamente
  ```

### Condicionais e loops

- if (se(condição) então{efeito})
- else (se não então {efeito})
- else if (senão e caso(condição) então {efeito})
- switch
    ```js
    switch("banana"):
      case "banana":
          return "banana"
          break;
      case "uva":
          return "uva"
          break;
      default:
          return "sem fruta"
    ```
  
- for loop
    ```js
    for(i = 0; i <10; 1++){
        console.log(i)
    }
    ```
   
- while loop
    ```js
    i = 0
    while(i <10){
        console.log(i)
    i++
    }
    ```

### Manipulação de arrays

- array.length
    - n° de elementos do array
  
- array.push()
    - adivionar elemento no fim do array

- array.indexOf()
    - buscar a posição de algo no array
  
- array.splice()
    - dividir o array em 2
  
- array.slice()
    - remover componentes do array

### funções
- function
  ```js
    function soma(a, b){
        return a + b
    }
  console.log(soma(10, 15))
  // retorna 25, a soma de a(10) e b(15)
    ```

## Atividades desenvolvidas
- #### jogo pokemon [aqui](https://codepen.io/Jo-o-Barboza/pen/poMoRbE)
  
- #### link para meu perfil no [codepen](https://codepen.io/Jo-o-Barboza)


