console.clear();

const a = [66, 99];
const x = 99;



function check(a, x) {
        let rezult= false;
        for (let i = 0; i < a.length; i++){
            if (a[i] == x){
                rezult = true;
            }
        }
        return rezult
}

  const e = check(a,x);
  console.log(e);