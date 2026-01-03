// declaração de variáveis
var nome , sobrenome, nomeCompleto, idade, soma;

// atribuição de valores
nome = "Gustavo";
sobrenome = "Ribeiro";
idade = 21;
nomeCompleto = nome + " " + sobrenome;

soma = idade + 10;
pessoa  = nome + soma;

document.getElementById("texto").innerHTML = soma;
/**
 * RESUMO DE DIFERENÇA ENTRE let, const E var EM JAVASCRIPT
 *
 * 1. ESCOPO (Scope):
 *
 *    - var: Escopo de função ou global. É "içada" (hoisted) para o topo de seu escopo, podendo causar comportamentos inesperados.
 *
 *    - let: Escopo de bloco (delimitado por chaves {}, como em loops ou condicionais). Não permite redeclaração no mesmo escopo de bloco.
 *
 *    - const: Semelhante ao let, com escopo de bloco.
 *
 *
 * 2. REATRIBUIÇÃO (Reassignment):
 *
 *    - var: Pode ser atualizada (reatribuída) e redeclarada.
 *
 *    - let: Pode ser atualizada, mas não pode ser redeclarada no mesmo escopo.
 *
 *    - const: Não pode ser atualizada nem redeclarada. O valor é constante.
 *             *Nota Importante:* Para objetos e arrays, a *referência* é constante, mas o *conteúdo* interno (propriedades/elementos) pode ser modificado.
 *
 *
 * 3. HOISTING (Içamento):
 *
 *    - var: É içada e inicializada com 'undefined'.
 *
 *    - let e const: São içadas, mas não inicializadas. Acessá-las antes da declaração resulta em um erro de "ReferenceError" (entram na "Zona Temporalmente Morta").
 *
 *
 * PREFERÊNCIA MODERNA:
 * Em códigos JavaScript modernos (ES6+), a prática recomendada é usar `const` por padrão e `let` apenas se a variável precisar ter seu valor alterado posteriormente. O uso de `var` é desencorajado.
 */

