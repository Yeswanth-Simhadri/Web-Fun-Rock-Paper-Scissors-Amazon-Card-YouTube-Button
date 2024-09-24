const values=JSON.parse(localStorage.getItem('final'))||{win:0,loose:0,tie:0}; 
function resultStatements(){
    document.querySelector('.allRes').innerHTML=`wins:${values.win} looses:${values.loose} ties:${values.tie}`; 
     
} 
function systemMove(){
    const computerNo=Math.random();
    if(computerNo>=0 && computerNo<1/3){
        computerMove='rock';
    }else if(computerNo>=1/3 && computerNo<2/3){
        computerMove='paper';
    }else{
        computerMove='scissors';
    }
return computerMove;
}
function result(move){
    let computerMove=systemMove();
    if(move==='rock'){
        
        if(computerMove==='rock'){
            res= 'tie';
        }else if(computerMove==='paper'){
            res='loose';
        }else{
            res = 'win';
        }

    }else if(move==='scissors'){
        if(computerMove==='rock'){
            res= 'loose';
        }else if(computerMove==='paper'){
            res='win';
        }else{
            res = 'tie';
        }
    }else if(move==='paper'){
        if(computerMove==='rock'){
            res= 'win';
        }else if(computerMove==='paper'){
            res='tie';
        }else{
            res = 'loose';
        }

    }
    if(res==='win'){
        values.win+=1;
    }else if(res==='loose'){
        values.loose+=1;
    }else if(res==='tie'){
        values.tie+=1;
    }
    localStorage.setItem('final',JSON.stringify(values));
    document.querySelector('.res-js').innerHTML=`${res}...`;
    document.querySelector('.both-choice').innerHTML=`computer: <img src="/images/${computerMove}-emoji.png" class="rpcImages">   <img src="/images/${move}-emoji.png" class="rpcImages">:you`
    resultStatements();
    
}
resultStatements();