const  botoes  =  documento . querySelector ( ".botao" )
console .  log ( botões )
for  ( seja  i  =  0 ;  i  <  botoes . length  ;  i ++ ) {
  botoes [ eu ] .  onclique  =  função ( ) {
    for ( j = 0 ;  j < botoes . length ; j ++ ) {
    botoes [ j ] . lista de classes . remover ( "ativo" )
    }
    botoes [ j ] . lista de classes . add ( "ativo" )
    }
}

